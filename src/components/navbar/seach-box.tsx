"use client";
import { usePathname } from "next/navigation";
import { Input } from "../ui/input";
import { upperRoute, downRoute } from "@/pages/navRoute";

export const SearchBar = () => {
  const pathname = usePathname();

  
  return (
    <section className="flex w-full items-center justify-between">
      <aside>
        <p className="ml-16 font-bold text-3xl">{pathname?.split('/')[1]}</p>
      </aside>
    </section>
  );
};
