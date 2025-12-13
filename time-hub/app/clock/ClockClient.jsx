"use client";
import { useEffect, useState } from "react";
export default function ClockClient() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="flex min-h-screen items-center justify-center w-screen flex-col bg-linear-to-r from-blue-300 via-0%0 to-green-300">
            <h1 className="text-4xl font-bold mb-5">الساعة الحالية</h1>

            <h1 className="text-6xl font-bold">{time.toLocaleTimeString("en-US", { hour12: true })}</h1>
        </div>
    );
}