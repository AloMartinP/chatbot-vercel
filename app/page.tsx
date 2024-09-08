'use client';

import {useState, useRef, useEffect} from 'react';
import {useChat} from 'ai/react';
import {ModeToggle} from "@/components/ui/mode-toggle";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {RocketIcon, StopIcon} from "@radix-ui/react-icons";

export default function Page() {
    const {messages, input, handleInputChange, handleSubmit, isLoading, stop} = useChat();
    const [textareaValue, setTextareaValue] = useState(input);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const adjustTextareaHeight = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = "auto";
            textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
        }
    };

    useEffect(() => {
        adjustTextareaHeight();
    }, [textareaValue]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextareaValue(e.target.value);
        handleInputChange(e);
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (textareaValue.trim().length > 0) {
            handleSubmit(e);
            setTextareaValue("");
        }
    };


    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            if (textareaValue.trim().length > 0) {
                handleFormSubmit(e as any);
            }
        }
    };

    return (
        <div className="bg-background min-h-screen">
            <div className="absolute top-4 right-4 p-2 rounded-md shadow-md">
                <ModeToggle/>
            </div>
            <div className="flex flex-col w-full max-w-2xl py-24 mx-auto">
                {messages.map(m => (
                    <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} mb-2`}>
                        <div
                            className={`p-3 rounded-lg ${m.role === 'user' ? 'bg-orange-400 text-white' : 'text-white'}`}
                            style={{maxWidth: '80%'}}
                        >
                            {m.content}
                        </div>
                    </div>
                ))}

                <form onSubmit={handleFormSubmit}>
                    <div
                        className="flex items-center bg-background fixed bottom-0 w-full max-w-2xl p-2 mb-8 shadow-xl rounded-2xl border focus-visible:ring-1">
                        <Textarea
                            ref={textareaRef}
                            placeholder="Say something..."
                            className="flex-grow resize-none rounded-lg border-none focus-visible:ring-0 focus:outline-none"
                            value={textareaValue}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            rows={1}
                            style={{
                                maxHeight: "200px",
                                minHeight: "auto",
                                overflowY: textareaValue.length === 0 ? 'hidden' : 'auto'
                            }}
                        />
                        {!isLoading ? (
                            <Button
                                className="p-2 rounded-full  bg-background bg-orange-400 hover:bg-orange-400 text-white"
                                type="submit"
                                disabled={textareaValue.trim().length === 0 || isLoading}
                            >
                                <RocketIcon className="h-6 w-6"/>
                            </Button>) : (
                            <Button
                                className="p-2 rounded-full bg-background text-red-500"
                                type="button"
                                onClick={stop}
                                disabled={!isLoading}
                            >
                                <StopIcon className="h-6 w-6"/>
                            </Button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}