"use client";
import { usePathname } from "next/navigation";
import { Input } from "../ui/input";
import { upperRoute, downRoute } from "@/constant/navRoute";

export const SearchBar = () => {
  const pathname = usePathname();

  const pageName = upperRoute.filter((data) => data.href==pathname)
  const sPageName = downRoute.filter((data) => data.href==pathname)

  return (
    <section className="flex w-full items-center justify-between">
      <aside>
        <p className="ml-16 font-bold text-3xl">{pageName[0]?.label || sPageName[0]?.label}</p>
      </aside>
      <aside>
        <Input placeholder="Search here" className="w-[250px] mr-4" />
      </aside>
    </section>
  );
};
