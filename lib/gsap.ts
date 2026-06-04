import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

let registered = false

export function initGSAP() {
  if (typeof window === "undefined") return

  if (!registered) {
    gsap.registerPlugin(ScrollTrigger)
    registered = true
  }
}

export { gsap }
