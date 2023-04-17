import PrimaryButton from "@/Components/shared/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Edit({ auth, banners }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        <span className="opacity-50">Admin</span> / Banners
                    </h2>

                    <Link className="btn-primary" href={route('banners.create')}>Adicionar banner</Link>
                </div>
            }
        >
            <Head title="Banners" />

            <div className="container">
                All the banners
                {banners.map((banner) => {
                    return <div>{banner.id}</div>;
                })}
            </div>
        </AuthenticatedLayout>
    );
}
