import { useState } from "react";
import ApplicationLogo from "@/Components/shared/ApplicationLogo";
import NavLink from "@/Components/shared/NavLink";
import ResponsiveNavLink from "@/Components/shared/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import {
    Dropdown,
    DropdownTrigger,
    DropdownContent,
    DropdownLabel,
    DropdownItem,
} from "@/Components/shared/Dropdown";
import { ChevronDownIcon } from "@radix-ui/react-icons";


export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white border-b border-gray-100">
                <div className="container flex justify-between">
                    <div className="flex">
                        <div className="py-4 shrink-0 flex items-center">
                            <Link href="/">
                                <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                            </Link>
                        </div>

                        <div className="hidden sm:-my-px sm:ml-10 sm:flex gap-x-4">
                            <NavLink
                                href={route("admin")}
                                active={route().current("admin")}
                            >
                                Dashboard
                            </NavLink>
                            <NavLink
                                href={route("banners.index")}
                                active={route().current("banners.index")}
                            >
                                Banners
                            </NavLink>
                        </div>
                    </div>

                    <div className="relative hidden sm:flex sm:items-center">
                        <Dropdown>
                            <DropdownTrigger className="text-gray-500 text-sm font-medium inline-flex gap-2">
                                {user.name}

                                <ChevronDownIcon className="relative top-[1px]" />
                            </DropdownTrigger>
                            <DropdownContent>
                                <DropdownLabel className="text-[#6f6e77] text-xs leading-[25px] px-4">
                                    Perfil
                                </DropdownLabel>
                                <DropdownItem className="hover:border-none">
                                    <Link
                                        className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                                        href={route("profile.edit")}
                                    >
                                        Editar
                                    </Link>
                                </DropdownItem>
                                <DropdownItem className="hover:border-none">
                                    <Link
                                        className="block rounded-b-md w-full px-4 py-2 text-left text-sm leading-5 text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                                        href={route("logout")}
                                    >
                                        Sair
                                    </Link>
                                </DropdownItem>
                            </DropdownContent>
                        </Dropdown>
                    </div>

                    <div className="flex items-center sm:hidden">
                        <button
                            onClick={() =>
                                setShowingNavigationDropdown(
                                    (previousState) => !previousState
                                )
                            }
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    className={
                                        !showingNavigationDropdown
                                            ? "inline-flex"
                                            : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className={
                                        showingNavigationDropdown
                                            ? "inline-flex"
                                            : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className="space-y-1">
                        <ResponsiveNavLink
                            href={route("admin")}
                            active={route().current("admin")}
                        >
                            Admin
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("banners.index")}
                            active={route().current("banners.index")}
                        >
                            Banners
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800">
                                {user.name}
                            </div>
                            <div className="font-medium text-sm text-gray-500">
                                {user.email}
                            </div>
                        </div>

                        <div className="mt-3">
                            <ResponsiveNavLink
                                href={route("profile.edit")}
                                active={route().current("profile.edit")}
                            >
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white shadow">
                    <div className="container py-6">{header}</div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
