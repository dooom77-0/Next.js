"use client";

import moment from "moment-hijri";

export default function DateClient() {
    moment.locale("en");
    const todayHijri = moment().format("iYYYY/iM/iD"); // السنة/الشهر/اليوم هجري
    const todayGregorian = moment().format("YYYY/M/D"); // ميلادي
    return (
        <div className="flex min-h-screen items-center justify-center w-screen flex-col bg-linear-to-r from-blue-300 via-0%0 to-green-300">
            <h1 className="text-4xl font-bold mb-10">التاريخ الحالي</h1>
            <h2 className="text-6xl font-bold text-shadow-lg my-10">التاريخ الميلادي : {todayGregorian}</h2>
            <h2 className="text-6xl font-bold text-shadow-lg">التاريخ الهجري : {todayHijri}</h2>
        </div>
    );
}