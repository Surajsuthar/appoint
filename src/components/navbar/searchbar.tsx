"use client"

import * as React from "react"
import { Check, ChevronsUpDown, LogOut } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { allRoute } from "@/constant/navRoute"
import { Label } from "../ui/label"

const frameworks = allRoute

export function Searchbar() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] font-semibold justify-between"
        >
          <div className="h-5 w-5 rounded-full bg-green-400"/>
          The Tatto Artist
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandGroup className="">
                <CommandItem className="flex justify-between cursor-pointer">
                  <button className="flex">
                    Log out
                  </button>
                  <LogOut/>
                </CommandItem>
                <CommandItem className="flex mt-1 justify-between cursor-pointer">
                  <button className="flex">
                    Log out
                  </button>
                  <LogOut/>
                </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
