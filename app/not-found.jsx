"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/");
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-start text-center">
      <h1 className=" text-teal-600 text-6xl p-8">Sorry...</h1>
      <h2 className=" text-2xl p-8">That page could not be found.</h2>
      <Link href="/" replace>
        <button className=" m-5">Home</button>
      </Link>
    </div>
  );
}
