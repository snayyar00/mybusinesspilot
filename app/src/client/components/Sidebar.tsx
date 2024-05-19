// src/components/Navbar.tsx

import { useState } from 'react';
import { Link } from 'wasp/client/router';
import { logout } from 'wasp/client/auth';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { TfiDashboard } from 'react-icons/tfi';
import { cn } from '../../shared/utils';
import { useAuth } from 'wasp/client/auth';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Sidebar() {
  const { data: user, isLoading: isUserLoading } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

return (
    <nav className="bg-[#0A1038] w-10 md:w-30 md:flex-row lg:w-72 h-[calc(100vh-80px)] flex flex-col lg:flex-row justify-center">
        {/* <button className="text-white p-4 md:hidden lg:hidden" onClick={toggleMenu}>
            {isOpen ? <AiOutlineClose size="1.5em" /> : <AiOutlineMenu size="1.5em" />}
        </button> */}
        <div className={`block m-auto md:block lg:block mt-3`}>
            <ul className="flex flex-col gap-5 sm:p-2 md:p-4 py-4 dark:border-strokedark">
                <li>
                    <Link
                        to="/"
                        className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-yellow-500 text-white"
                    >
                        <MdOutlineSpaceDashboard size="1.1rem" />
                        <span className={`hidden md:inline lg:inline`}>New Client</span>
                    </Link>
                </li>
                {user && user.isAdmin && (
                    <li>
                        <Link
                            to="/admin"
                            className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-yellow-500 text-white"
                        >
                            <TfiDashboard size="1.1rem" />
                            <span className={`hidden md:inline lg:inline`}>Billing</span>
                        </Link>
                    </li>
                    
                )}
                <li>
                    <Link
                        to="/"
                        className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-yellow-500 text-white"
                    >
                        <MdOutlineSpaceDashboard size="1.1rem" />
                        <span className={`hidden md:inline lg:inline`}>Settings</span>
                    </Link>
                </li>
            </ul>

        </div>
    </nav>
);
}
