import Link from "next/link"
import { Button } from "@/components/ui/button"
import React from 'react';
import {RocketIcon, PersonIcon} from "@radix-ui/react-icons";

export default function Header() {
    return (
        <div className="flex flex-col w-full">
            <header className="flex items-center justify-between h-16 px-4 border-b lg:px-6">
                <Link href="#" className="flex items-center gap-2 font-semibold" >
                    <RocketIcon className="h-6 w-6 text-orange-400" />
                    <span className="text-orange-400">RocketChat</span>
                </Link>
                <div className="flex items-center space-x-4">
                    <Link href="#" className="flex items-center space-x-2 font-medium">
                        <PersonIcon className="w-4 h-4" />
                        <span>Sign in</span>
                    </Link>
                    <Button variant="outline">Sign Up</Button>
                </div>
            </header>
        </div>
    )
}