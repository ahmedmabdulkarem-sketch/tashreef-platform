"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeftIcon, UserPlusIcon, ArrowUpTrayIcon } from "@heroicons/react/24/outline";

// Mock Data
const event = {
    id: "1",
    title: "Towa Annual Town Hall",
    date: "2026-03-15T09:00:00",
    location: "Riyadh Front",
    status: "scheduled",
    capacity: 200,
};

const mockGuests = [
    { id: "101", name: "Ahmed Abdulkarem", phone: "+966500000001", rsvp: "confirmed", plus_one: 0 },
    { id: "102", name: "Sara Ali", phone: "+966500000002", rsvp: "pending", plus_one: 1 },
    { id: "103", name: "Khalid Mohammed", phone: "+966500000003", rsvp: "declined", plus_one: 0 },
];

export default function EventDetailsPage() {
    const [activeTab, setActiveTab] = useState("guests");

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <Link
                    href="/admin/events"
                    className="inline-flex items-center text-sm text-slate-500 hover:text-slate-700 mb-4"
                >
                    <ArrowLeftIcon className="h-4 w-4 mr-1" />
                    Back to Events
                </Link>
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-slate-900">{event.title}</h1>
                    <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        {event.status}
                    </span>
                </div>
                <p className="text-sm text-slate-500">
                    {new Date(event.date).toLocaleDateString()} • {event.location}
                </p>
            </div>

            {/* Tabs */}
            <div className="border-b border-slate-200">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    {["dashboard", "guests", "settings"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`
                whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium capitalize
                ${activeTab === tab
                                    ? "border-towa-gold text-towa-navy"
                                    : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700"
                                }
              `}
                        >
                            {tab}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Tab Content: Guests */}
            {activeTab === "guests" && (
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-medium text-slate-900">Guest List ({mockGuests.length})</h2>
                        <div className="flex gap-2">
                            <button
                                type="button"
                                className="inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50"
                            >
                                <ArrowUpTrayIcon className="-ml-0.5 h-5 w-5 text-slate-400" aria-hidden="true" />
                                Import CSV
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-center gap-x-1.5 rounded-md bg-towa-navy px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
                            >
                                <UserPlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                                Add Guest
                            </button>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-slate-300">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-slate-900 sm:pl-6">
                                        Name
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900">
                                        Phone
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900">
                                        +1
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900">
                                        RSVP
                                    </th>
                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 bg-white">
                                {mockGuests.map((guest) => (
                                    <tr key={guest.id}>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 sm:pl-6">
                                            {guest.name}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500">{guest.phone}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500">{guest.plus_one}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                                            <span
                                                className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${guest.rsvp === "confirmed"
                                                        ? "bg-green-100 text-green-800"
                                                        : guest.rsvp === "pending"
                                                            ? "bg-yellow-100 text-yellow-800"
                                                            : "bg-red-100 text-red-800"
                                                    }`}
                                            >
                                                {guest.rsvp}
                                            </span>
                                        </td>
                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                            <a href="#" className="text-towa-navy hover:text-towa-blue">
                                                Edit
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {activeTab === "dashboard" && (
                <div className="text-center py-10 text-slate-500">Event Overview Analytics (Coming Soon)</div>
            )}

            {activeTab === "settings" && (
                <div className="text-center py-10 text-slate-500">Event Configuration (Coming Soon)</div>
            )}

        </div>
    );
}
