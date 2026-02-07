import QRCode from "react-qr-code";

interface TicketProps {
    guestName: string;
    eventName: string;
    qrToken: string;
    location: string;
    date: string;
}

export default function Ticket({ guestName, eventName, qrToken, location, date }: TicketProps) {
    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-sm mx-auto border border-slate-200">
            {/* Ticket Header */}
            <div className="bg-towa-navy p-6 text-center">
                <h3 className="text-towa-gold font-bold text-lg tracking-wider uppercase">Official Invitation</h3>
                <p className="text-slate-200 text-xs mt-1">Please show this at the entrance</p>
            </div>

            {/* Ticket Body */}
            <div className="p-6 flex flex-col items-center space-y-6">
                <div className="text-center space-y-1">
                    <p className="text-xs text-slate-500 uppercase tracking-widest">Guest</p>
                    <p className="text-xl font-bold text-slate-900">{guestName}</p>
                </div>

                {/* QR Code */}
                <div className="p-4 bg-white border-2 border-dashed border-slate-300 rounded-lg">
                    <QRCode
                        value={qrToken}
                        size={180}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                        viewBox={`0 0 256 256`}
                    />
                </div>

                <div className="text-center space-y-4 w-full">
                    <div className="grid grid-cols-2 gap-4 text-sm border-t border-slate-100 pt-4">
                        <div>
                            <p className="text-xs text-slate-500 uppercase">Date</p>
                            <p className="font-semibold text-slate-900">{new Date(date).toLocaleDateString()}</p>
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 uppercase">Time</p>
                            <p className="font-semibold text-slate-900">{new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                        </div>
                    </div>
                    <div className="text-sm">
                        <p className="text-xs text-slate-500 uppercase">Location</p>
                        <p className="font-semibold text-slate-900">{location}</p>
                    </div>
                </div>
            </div>

            {/* Ticket Footer (Cutout effect) */}
            <div className="relative bg-slate-50 p-4 text-center border-t border-dashed border-slate-300">
                <div className="absolute top-0 left-0 -mt-3 -ml-3 h-6 w-6 rounded-full bg-slate-100 border-r border-b border-slate-200"></div>
                <div className="absolute top-0 right-0 -mt-3 -mr-3 h-6 w-6 rounded-full bg-slate-100 border-l border-b border-slate-200"></div>
                <p className="text-xs text-slate-400">Towa Development Company</p>
            </div>
        </div>
    );
}
