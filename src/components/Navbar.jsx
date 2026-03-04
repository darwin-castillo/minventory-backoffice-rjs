import { Bell, UserCircle, Search, Menu } from 'lucide-react';

const Navbar = ({ toggleSidebar }) => {
    return (
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-10">
            <div className="flex items-center gap-4">

                <button
                    onClick={toggleSidebar}
                    className="p-2 hover:bg-gray-100 rounded-lg lg:hidden text-gray-600"
                >
                    <Menu size={24} />
                </button>


            </div>


            <div className="flex items-center gap-2 lg:gap-4">
                <Bell size={20} className="text-gray-600 cursor-pointer" />
                <div className="h-8 w-px bg-gray-200 mx-2 hidden sm:block"></div>
                <span className="text-sm font-medium text-gray-700 hidden sm:block">John Doe</span>
                <UserCircle size={28} className="text-gray-400" />
            </div>
        </header>
    );
};

export default Navbar;