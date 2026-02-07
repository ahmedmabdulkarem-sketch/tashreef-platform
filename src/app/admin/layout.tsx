import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-screen flex overflow-hidden bg-slate-50">
            {/* Static Sidebar for Desktop */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                <AdminSidebar />
            </div>

            <main className="lg:pl-72 w-full h-full overflow-y-auto">
                <div className="px-4 py-10 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
