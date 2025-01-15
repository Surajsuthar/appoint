import React from "react";
import { Navbar } from "@/components/navbar/navbar";

export default function adminLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <main className="h-full w-full">
            <section className="flex w-full h-[55px] border-b fixed">
                <Navbar/>
            </section>
            {children}
        </main>
    )
}