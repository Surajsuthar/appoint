import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/navbar/seach-box";
import React from "react";

export default function AccountLayout({ 
    children 
}: { children: React.ReactNode}){
    return (
        <div className="flex flex-col">
            <SearchBar/>
            <div className="flex">
            <div className="col-span-1 h-full flex flex-col space-y-2 w-[200px]">
                <Button className="text-start" variant="ghost">
                    hello 
                </Button>
                <Button variant="secondary">
                    hello 
                </Button>
                <Button variant="ghost">
                    hello 
                </Button>
                <Button variant="ghost">
                    hello 
                </Button>
                <Button variant="ghost">
                    hello 
                </Button>
                <Button variant="ghost">
                    hello 
                </Button>
            </div>
            <div className="ml-2">
            {children}
            </div>
            </div>

            
        </div>
    )
}