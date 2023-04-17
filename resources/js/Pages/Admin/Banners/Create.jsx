import PrimaryButton from "@/Components/shared/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function CreateBanner({ auth, banners }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight"><span className='opacity-50'>Admin</span> / Adicionar Banner</h2>
            }
        >
            <Head title="Adicionar Banner" />
        </AuthenticatedLayout>
    );
}
