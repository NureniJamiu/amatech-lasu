"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Image from "next/image";
import Link from "next/link";

import MobileMenu from "../MobileMenu";

import { components } from "../../_mock";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-200 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Navbar = () => {
  const { isSignedIn } = useUser();

  return (
    <NavigationMenu
      className="sticky left-0 top-0 w-full px-5 py-1 bg-white shadow-2xl"
      suppressHydrationWarning
    >
      <NavigationMenuList className="md:px-10 lg:px-20 gap-5 w-full ">
        <div className="flex items-center justify-between w-full max-w-7xl">
          <NavigationMenuItem className="flex items-center gap-10">
            <NavigationMenuItem className="cursor-pointer">
              <div className="flex items-center gap-1">
                <Link
                  href="https://www.lasu.edu.ng"
                  target="__blank"
                  legacyBehavior
                  passHref
                >
                  <Image
                    src="/lasu.png"
                    alt="amatech logo"
                    width={50}
                    height={50}
                  />
                </Link>
                <Link href="/" legacyBehavior passHref>
                  <Image
                    src="/logo.jpg"
                    alt="amatech logo"
                    width={50}
                    height={50}
                  />
                </Link>
              </div>
            </NavigationMenuItem>

            <NavigationMenuItem className="hidden lg:flex items-center">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Students</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[300px] lg:w-[400px] lg:grid-cols-[1fr_1fr] bg-white rounded-xl bg-opacity-80">
                    <ListItem
                      href="/students/executive-members"
                      title="Student Executives"
                    >
                      Meet our SEC Members
                    </ListItem>
                    <ListItem
                      href="/students/legislative-members"
                      title="Student Legislatives"
                    >
                      Meet our SLC Members
                    </ListItem>
                    <ListItem
                      href="/students/first-class-graduates"
                      title="First Class Graduates"
                    >
                      Past students with First Class Honours
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Academics</NavigationMenuTrigger>
                <NavigationMenuContent className="">
                  <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px] bg-white rounded-xl bg-opacity-80">
                    {components.map((component: any) => (
                      <ListItem
                        key={component?.title}
                        title={component?.title}
                        href={component?.href}
                      >
                        {component?.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/lecturers" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Lecturers
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/blogs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Blogs
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuItem>
          </NavigationMenuItem>

          <NavigationMenuItem className="hidden lg:flex items-center gap-2">
            <Link href="/academics/learning-hub">
              <Button className="border-2 rounded border-green-800 text-green-800 hover:bg-green-600 hover:text-white">
                Learning Hub
              </Button>
            </Link>
            <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
              <Button className="btn-gradient rounded">
                {isSignedIn ? "Dashboard" : "Admin🔒"}
              </Button>
            </Link>
          </NavigationMenuItem>
          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
