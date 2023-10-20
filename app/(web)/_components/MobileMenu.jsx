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
import { navLinks } from "../_mock";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription className=""></SheetDescription>
        </SheetHeader>
        <div>
          {navLinks.map(({ title, url }) => (
            <p key={title} className="py-2 text-lg ">
              <Link href={url} className="capitalize hover:text-green-700">
                {title}
              </Link>
            </p>
          ))}
        </div>

        <div className="flex flex-col mt-3 gap-2">
          <Link href="/vote">
            <Button className="border-2 rounded-full border-green-600 text-green-700 hover:bg-green-600 hover:text-white">
              Voting System
            </Button>
          </Link>
          <Link href="/sign-in">
            <Button className="btn-gradient rounded-full">Admin🔒</Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
