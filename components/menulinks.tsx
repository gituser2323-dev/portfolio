import { useEffect, useRef } from "react";
import gsap from "gsap";

type NavLink = {
  name: string;
  href: string;
};

interface MenuLinksProps {
  navLinks: NavLink[];
  setOpen: (val: boolean) => void;
}

export default function MenuLinks({ navLinks, setOpen }: MenuLinksProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".menu-item");

      items.forEach((el) => {
        const text = el.querySelector(".menu-text") as HTMLElement;
        const arrow = el.querySelector(".menu-arrow") as HTMLElement;

        const tl = gsap.timeline({ paused: true });

        tl.to(text, { x: 40, duration: 0.45, ease: "power3.out" }, 0)
          .to(arrow, { x: 0, opacity: 1, duration: 0.45, ease: "power3.out" }, 0);

        el.addEventListener("mouseenter", () => tl.play());
        el.addEventListener("mouseleave", () => tl.reverse());
      });
    }, containerRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-full flex flex-col justify-center pl-[10vw] gap-12"
    >
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={() => setOpen(false)}
          className="menu-item relative group text-[clamp(56px,7vw,96px)] font-medium text-white transition-colors duration-300"
        >
          <span className="menu-arrow absolute -left-14 opacity-0 text-red-600 text-4xl">
            →
          </span>

          <span className="menu-text group-hover:text-red-600">
            {link.name}
          </span>
        </a>
      ))}
    </div>
  );
}
