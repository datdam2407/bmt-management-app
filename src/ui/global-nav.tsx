'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from "clsx";
import { mainbar, type Item } from "../lib/mainbar";
import Logo from '../ui/shuttlecock.png';
import { useSelectedLayoutSegment } from "next/navigation";
import Image from 'next/image'; // Import Image component
import { calendar } from "../lib/calendar";

export function GlobalNav() {
    const [isOpen, setIsOpen] = useState(false);
    const [checkLg, setCheckLg] = useState(false); // Track if screen is large (for lg breakpoint)

    const close = () => setIsOpen(false);

    // Handle screen resize event
    useEffect(() => {
        const handleResize = () => {
            setCheckLg(window.innerWidth >= 1024); // 1024px is the default 'lg' breakpoint
        };

        handleResize(); // Check on component mount
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize); // Clean up event listener
        };
    }, []);

    return (
        <div className={clsx(
            'transition duration-200 ease-in-out fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 bg-black',
            checkLg ? 'global-nav lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800' : 'global-nav-mobile'
        )}>
            {/* Logo and Link are always visible */}
            <div className="flex h-14 items-center px-4 py-4 lg:h-auto">
                <Link
                    href="/"
                    className="group flex w-full items-center gap-x-2.5"
                    onClick={close}
                >
                    <div className="h-7 w-7 rounded-full">
                        <Image src={Logo} alt="logo" className="h-7 w-7 rounded-full" />
                    </div>
                    <h3 className="font-semibold tracking-wide text-amber-600 group-hover:text-gray-50">
                        Badminton
                    </h3>
                </Link>
            </div>

            <button 
                className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
                type="button" 
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="font-medium text-white group-hover:text-white-100">
                    Menu
                </div>
                {isOpen ? (
                    <XMarkIcon className="block w-6 text-gray-400" />
                ) : (
                    <Bars3Icon className="block w-6 text-gray-400" />
                )}
            </button>

            <div className={clsx('overflow-y-auto lg:static lg:block', { 'fixed inset-x-0 bottom-0 top-14 mt-px bg-black': isOpen, hidden: !isOpen })}>
                <nav className="space-y-6 px-2 pt-5">
                    {mainbar.map((section) => {
                        return (
                            <div key={section.name}>
                                <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-white">
                                    <div>{section.name}</div>
                                </div>
                                <div className="space-y-1">
                                    {section.items.map((item) => (
                                        <GlobalNavItem key={item.slug} item={item} close={close} />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </nav>

                <nav className="space-y-6 px-2 pb-24">
                    {calendar.map((section) => (
                        <div key={section.name}>
                            <div className="mb-2 px-3 py-3 text-xs font-semibold uppercase tracking-wider text-white">
                                {section.name}
                            </div>
                            <div className="space-y-1">
                                <ul className="space-y-2">
                                    {section.items.map((item, index) => (
                                        <li key={index} className="text-sm text-amber-600 font-semibold px-3">
                                            - {item.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </nav>
            </div>
        </div>
    );
}

function GlobalNavItem({
    item,
    close,
}: {
    item: Item;
    close: () => false | void;
}) {
    const segment = useSelectedLayoutSegment();
    const isActive = item.slug === segment;

    return (
        <Link
            onClick={close}
            href={`/${item.slug}`}
            className={clsx(
                'block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300',
                {
                    'text-amber-600 hover:bg-gray-800 font-semibold': !isActive,
                    'text-white': isActive,
                },
            )}
        >
            {item.name}
        </Link>
    );
}
