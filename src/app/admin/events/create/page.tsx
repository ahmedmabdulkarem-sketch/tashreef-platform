"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function CreateEventPage() {
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);
        // TODO: Integrate with Supabase
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Mock delay
        alert("Event Created! (Mock)");
        setIsLoading(false);
    }

    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <div>
                <Link
                    href="/admin/events"
                    className="inline-flex items-center text-sm text-slate-500 hover:text-slate-700 mb-4"
                >
                    <ArrowLeftIcon className="h-4 w-4 mr-1" />
                    Back to Events
                </Link>
                <h1 className="text-2xl font-bold text-slate-900">Create New Event</h1>
                <p className="mt-1 text-sm text-slate-500">
                    Fill in the details below to schedule a new gathering.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white shadow-sm ring-1 ring-slate-900/5 sm:rounded-xl md:col-span-2">
                <div className="px-4 py-6 sm:p-8">
                    <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                        {/* Title */}
                        <div className="sm:col-span-4">
                            <label htmlFor="title" className="block text-sm font-medium leading-6 text-slate-900">
                                Event Title
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-towa-navy sm:text-sm sm:leading-6"
                                    placeholder="e.g. Annual Town Hall"
                                />
                            </div>
                        </div>

                        {/* Date */}
                        <div className="sm:col-span-3">
                            <label htmlFor="date" className="block text-sm font-medium leading-6 text-slate-900">
                                Date & Time
                            </label>
                            <div className="mt-2">
                                <input
                                    type="datetime-local"
                                    name="date"
                                    id="date"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-towa-navy sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        {/* Capacity */}
                        <div className="sm:col-span-3">
                            <label htmlFor="capacity" className="block text-sm font-medium leading-6 text-slate-900">
                                Capacity
                            </label>
                            <div className="mt-2">
                                <input
                                    type="number"
                                    name="capacity"
                                    id="capacity"
                                    min="1"
                                    className="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-towa-navy sm:text-sm sm:leading-6"
                                    placeholder="200"
                                />
                            </div>
                        </div>

                        {/* Location Name */}
                        <div className="sm:col-span-6">
                            <label htmlFor="location" className="block text-sm font-medium leading-6 text-slate-900">
                                Location Name
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="location"
                                    id="location"
                                    className="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-towa-navy sm:text-sm sm:leading-6"
                                    placeholder="e.g. Riyadh Front, Conference Room A"
                                />
                            </div>
                        </div>

                        {/* Map Link */}
                        <div className="sm:col-span-6">
                            <label htmlFor="map_url" className="block text-sm font-medium leading-6 text-slate-900">
                                Google Maps Link
                            </label>
                            <div className="mt-2">
                                <input
                                    type="url"
                                    name="map_url"
                                    id="map_url"
                                    className="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-towa-navy sm:text-sm sm:leading-6"
                                    placeholder="https://maps.google.com/..."
                                />
                            </div>
                        </div>

                        {/* Description */}
                        <div className="col-span-full">
                            <label htmlFor="description" className="block text-sm font-medium leading-6 text-slate-900">
                                Description / Agenda
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="description"
                                    name="description"
                                    rows={3}
                                    className="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-towa-navy sm:text-sm sm:leading-6"
                                    placeholder="Write a few sentences about the event..."
                                    defaultValue={""}
                                />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex items-center justify-end gap-x-6 border-t border-slate-900/10 px-4 py-4 sm:px-8">
                    <button type="button" className="text-sm font-semibold leading-6 text-slate-900">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="rounded-md bg-towa-navy px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-towa-navy disabled:opacity-50"
                    >
                        {isLoading ? "Saving..." : "Create Event"}
                    </button>
                </div>
            </form>
        </div>
    );
}
