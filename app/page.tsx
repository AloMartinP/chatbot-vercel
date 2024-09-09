'use client';

import {ModeToggle} from "@/components/ui/mode-toggle";
import Chat from "@/components/chat/chat";
import Header from "@/components/navigation/header";


export default function Page() {
    return (
        <>
            <Header/>
            <Chat/>
        </>
    );
}