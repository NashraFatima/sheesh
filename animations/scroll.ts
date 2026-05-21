import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function registerScrollTrigger() {
  if (typeof window === "undefined" || registered) return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export function fadeUpReveal(
  selector: string | Element | Element[] | NodeListOf<Element>,
  options?: {
    y?: number;
    stagger?: number;
    start?: string;
    delay?: number;
  }
) {
  registerScrollTrigger();
  const { y = 60, stagger = 0.12, start = "top 85%", delay = 0 } = options ?? {};
  const targets =
    selector instanceof NodeList ? Array.from(selector) : selector;

  gsap.from(targets, {
    y,
    opacity: 0,
    duration: 1.2,
    stagger,
    delay,
    ease: "power3.out",
    scrollTrigger: {
      trigger: targets,
      start,
      toggleActions: "play none none reverse",
    },
  });
}

export function parallaxElement(
  element: Element | string,
  speed = 0.3
) {
  registerScrollTrigger();
  gsap.to(element, {
    yPercent: speed * 100,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
}

export function scaleOnScroll(element: Element | string) {
  registerScrollTrigger();
  gsap.fromTo(
    element,
    { scale: 1.15 },
    {
      scale: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "center center",
        scrub: 1.2,
      },
    }
  );
}

export function refreshScrollTrigger() {
  if (typeof window === "undefined") return;
  registerScrollTrigger();
  ScrollTrigger.refresh();
}
