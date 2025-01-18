"use client";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { SidebarOption } from "./sidebar-option";
import { upperRoute, downRoute } from "@/constant/navRoute";

export const Sidebar = () => {
  const aboveRoutes = upperRoute;
  const seondRoute = downRoute;
  return (
    <aside className="flex flex-col h-full w-full">
      <section className="flex justify-center items-center mt-3.5">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </section>
      <section className="mt-10 flex flex-col justify-between h-screen">
        <section className="flex flex-col space-y-8 items-center justify-center">
          {aboveRoutes.map((route) => {
            return (
              <SidebarOption
                label={route.label}
                href={route.href}
                key={route.label}
                icon={route.icon}
              />
            );
          })}
        </section>
        <section className="flex flex-col mb-12 items-center space-y-8 justify-center">
          {seondRoute.map((route) => {
            return (
              <SidebarOption
                label={route.label}
                href={route.href}
                key={route.label}
                icon={route.icon}
              />
            );
          })}
        </section>
      </section>
    </aside>
  );
};
