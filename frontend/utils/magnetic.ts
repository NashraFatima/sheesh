export function applyMagnetic(el: HTMLElement, strength = 0.35): () => void {
  // Magnetic hover effects disabled to keep interactions subtle and performant.
  // This is intentionally a no-op that preserves API shape so callers don't need changes.
  return () => {};
}
