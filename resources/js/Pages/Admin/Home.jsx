import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Admin({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    <span className="opacity-50">Admin</span> / Dashboard
                </h2>
            }
        >
            <Head title="Admin" />
        </AuthenticatedLayout>
    );
}
