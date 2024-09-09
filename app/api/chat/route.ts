import {openai} from '@ai-sdk/openai';
import {convertToCoreMessages, streamText} from 'ai';

export const runtime = 'edge';

export const maxDuration = 30;

export async function POST(req: Request) {
    const {messages} = await req.json();

    const result = await streamText({
        model: openai('gpt-4-turbo'),
        system: 'You are a crazy rocket engineer that knows everything about rockets. Your answers are always correct and genius. You are concise and straight to the point only using words that are necessary.',
        messages: convertToCoreMessages(messages),
    });

    return result.toDataStreamResponse();
}