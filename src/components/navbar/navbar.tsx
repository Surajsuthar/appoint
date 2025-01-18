"use client";
import { NavbarOption } from "./navbaroption";
import { Searchbar } from "./searchbar";
import { Switch } from "../ui/switch";
import { useState } from "react";

export const Navbar = () => {
  const [checked, setChecked] = useState(true);
  console.log("checked", checked);

  return (
    <main className="ml-2 flex w-full justify-between items-center">
      <section className="m-2.5 p-3 flex items-center justify-center space-x-4 rounded-sm">
        {/* <NavbarOption /> */}
      </section>
      <section className="flex justify-center items-center mr-4 space-x-3">
        <div className="flex items-center space-x-2">
          <Switch
            checked={checked}
            onCheckedChange={() => {
              setChecked(!checked);
            }}
            className="border"
          />
        </div>
        <Searchbar checked={checked} />
      </section>
    </main>
  );
};
