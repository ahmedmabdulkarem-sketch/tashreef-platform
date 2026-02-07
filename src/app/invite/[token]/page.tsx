import Ticket from "@/components/guest/Ticket";
import RSVPForm from "@/components/guest/RSVPForm";

// Mock Data Fetcher based on token
async function getGuestInvite(token: string) {
    // Simulate DB fetch
    await new Promise(resolve => setTimeout(resolve, 500));

    // Return mock data
    return {
        guest: {
            name: "Ahmed Abdulkarem",
            status: "pending" as const, // Change to 'confirmed' to see ticket
        },
        event: {
            title: "Towa Annual Town Hall",
            date: "2026-03-15T19:00:00", // 7 PM
            location: "Riyadh Front, Hall 3",
        },
        qrToken: token,
    };
}

export default async function InvitePage({ params }: { params: { token: string } }) {
    const { token } = await params;
    const data = await getGuestInvite(token);

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Hero Section */}
            <div className="relative bg-towa-navy text-white py-12 px-4 shadow-lg">
                <div className="absolute inset-0 overflow-hidden opacity-10">
                    {/* Abstract Pattern Placeholder */}
                    <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" />
                    </svg>
                </div>
                <div className="relative text-center space-y-4 max-w-sm mx-auto">
                    <h1 className="text-3xl font-bold font-serif tracking-wide text-towa-gold">TASHREEF</h1>
                    <p className="text-sm font-light tracking-widest uppercase">You are cordially invited to</p>
                    <h2 className="text-2xl font-bold">{data.event.title}</h2>
                </div>
            </div>

            <div className="max-w-md mx-auto px-4 -mt-6 relative space-y-8">

                {/* Event Details Card */}
                <div className="bg-white rounded-xl shadow-md p-6 space-y-4 text-center">
                    <div className="space-y-1">
                        <p className="text-xs text-slate-400 uppercase tracking-widest">When</p>
                        <p className="text-lg font-semibold text-slate-800">
                            {new Date(data.event.date).toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}
                        </p>
                        <p className="text-slate-600">
                            {new Date(data.event.date).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}
                        </p>
                    </div>
                    <div className="w-16 h-px bg-slate-200 mx-auto"></div>
                    <div className="space-y-1">
                        <p className="text-xs text-slate-400 uppercase tracking-widest">Where</p>
                        <p className="text-lg font-semibold text-slate-800">{data.event.location}</p>
                        <a href="#" className="text-xs text-towa-blue underline">View on Map</a>
                    </div>
                </div>

                {/* RSVP Section */}
                <div id="rsvp-section">
                    <RSVPForm
                        currentStatus={data.guest.status as any}
                        onRsvp={async () => { "use server"; /* Server Action stub */ }}
                    />
                </div>

                {/* Ticket Section - displayed even if pending for demo, usually only if confirmed */}
                <div className="opacity-50 hover:opacity-100 transition-opacity">
                    <p className="text-center text-xs text-slate-400 mb-2">(Ticket Preview - visible after RSVP)</p>
                    <Ticket
                        guestName={data.guest.name}
                        eventName={data.event.title}
                        location={data.event.location}
                        date={data.event.date}
                        qrToken={data.qrToken}
                    />
                </div>

            </div>
        </div>
    );
}
