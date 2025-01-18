"use client";

import { LucideIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SidebarOptionProps {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const SidebarOption = ({
  label,
  href,
  icon: Icon,
}: SidebarOptionProps) => {
  const route = useRouter();

  const handelClick = (href: string) => {
    route.push(href);
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="" onClick={() => handelClick(href)}>
            <Icon className="" size={22} />
          </button>
        </TooltipTrigger>
        <TooltipContent className="ml-5 bg-muted-foreground" side="right">
          <p className="font-medium">{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
