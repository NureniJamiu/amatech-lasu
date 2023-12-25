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

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";

const listStyle = `py-2 hover:text-blue-500 hover:underline`

const MobileMenu = () => {
  const { isSignedIn } = useUser()
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent className="bg-white">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription className=""></SheetDescription>
        </SheetHeader>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Students</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li className={listStyle}><a href="/students/executive-members">Executives</a></li>
                <li className={listStyle}><a href="/students/legislative-members">Legislatives</a></li>
                <li className={listStyle}><a href="/students/first-class-graduates">First Class Graduates</a></li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Academics</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li className={listStyle}><a href="/academics/learning-hub">Learning HUB</a></li>
                <li className={listStyle}><a href="/academics/all-offered-courses">All Courses</a></li>
                <li className={listStyle}><a href="/academics/cgpa-calculator">CGPA Calculator</a></li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <ul className="font-medium">
          <li className={`${listStyle} py-4 border-b`}><a href="/lecturers"><a></a>Lecturers</a></li>
          <li className={`${listStyle} py-4 border-b`}><a href="/blogs">Blogs</a></li>
        </ul>


        <div className="flex flex-col mt-3 gap-2">
          <Link href="/vote">
            <Button className="w-full border-2 rounded border-green-600 text-green-700 hover:bg-green-600 hover:text-white">
              Voting System
            </Button>
          </Link>
          <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
            <Button className="btn-gradient rounded w-full">{isSignedIn ? "Dashboard" : "Admin🔒"}</Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
