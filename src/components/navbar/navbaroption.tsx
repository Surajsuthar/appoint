"use client";

import { LucideIcon, House } from "lucide-react";
import { useRouter } from "next/navigation";
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
  const route = useRouter()

  return (
    <button
      className={cn("text-neutral-700  flex justify-center items-center font-semibold text-sm cursor-pointer hover:transition-all",
        href=="/home" ? "bg-black" : ""
      )}
      onClick={() => {
        route.push(href)
      }}
      type="submit"
    >
      <Icon size={18} />
      <span className="ml-2">{label}</span>
    </button>
  );
};
