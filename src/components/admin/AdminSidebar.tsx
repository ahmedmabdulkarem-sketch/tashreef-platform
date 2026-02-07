"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    HomeIcon,
    CalendarIcon,
    UsersIcon,
    ChartBarIcon,
    Cog6ToothIcon,
    ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";

const navigation = [
    { name: "Dashboard", href: "/admin", icon: HomeIcon },
    { name: "Events", href: "/admin/events", icon: CalendarIcon },
    { name: "Guest Manager", href: "/admin/guests", icon: UsersIcon },
    { name: "Analytics", href: "/admin/analytics", icon: ChartBarIcon },
    { name: "Settings", href: "/admin/settings", icon: Cog6ToothIcon },
];

export default function AdminSidebar() {
    const pathname = usePathname();

    return (
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-slate-900 px-6 pb-4 border-r border-slate-800">
            <div className="flex h-16 shrink-0 items-center">
                <h1 className="text-xl font-bold text-white tracking-wide">
                    <span className="text-towa-gold">TASHREEF</span> ADMIN
                </h1>
            </div>
            <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                        <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className={`
                        group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold
                        ${isActive
                                                    ? "bg-slate-800 text-towa-gold"
                                                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                                                }
                      `}
                                        >
                                            <item.icon
                                                className="h-6 w-6 shrink-0"
                                                aria-hidden="true"
                                            />
                                            {item.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </li>
                    <li className="mt-auto">
                        <Link
                            href="#"
                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-slate-400 hover:bg-slate-800 hover:text-white"
                        >
                            <ArrowLeftOnRectangleIcon
                                className="h-6 w-6 shrink-0"
                                aria-hidden="true"
                            />
                            Sign out
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
