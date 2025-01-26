"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePathname, useRouter } from "next/navigation";
import { BusinessInfoTab } from "./business-info-tab";
import { ContactInfoTab } from "./contant-info-tab";
import { AddressInfoTab } from "./address-info-tab";
import { OperationalTab } from "./operational-tab";

export const NavbarOption = () => {
  const route = useRouter();
  const pathname = usePathname();

  return (
    <Tabs defaultValue="Business"  className=" mr-4">
      <TabsList className="md:max-w-[700px] grid grid-cols-4">
        <TabsTrigger value="Business">Business Details</TabsTrigger>
        <TabsTrigger value="Contact">Contact Details</TabsTrigger>
        <TabsTrigger value="Address">Address Details</TabsTrigger>
        <TabsTrigger value="Operational">Operational Details</TabsTrigger>
      </TabsList>
      <TabsContent className="" value="Business">
        <BusinessInfoTab />
      </TabsContent>
      <TabsContent className="" value="Contact">
        <ContactInfoTab />
      </TabsContent>
      <TabsContent className="" value="Address">
        <AddressInfoTab />
      </TabsContent>
      <TabsContent className="" value="Operational">
        <OperationalTab />
      </TabsContent>
    </Tabs>
  );
};
