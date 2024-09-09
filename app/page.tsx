'use client';

import {ModeToggle} from "@/components/ui/mode-toggle";
import Chat from "@/components/chat/chat";


export default function Page() {
    return (
        <div className="min-h-screen">
            <div className="absolute top-4 right-4 p-2 rounded-md shadow-md">
                <ModeToggle/>
            </div>
            <Chat/>
        </div>
    );
}