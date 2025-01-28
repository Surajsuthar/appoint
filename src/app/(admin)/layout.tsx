import React from "react";
import { Navbar } from "@/components/navbar/navbar";
import { Sidebar } from "@/components/navbar/sidebar";
import { Separator } from "@/components/ui/separator";
import { SearchBar } from "@/components/navbar/seach-box";

export default function adminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full">
      <aside className="flex w-[65px] inset-y-0 fixed">
        <Sidebar />
      </aside>
      <div className="ml-[65px] flex-1 flex mt-1 z-10  flex-col mr-4">
        <header className="fixed top-2 left-[65px]  right-3.5">
          <div className="flex flex-col space-y-3 w-full p-2">
            <Navbar />
            <SearchBar/>
          </div>
        </header>
        <div className="mt-[132px] ml-[65px] ">
          {children}
        </div>
      </div>
      {/* <Separator className="bg-green-300 fixed"/> */}
    </main>
  );
}
