"use client"

import { Menu, Sparkles } from "lucide-react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { UserButton } from "@clerk/nextjs";

import MobileSidebar from "@/components/mobile-sidebar";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

const font = Poppins({
    weight: "600",
    subsets: ["latin"]
});

export const Navbar = () => {
    return (
        <div className="fixed z-50 flex items-center justify-between w-full h-16 px-4 py-2 border-b border-primary/10 bg-secondary">
            <div className="flex items-center">
                <MobileSidebar />
                <Link href="/">
                    <h1 className={cn("hidden text-xl font-bold md:block md:text-3xl text-primary",
                        font.className)}>
                        companion.ai
                    </h1>
                </Link>
            </div>
            <div className="flex items-center gap-x-3">
                <Button variant="premium" size="sm">
                    Upgrade
                    <Sparkles className="w-4 h-4 ml-2 text-white fill-white" />
                </Button>
                <ModeToggle />
                <UserButton />
            </div>
        </div >
    )
}