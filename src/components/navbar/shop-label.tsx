"use client";

import * as React from "react";
import { Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export function ShopLable() {
  const [change, setChange] = React.useState(false);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className="min-w-[200px] font-semibold justify-between"
          onClick={() => setChange(!change)}
        >
          <div
            className={cn(
              "h-5 w-5 rounded-full",
              change
                ? "transition-all bg-green-400"
                : "transition-all bg-muted-foreground",
            )}
          />
          The Tatto Artist
          <Store className="opacity-50" />
        </Button>
      </PopoverTrigger>
    </Popover>
  );
}
