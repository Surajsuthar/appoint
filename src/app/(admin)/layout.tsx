import { Navbar } from "@/components/navbar/navbar";
import React from "react";


export default function adminLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <main className="h-full w-full">
            <section className="flex w-full h-[55px] border-b border-gray-700 fixed">
                <Navbar/>
            </section>
            {children}
        </main>
    )
}