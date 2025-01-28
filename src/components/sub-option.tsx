"use client"
import { MainRoute } from "@/pages/navRoute"
import { LucideIcon } from "lucide-react"
import { buttonVariants } from "./ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

interface SubOptionsProps {
    item: MainRoute[]
}

export const SubOptions = ({ 
    item 
}: SubOptionsProps) => {
    const pathname = usePathname()

    return(
        <div className="w-[250px] flex flex-col space-y-2">
            {item.map((route) => (
                <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                        buttonVariants({ variant: 'link' }),
                        pathname === route.href
                            ? 'bg-muted hover:bg-muted'
                            : 'hover:bg-transparent hover:underline',
                        'justify-start w-full'
                    )}
                >
                    <route.icon className="mr-2 h-4 w-4" />
                    {route.label}
                </Link>
            ))}
        </div>
    )
}