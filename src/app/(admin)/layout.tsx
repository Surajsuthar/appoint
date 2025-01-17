import React from "react";
import { Navbar } from "@/components/navbar/navbar";

export default function adminLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <main className="w-full">
            <section className="flex w-full h-[65px] inset-y-0 fixed">
                <Navbar/>
            </section>
            <section className="mt-[66px]">
              {children}
            </section>
        </main>
    )
}