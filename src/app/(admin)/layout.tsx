import React from "react";
import { Navbar } from "@/components/navbar/navbar";
import { Sidebar } from "@/components/navbar/sidebar";
import { SearchBar } from "@/components/navbar/seach-box";

export default function adminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full">
      <section className="flex w-[65px] h-full inset-y-0 z-40 fixed border-r rounded-sm">
        <Sidebar />
      </section>
      <section className="flex ml-[65px] w-[calc(100%-65px)] h-[65px] inset-y-0 fixed ">
        <Navbar />
      </section>
      <section className="flex ml-[65px] w-[calc(100%-65px)] mt-[66px] h-[65px] inset-y-0 fixed">
        <SearchBar />
      </section>
      <section className="mt-[132px] ml-[129px] mr-4">{children}</section>
    </main>
  );
}
