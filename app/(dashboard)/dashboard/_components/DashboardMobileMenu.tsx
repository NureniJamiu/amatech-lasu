"use client";

import React from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import SideNav from "./SideNav";

const DashboardMobileMenu = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu />
            </SheetTrigger>
            <SheetContent side={"left"} className="bg-white w-[300px]">
                <SheetHeader>
                    <SheetTitle></SheetTitle>
                    <SheetDescription className=""></SheetDescription>
                </SheetHeader>

                <SideNav />
            </SheetContent>
        </Sheet>
    );
};

export default DashboardMobileMenu;
