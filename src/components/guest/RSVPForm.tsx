"use client";

import { useState } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

interface RSVPFormProps {
    currentStatus: "pending" | "confirmed" | "declined";
    onRsvp: (status: "confirmed" | "declined", plusOne: number) => void;
}

export default function RSVPForm({ currentStatus, onRsvp }: RSVPFormProps) {
    const [status, setStatus] = useState(currentStatus);
    const [plusOne, setPlusOne] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleConfirm = async () => {
        setIsSubmitting(true);
        // Mock API call
        await new Promise((resolve) => setTimeout(resolve, 800));
        setStatus("confirmed");
        onRsvp("confirmed", plusOne);
        setIsSubmitting(false);
    };

    const handleDecline = async () => {
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 800));
        setStatus("declined");
        onRsvp("declined", 0);
        setIsSubmitting(false);
    };

    if (status === "confirmed") {
        return (
            <div className="bg-green-50 p-6 rounded-xl text-center space-y-3 border border-green-100">
                <CheckCircleIcon className="h-12 w-12 text-green-600 mx-auto" />
                <h3 className="text-lg font-bold text-green-800"> You're Confirmed!</h3>
                <p className="text-green-700 text-sm">We look forward to seeing you.</p>
                <button
                    onClick={() => setStatus('pending')}
                    className="text-xs text-green-600 underline mt-2"
                >
                    Change Response
                </button>
            </div>
        );
    }

    if (status === "declined") {
        return (
            <div className="bg-slate-50 p-6 rounded-xl text-center space-y-3 border border-slate-200">
                <XCircleIcon className="h-12 w-12 text-slate-400 mx-auto" />
                <h3 className="text-lg font-bold text-slate-700">Attendance Declined</h3>
                <p className="text-slate-500 text-sm">We'll miss you at the event.</p>
                <button
                    onClick={() => setStatus('pending')}
                    className="text-xs text-slate-500 underline mt-2"
                >
                    Change Response
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 space-y-6">
            <h3 className="text-lg font-semibold text-slate-900 text-center">Will you be attending?</h3>

            <div className="space-y-4">
                {/* Plus One (Optional) */}
                <div>
                    <label htmlFor="plusOne" className="block text-sm font-medium text-slate-700 mb-1">
                        Bringing a Guest? (Optional)
                    </label>
                    <select
                        id="plusOne"
                        value={plusOne}
                        onChange={(e) => setPlusOne(Number(e.target.value))}
                        className="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-towa-navy sm:text-sm sm:leading-6"
                    >
                        <option value={0}>Just me</option>
                        <option value={1}>+1 Guest</option>
                    </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <button
                        onClick={handleDecline}
                        disabled={isSubmitting}
                        className="flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50 disabled:opacity-50"
                    >
                        Apologize
                    </button>
                    <button
                        onClick={handleConfirm}
                        disabled={isSubmitting}
                        className="flex w-full justify-center rounded-md bg-towa-gold px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 disabled:opacity-50"
                    >
                        {isSubmitting ? "..." : "Confirm"}
                    </button>
                </div>
            </div>
        </div>
    );
}
