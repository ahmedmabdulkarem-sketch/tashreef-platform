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
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-slate-900 px-6 pb-4 border-r border-slate-800 shadow-xl">
            {/* Brand Logo Area */}
            <div className="flex h-20 shrink-0 items-center justify-center border-b border-slate-800/50 mb-2">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-towa-gold to-yellow-600 flex items-center justify-center shadow-lg shadow-yellow-900/20">
                        <span className="text-white font-bold text-xl">T</span>
                    </div>
                    <h1 className="text-xl font-bold text-white tracking-wide">
                        TASHREEF
                    </h1>
                </div>
            </div>

            <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                        <div className="text-xs font-semibold leading-6 text-slate-400 mb-2 uppercase tracking-wider">Menu</div>
                        <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => {
                                const isActive = pathname.startsWith(item.href) && (item.href !== '/admin' || pathname === '/admin');
                                return (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className={`
                        group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold transition-all duration-200
                        ${isActive
                                                    ? "bg-gradient-to-r from-towa-navy to-slate-800 text-towa-gold shadow-md border-l-4 border-towa-gold"
                                                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                                                }
                      `}
                                        >
                                            <item.icon
                                                className={`h-5 w-5 shrink-0 transition-colors ${isActive ? 'text-towa-gold' : 'text-slate-500 group-hover:text-white'}`}
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
                        <div className="rounded-xl bg-slate-800/50 p-4 mb-4 border border-slate-700/50">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-medium border border-slate-600">
                                    AA
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-white truncate">Ahmed A.</p>
                                    <p className="text-xs text-slate-400 truncate">Event Manager</p>
                                </div>
                                <button className="text-slate-400 hover:text-white">
                                    <ArrowLeftOnRectangleIcon className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
