"use client";
import { ShopLable } from "./shop-label";
import { BreadcrumbOption } from "./bread-crumb";

export const Navbar = () => {
  return (
    <main className="ml-2 flex w-full justify-between items-center">
      <section className="ml-[60px] flex items-center justify-center space-x-4 rounded-sm">
        <BreadcrumbOption />
      </section>
      <section className="flex justify-center items-center mr-4 space-x-3">
        <div className="flex items-start md:flex">
          <ShopLable />
        </div>
      </section>
    </main>
  );
};
