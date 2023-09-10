"use client"

import ModeToggle from "./ModeToggle";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Button } from "./ui/button";

type MenuPosition = "0" | "-50vw"

const Navbar = () => {
    const [menuPosition, setMenuPosition] = useState<MenuPosition>("-50vw");

    const openMenu = () => {
        setMenuPosition("0");
    }

    const closeMenu = () => {
        setMenuPosition("-50vw")
    }

    return (
        <nav className="flex justify-between p-5 items-center border-b-[1px] sm:px-10">
            <div className="text-2xl font-bold">Tickets</div>

            <section className="flex gap-5 items-center">
                <ModeToggle />
                <Button onClick={openMenu} variant={"outline"} className="px-2 py-4">
                    <HamburgerMenuIcon className="w-5 h-6" />
                </Button>
            </section>

            <section className={`right-[${menuPosition}] bottom-0 top-0 absolute w-96 bg-background border-l-[1px] p-5 transition-all duration-700`}>
                <Button onClick={closeMenu} variant={"outline"} className="px-2 py-4">
                    <Cross1Icon className="w-5 h-6" />
                </Button>
            </section>
        </nav>
    )
}

export default Navbar;