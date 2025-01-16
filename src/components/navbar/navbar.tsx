"use client"
import { NavbarOption } from "./navbaroption"
import { allRoute } from "@/constant/navRoute"
import { Searchbar } from "./searchbar"

export const Navbar = () => {
    const routes = allRoute
    return (
       <main className="ml-4 flex w-full justify-between">
            <section className="m-2.5 p-3 flex items-center justify-center space-x-4 rounded-sm">
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
            <section className="flex justify-center items-center mr-4">
                <Searchbar/>
            </section>
       </main>
    )
}