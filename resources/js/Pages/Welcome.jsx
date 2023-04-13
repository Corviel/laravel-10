import { Link, Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const [number, setNumber] = useState(0)
    return (
        <>
            <Head title="Welcome" />
            <h1>Hello</h1>
            <button className='p-5 bg-red-500' onClick={() => setNumber((prev) => prev + 1)}>{number}</button>
        </>
    );
}
