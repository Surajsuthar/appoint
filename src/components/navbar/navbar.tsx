"use client"
import { NavbarOption } from "./navbaroption"
import { allRoute } from "@/constant/navRoute"

export const Navbar = () => {
    const routes = allRoute
    return (
       <main className="ml-7 flex w-full justify-between">
            <section className="m-2.5 p-3 flex items-center justify-center bg-zinc-800 space-x-5 rounded-sm">
                {routes.map((route) => {
                    return (
                        <NavbarOption
                        href={route.href}
                        key={route.label}
                        label={route.label}
                        icon={route.icon}
                        />
                    )
                }) }
            </section>
       </main>
    )
}