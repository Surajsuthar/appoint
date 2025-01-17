"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export const NavbarOption = () => {
  const route = useRouter();
  const pathname = usePathname();

  return (
    <Tabs defaultValue="account" className="w-[400px] mr-4">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="passwor1d">Password</TabsTrigger>
        <TabsTrigger value="passwo1rd">Password</TabsTrigger>
        <TabsTrigger value="pas1sword">Password</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};
