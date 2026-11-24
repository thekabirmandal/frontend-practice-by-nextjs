"use client";
import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-1 flex-col items-center justify-center min-h-screen gap-6 p-4">
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <div className="text-3xl font-semibold tracking-tight">
                    Count: <span className="font-mono text-blue-600 dark:text-blue-400">{count}</span>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setCount((prev) => prev === 0 ? 0 : prev - 1)}
                        className="rounded-lg border border-zinc-200 px-4 py-2 font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 cursor-pointer"
                    >
                        - Decrement
                    </button>
                    <button
                        onClick={() => setCount((prev) => prev + 1)}
                        className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700 cursor-pointer"
                    >
                        + Increment
                    </button>
                </div>
                <div className="">
                    <button onClick={() => setCount(0)} className="rounded-lg border border-zinc-200 px-4 py-2 font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 cursor-pointer">Reset</button>
                </div>
            </div>
        </div>
    );
}
