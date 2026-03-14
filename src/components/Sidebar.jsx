import { Home, Users, Settings, BarChart3, X, LogOut, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import { useGlobal } from '../hooks/useGlobal';




const Sidebar = ({ isOpen, setIsOpen }) => {
    const { logout } = useAuth();
    const [selected, setSelected] = useState("Dashboard");
    const { selectedRoute } = useGlobal();

    const handleSelected = (label) => {
        setSelected(label);
        setIsOpen(false);
    }


    return (
        <aside className={`
      fixed inset-y-0 left-0 z-30 w-64 bg-slate-800 text-white/70 transform transition-transform duration-300 ease-in-out
      lg:relative lg:translate-x-0 
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    `}>

            <div className="flex items-center justify-between p-6  border-slate-800">

                <div className="text-2xl font-bold text-white">
                    Stok<span className="font-semibold text-amber-600">mi</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="lg:hidden">
                    <X size={24} />
                </button>
            </div>

            <nav className="flex-1 p-4 space-y-2">
                <SidebarLink isSelected={selected === "Dashboard"} to="/" icon={<Home size={20} />} label="Dashboard" onClick={() => handleSelected("Dashboard")} />
                <SidebarSection title="Gestión" />
                <SidebarLink isSelected={selected === "Usuarios"} to="/users" icon={<Users size={20} />} label="Usuarios" onClick={() => handleSelected("Usuarios")} />
                <SidebarLink isSelected={selected === "Productos" || selectedRoute === "products"} to="/products" icon={<Package size={20} />} label="Productos" onClick={() => handleSelected("Productos")} />
                {/* ...otros links */}
            </nav>

            <nav className="flex-1 p-4 space-y-2">
                <button
                    onClick={logout}
                    className="flex items-center gap-3 p-3 rounded-lg text-sm text-red-500 hover:text-red-700 font-medium pw-"
                >
                    <LogOut size={20} />
                    <span>Cerrar Sesión</span>
                </button>
            </nav>
        </aside>
    );
};
const SidebarSection = ({ title }) => (
    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
        {title}
    </div>
);


const SidebarLink = ({ to, icon, label, onClick, isSelected }) => (

    <Link
        to={to}
        onClick={onClick}
        className={isSelected ? `flex items-center  gap-3 p-3 rounded-lg bg-slate-950  text-white} transition-colors` : `flex items-center gap-3 p-3 rounded-lg  hover:bg-slate-600 transition-colors`}
    >
        {icon}
        <span>{label}</span>
    </Link>
);

export default Sidebar;