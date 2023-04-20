import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function BannerForm({ auth }) {
    return (
        <>
            <Head title="Banners" />
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <div className="flex items-center justify-between">
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            <span className="opacity-50">Admin</span> / Criar banner
                        </h2>
                    </div>
                }
            >
                
            </AuthenticatedLayout>
        </>
    );
}
