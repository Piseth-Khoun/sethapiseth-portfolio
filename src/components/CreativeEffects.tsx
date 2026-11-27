"use client";

import { useEffect, useRef } from "react";

export function CreativeEffects() {
  const glowRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopViewport = window.matchMedia("(min-width: 621px)");

    const glowElement = glowRef.current;
    const cursorElement = cursorRef.current;
    if (glowElement === null || cursorElement === null) return;

    function cursorEnabled() {
      return finePointer.matches && !reducedMotion.matches && desktopViewport.matches;
    }

    function syncCursorMode() {
      const enabled = cursorEnabled();
      if (!enabled) {
        cursorRef.current?.classList.add("is-hidden");
        cursorRef.current?.classList.remove("is-visible");
      }
    }

    syncCursorMode();
    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;

    function onPointerMove(event: PointerEvent) {
      if (!cursorEnabled()) return;
      pointerX = event.clientX;
      pointerY = event.clientY;

      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        glowRef.current?.style.setProperty(
          "transform",
          `translate3d(${pointerX}px, ${pointerY}px, 0) translate(-50%, -50%)`,
        );
        cursorRef.current?.style.setProperty(
          "transform",
          `translate3d(${pointerX}px, ${pointerY}px, 0) translate(-50%, -50%)`,
        );
        cursorRef.current?.classList.remove("is-hidden");
        cursorRef.current?.classList.add("is-visible");
        frame = 0;
      });
    }

    function onPointerOver(event: PointerEvent) {
      if (!cursorEnabled()) return;
      const target = event.target;
      if (!(target instanceof Element)) return;

      if (!cursorRef.current) return;
      cursorRef.current.dataset.mode = target.closest(".project-card")
        ? "project"
        : target.closest("a, button, [role='button']")
          ? "link"
          : "default";
    }

    function onPointerDown() {
      cursorRef.current?.classList.add("is-pressed");
    }

    function onPointerUp() {
      cursorRef.current?.classList.remove("is-pressed");
    }

    function onPointerLeave() {
      cursorRef.current?.classList.add("is-hidden");
      cursorRef.current?.classList.remove("is-visible");
    }

    function onPointerEnter() {
      cursorRef.current?.classList.remove("is-hidden");
    }

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerover", onPointerOver, { passive: true });
    document.addEventListener("pointerdown", onPointerDown, { passive: true });
    document.addEventListener("pointerup", onPointerUp, { passive: true });
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    document.documentElement.addEventListener("pointerenter", onPointerEnter);
    finePointer.addEventListener("change", syncCursorMode);
    reducedMotion.addEventListener("change", syncCursorMode);
    desktopViewport.addEventListener("change", syncCursorMode);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("pointerup", onPointerUp);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      document.documentElement.removeEventListener("pointerenter", onPointerEnter);
      finePointer.removeEventListener("change", syncCursorMode);
      reducedMotion.removeEventListener("change", syncCursorMode);
      desktopViewport.removeEventListener("change", syncCursorMode);
    };
  }, []);

  return (
    <>
      <div className="creative-effects" aria-hidden="true">
        <div className="ambient-grid" />
        <div className="ambient-connections" />
        <div className="ambient-particles">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="ambient-orb ambient-orb-blue" />
        <div className="ambient-orb ambient-orb-purple" />
        <div className="ambient-pointer-glow" ref={glowRef} />
      </div>
      <div className="custom-cursor" ref={cursorRef} data-mode="default">
        <span />
      </div>
    </>
  );
}
