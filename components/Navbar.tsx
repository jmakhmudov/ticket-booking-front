"use client"

import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import ModeToggle from "./ModeToggle";
import { Button } from "./ui/button";
import { useState } from "react";

type MenuPosition = "0" | "-100vw"

const Navbar = () => {
    const [menu, setMenu] = useState<boolean>(false);

    const handleClick = () => {
        setMenu(!menu);
    }

    return (
        <nav className="flex justify-between p-5 items-center border-b-[1px] sm:px-10">
            <div className="text-2xl font-bold">Tickets</div>

            <section className="flex gap-5 items-center">
                <ModeToggle />
                <Button onClick={handleClick} variant={"outline"} className="px-2 py-4">
                    <HamburgerMenuIcon className="w-5 h-6" />
                </Button>
            </section>

            <section className={`${menu ? "right-0" : "right-[-100vw]"} bottom-0 top-0 absolute w-72 bg-background border-l-[1px] p-5 transition-all duration-700`}>
                <Button onClick={handleClick} variant={"outline"} className="px-2 py-4">
                    <Cross1Icon className="w-5 h-6" />
                </Button>
            </section>
        </nav>
    )
}

export default Navbar;