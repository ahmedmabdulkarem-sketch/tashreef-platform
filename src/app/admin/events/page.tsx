import Link from "next/link";
import { PlusIcon, CalendarIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/outline";

// Mock data for now
const events = [
    {
        id: "1",
        title: "Towa Annual Town Hall",
        date: "2026-03-15T09:00:00",
        location: "Riyadh Front",
        status: "scheduled",
        capacity: 200,
    },
    {
        id: "2",
        title: "Ramadan Iftar Gathering",
        date: "2026-03-22T18:00:00",
        location: "Towa HQ Garden",
        status: "draft",
        capacity: 50,
    },
];

export default function EventsListPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Events</h1>
                    <p className="text-sm text-slate-500">Manage your upcoming and past events.</p>
                </div>
                <Link
                    href="/admin/events/create"
                    className="inline-flex items-center gap-x-2 rounded-md bg-towa-gold px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
                >
                    <PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                    Create Event
                </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {events.map((event) => (
                    <div
                        key={event.id}
                        className="relative flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm hover:border-towa-gold/50 transition-colors"
                    >
                        <div className="p-5 flex-1 space-y-4">
                            <div className="flex items-center justify-between">
                                <span
                                    className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ${event.status === "scheduled"
                                            ? "bg-green-50 text-green-700 ring-green-600/20"
                                            : "bg-slate-50 text-slate-600 ring-slate-500/10"
                                        }`}
                                >
                                    {event.status}
                                </span>
                                {/* Future: Actions menu (Edit, Delete) */}
                            </div>

                            <h3 className="text-lg font-semibold text-slate-900 line-clamp-1">
                                {event.title}
                            </h3>

                            <div className="space-y-2 text-sm text-slate-500">
                                <div className="flex items-center gap-2">
                                    <CalendarIcon className="h-4 w-4" />
                                    <span>{new Date(event.date).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPinIcon className="h-4 w-4" />
                                    <span>{event.location}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <UsersIcon className="h-4 w-4" />
                                    <span>{event.capacity} Guests</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-50 px-5 py-3 border-t border-slate-200">
                            <Link href={`/admin/events/${event.id}`} className="text-sm font-medium text-towa-navy hover:text-towa-blue">
                                View Details &rarr;
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
