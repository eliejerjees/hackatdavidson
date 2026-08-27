"use client";

import { useEffect, useRef } from "react";

/**
 * Procedural sand topography. A smooth scalar field is traced with marching
 * squares into contour lines, and the cursor presses a soft mound into it —
 * so moving the mouse pushes the sand around. Not a map of anywhere real.
 */

const LEVELS = 13;
const RANGE = 1.05; // field roughly spans ±1.1
const INDEX_EVERY = 4; // every nth contour drawn heavier, like a topo map
const CELL = 20; // target cell size in CSS px
const WAVE = 210; // px per field unit

/* --- feel. All of these are seconds or px, never per-frame. --- */
const SIGMA = 225; // cursor mound radius, px — bigger reads slower
const AMP = 1.9; // how hard the cursor presses
const DRIFT = 0.3; // ambient breathing, 0 = terrain holds perfectly still
const FOLLOW_TAU = 0.45; // s for the mound to catch the pointer
const AMP_IN_TAU = 0.5; // s to press in
const AMP_OUT_TAU = 1.2; // s to settle back once the pointer leaves
const MAX_DT = 0.05; // s — clamp so a backgrounded tab doesn't snap on return

export default function SandTopography({
  className = "",
}: {
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let cols = 0;
    let rows = 0;
    let cell = CELL;
    let grid = new Float32Array(0);

    // cursor mound: target vs. eased actual, so the sand lags the pointer
    let tx = 0;
    let ty = 0;
    let mx = 0;
    let my = 0;
    let targetAmp = 0;
    let amp = 0;

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      // A collapsed container would give cell = 0 and rows = Infinity.
      if (rect.width < 2 || rect.height < 2) {
        cols = 0;
        rows = 0;
        return;
      }
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas!.width = Math.round(w * dpr);
      canvas!.height = Math.round(h * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.max(20, Math.min(90, Math.round(w / CELL)));
      cell = w / cols;
      rows = Math.max(12, Math.min(220, Math.round(h / cell)));
      grid = new Float32Array((cols + 1) * (rows + 1));
      if (still) draw(0);
    }

    function fill(t: number) {
      for (let j = 0; j <= rows; j++) {
        const py = j * cell;
        const v = py / WAVE;
        for (let i = 0; i <= cols; i++) {
          const px = i * cell;
          const u = px / WAVE;
          const d = t * DRIFT;
          let f =
            0.58 * Math.sin(u * 1.05 + 0.55 * Math.sin(v * 0.72 + d * 0.09)) +
            0.34 * Math.cos(v * 1.24 + 0.45 * Math.sin(u * 0.88 - d * 0.07)) +
            0.22 * Math.sin((u + v) * 0.78 + d * 0.05);
          if (amp > 0.002) {
            const dx = px - mx;
            const dy = py - my;
            f += amp * Math.exp(-(dx * dx + dy * dy) / (2 * SIGMA * SIGMA));
          }
          grid[j * (cols + 1) + i] = f;
        }
      }
    }

    function draw(t: number) {
      if (cols === 0 || rows === 0) return;
      fill(t);
      ctx!.clearRect(0, 0, w, h);
      ctx!.lineJoin = "round";
      ctx!.lineCap = "round";

      for (let l = 0; l < LEVELS; l++) {
        const level = -RANGE + (2 * RANGE * l) / (LEVELS - 1);
        const isIndex = l % INDEX_EVERY === 0;
        const path = new Path2D();

        for (let j = 0; j < rows; j++) {
          for (let i = 0; i < cols; i++) {
            const x0 = i * cell;
            const y0 = j * cell;
            const x1 = x0 + cell;
            const y1 = y0 + cell;
            const k = j * (cols + 1) + i;
            const a = grid[k];
            const b = grid[k + 1];
            const c = grid[k + cols + 2];
            const d = grid[k + cols + 1];

            const code =
              (a > level ? 8 : 0) |
              (b > level ? 4 : 0) |
              (c > level ? 2 : 0) |
              (d > level ? 1 : 0);
            if (code === 0 || code === 15) continue;

            // edge crossings, linearly interpolated
            const top = (): [number, number] => [
              x0 + (cell * (level - a)) / (b - a),
              y0,
            ];
            const right = (): [number, number] => [
              x1,
              y0 + (cell * (level - b)) / (c - b),
            ];
            const bottom = (): [number, number] => [
              x0 + (cell * (level - d)) / (c - d),
              y1,
            ];
            const left = (): [number, number] => [
              x0,
              y0 + (cell * (level - a)) / (d - a),
            ];

            const seg = (
              p: [number, number],
              q: [number, number],
            ) => {
              path.moveTo(p[0], p[1]);
              path.lineTo(q[0], q[1]);
            };

            switch (code) {
              case 1:
              case 14:
                seg(left(), bottom());
                break;
              case 2:
              case 13:
                seg(bottom(), right());
                break;
              case 3:
              case 12:
                seg(left(), right());
                break;
              case 4:
              case 11:
                seg(top(), right());
                break;
              case 6:
              case 9:
                seg(top(), bottom());
                break;
              case 7:
              case 8:
                seg(top(), left());
                break;
              case 5: // saddle
                seg(top(), left());
                seg(bottom(), right());
                break;
              case 10: // saddle
                seg(top(), right());
                seg(left(), bottom());
                break;
            }
          }
        }

        ctx!.strokeStyle = isIndex
          ? "rgba(233,222,211,.62)"
          : "rgba(233,222,211,.34)";
        ctx!.lineWidth = isIndex ? 1.7 : 1;
        ctx!.stroke(path);
      }
    }

    let raf = 0;
    const start = performance.now();
    let last = start;

    /** Exponential smoothing with a time constant, so 60Hz and 120Hz match. */
    function approach(current: number, target: number, tau: number, dt: number) {
      return current + (target - current) * (1 - Math.exp(-dt / tau));
    }

    function frame(now: number) {
      if (!running) return;
      const t = (now - start) / 1000;
      const dt = Math.min((now - last) / 1000, MAX_DT);
      last = now;

      if (cols === 0 || rows === 0) {
        resize();
        raf = requestAnimationFrame(frame);
        return;
      }

      // the mound trails the pointer, and settles slower than it presses
      mx = approach(mx, tx, FOLLOW_TAU, dt);
      my = approach(my, ty, FOLLOW_TAU, dt);
      amp = approach(
        amp,
        targetAmp,
        targetAmp > amp ? AMP_IN_TAU : AMP_OUT_TAU,
        dt,
      );

      draw(t);
      raf = requestAnimationFrame(frame);
    }

    function onPointer(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      tx = e.clientX - rect.left;
      ty = e.clientY - rect.top;
      targetAmp = AMP;
    }

    function onLeave() {
      targetAmp = 0;
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    // Stop burning frames once the hero has scrolled away.
    let running = false;
    function play() {
      if (running || still) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    }
    function pause() {
      running = false;
      cancelAnimationFrame(raf);
    }

    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? play() : pause()),
      { threshold: 0 },
    );
    io.observe(canvas);

    if (!still) {
      window.addEventListener("pointermove", onPointer, { passive: true });
      window.addEventListener("pointerdown", onPointer, { passive: true });
      document.addEventListener("pointerleave", onLeave);
    }

    return () => {
      ro.disconnect();
      io.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden />;
}
