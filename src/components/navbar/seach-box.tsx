"use client";
import { usePathname } from "next/navigation";
import { Input } from "../ui/input";

export const SearchBar = () => {
  const pathname = usePathname();

  return (
    <section className="flex w-full items-center justify-between">
      <aside>
        <p className="ml-16 font-bold text-3xl">Account</p>
      </aside>
      <aside>
        <Input placeholder="Search here" className="w-[250px] mr-4" />
      </aside>
    </section>
  );
};
