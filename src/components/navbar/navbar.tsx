"use client";
import { NavbarOption } from "./navbaroption";
import { Searchbar } from "./searchbar";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";

export const Navbar = () => {
  return (
    <main className="ml-4 flex w-full justify-between items-center">
      <section className="m-2.5 p-3 flex items-center justify-center space-x-4 rounded-sm">
        <NavbarOption />
      </section>
      <section className="flex justify-center items-center mr-4 space-x-3">
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" className="bg-green-600" />
          <Label htmlFor="airplane-mode"></Label>
        </div>
        <Searchbar />
      </section>
    </main>
  );
};
