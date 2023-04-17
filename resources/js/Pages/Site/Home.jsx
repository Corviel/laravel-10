import { Link, Head } from '@inertiajs/react';

export default function Home({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Home" />
            <main className='p-2'>
                <div className='mb-4'>Larvel: v{laravelVersion} <br /> PHP: v{phpVersion}</div>
                <Link href="admin" className='border border-blue-500 py-1 px-2 rounded'>Admin</Link>
            </main>
        </>
    );
}
