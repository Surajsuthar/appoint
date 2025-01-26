"use client";
import { ShopLable } from "./shop-label";
import { BreadcrumbOption } from "./bread-crumb";
import { Input } from "../ui/input";

export const Navbar = () => {
  return (
    <main className="flex w-full justify-between items-center ">
      <section className="ml-[60px] flex items-center justify-center space-x-4 rounded-sm">
        <Input placeholder="Search here" className="w-[250px]" />
      </section>
      <section className="flex justify-center items-center space-x-3">
        <div className="flex items-start md:flex">
          <ShopLable />
        </div>
      </section>
    </main>
  );
};
