import { useRef, useState } from 'react';
import DangerButton from '@/Components/shared/DangerButton';
import InputError from '@/Components/shared/InputError';
import InputLabel from '@/Components/shared/InputLabel';
import SecondaryButton from '@/Components/shared/SecondaryButton';
import TextInput from '@/Components/shared/TextInput';
import { useForm } from '@inertiajs/react';
import { Modal, ModalClose, ModalContent, ModalTrigger } from '@/Components/shared/Modal';

export default function DeleteUserForm({ className = '' }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Deletar conta</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Depois que sua conta for deletada, todos os recursos e dados serão permanentemente excluídos. Por favor insira sua senha para confirmar que deseja permanentemente deletar a sua conta.
                </p>
            </header>

            <Modal>
                <ModalTrigger className="inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150">
                    Delete Account
                </ModalTrigger>

                <ModalContent title="Tem certeza que quer deletar sua conta?" description="Depois que sua conta for deletada, todos os recursos e dados serão permanentemente excluídos. Por favor insira sua senha para confirmar que deseja permanentemente deletar a sua conta.">
                    <form onSubmit={deleteUser}>
                        <div className="mt-6">
                            <InputLabel htmlFor="password" value="Password" className="sr-only" />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                ref={passwordInput}
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                className="mt-1 block w-1/2"
                                isFocused
                                placeholder="Senha"
                            />

                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="mt-6 flex gap-3">
                            <ModalClose className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150">
                                Cancel
                            </ModalClose>

                            <DangerButton disabled={processing}>
                                Delete Account
                            </DangerButton>
                        </div>
                    </form>
                </ModalContent>
            </Modal>
        </section>
    );
}
