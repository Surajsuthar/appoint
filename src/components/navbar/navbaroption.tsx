"use client";

import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavbarOptionProps {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const NavbarOption = ({
  label,
  href,
  icon: Icon,
}: NavbarOptionProps) => {
  const route = useRouter();
  const pathname = usePathname();

  return (
    <div
      className={cn(
        " w-full flex text-muted-foreground items-center justify-center p-1.5 hover:text-white cursor-pointer hover:transition-all",
        pathname === href ? "bg-black text-white" : ""
      )}
    >
      <button
        className={cn(
          "flex justify-center items-center",
        )}
        onClick={() => {
          route.push(href);
        }}
        type="submit"
      >
         <Icon size={18} />
         <span className="ml-2 font-normal text-sm">{label}</span>
      </button>
     
    </div>
  );
};
