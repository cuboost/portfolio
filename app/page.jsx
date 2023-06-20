"use client";
import { useRouter } from "next/navigation";
import Intro from "./components/Intro";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/about");
    router.prefetch("/projects");
  });

  return (
    <main>
      {/* Intro With Picture */}
      <Intro />
    </main>
  );
}
