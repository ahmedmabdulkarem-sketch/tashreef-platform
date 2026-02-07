export default function AdminDashboardPage() {
    return (
        <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Dashboard</h1>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {/* Placeholder Stat Cards */}
                {['Total Events', 'Today Guests', 'Active RSVPs', 'Pending Feedback'].map((stat) => (
                    <div key={stat} className="overflow-hidden rounded-xl bg-white p-6 shadow-sm border border-slate-200">
                        <dt className="truncate text-sm font-medium text-slate-500">{stat}</dt>
                        <dd className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">0</dd>
                    </div>
                ))}
            </div>

            <div className="mt-8 rounded-xl bg-white p-6 shadow-sm border border-slate-200 h-96 flex items-center justify-center">
                <p className="text-slate-400">Recent Activity Log (Coming Soon)</p>
            </div>
        </div>
    );
}
