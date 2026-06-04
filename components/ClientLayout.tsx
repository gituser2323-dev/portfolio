"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import SmoothScroll from "@/components/SmoothScroll";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import GlobalActionDock from "@/components/GlobalActionDock";
import AnimationGuard from "@/components/AnimationGuard";
import PageWrapper from "@/components/PageWrapper";
import { CareerModal } from "@/components/CareerModal";
import { Analytics } from "@vercel/analytics/next";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openModal, setOpenModal] = useState(false);
  const pathname = usePathname();

const isLanding = 
  pathname.startsWith("/landing") || 
  pathname.startsWith("/meta");

  useEffect(() => {
    if (pathname !== "/" || isLanding) return;

    const alreadyShown = sessionStorage.getItem("careerModalShown");
    if (alreadyShown) return;

    const timer = setTimeout(() => {
      setOpenModal(true);
      sessionStorage.setItem("careerModalShown", "true");
    }, 5000);

    return () => clearTimeout(timer);
  }, [pathname, isLanding]);

  return (
    <SmoothScroll>
      {!isLanding && (
        <Navbar openModal={() => setOpenModal(true)} />
      )}

      <AnimationGuard />
      <PageWrapper>{children}</PageWrapper>

      <GlobalActionDock />

      {!isLanding && <Footer />}

      <Analytics />

      <CareerModal open={openModal} setOpen={setOpenModal} />
    </SmoothScroll>
  );
}