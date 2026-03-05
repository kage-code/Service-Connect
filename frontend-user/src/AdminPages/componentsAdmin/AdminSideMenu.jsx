import {
  FaUserTie,
  FaLock,
  FaMoneyBillWave,
  FaCoins,
  FaRegUser,
  FaCog,
  FaAd,
  FaBell,
} from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { PiChatsBold } from "react-icons/pi";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { ImUserTie } from "react-icons/im";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const AdminSideMenu = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const goTo = (route) => {
    navigate(route);
    onClose?.(); // close menu on mobile
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-white/10 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <div
        className={`
          fixed inset-y-0 left-0 w-64 bg-[#362ca1] text-white
          z-50 flex flex-col transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2">
            <div className="bg-[#FF6B4A] w-8 h-8 rounded-lg flex items-center justify-center font-bold">
              S
            </div>
            <span className="text-lg font-semibold">SC</span>
          </div>

          <button className="lg:hidden" onClick={onClose}>
            <IoClose size={26} />
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 px-3 space-y-2 ml-5">
          <SidebarItem icon={<FiHome />} label="Dashboard" onClick={() => goTo("/admin/dashboard")} />
          <SidebarItem icon={<ImUserTie />} label="Users" onClick={() => goTo("/admin/users")} />
          <SidebarItem icon={<FaUserTie />} label="Service Providers" onClick={() => goTo("/admin/service-providers")} />
          <SidebarItem icon={<FaLock />} label="Franchisee" onClick={() => goTo("/admin/franchisee")} />
          <SidebarItem icon={<FaMoneyBillWave />} label="Finance" onClick={() => goTo("/admin/finance")} />
          <SidebarItem icon={<FaCoins />} label="Accounts" onClick={() => goTo("/admin/account")} />
          <SidebarItem icon={<FaRegUser />} label="Profile" onClick={() => goTo("/admin/profile")} />
          <SidebarItem icon={<PiChatsBold />} label="Chat" onClick={() => goTo("/admin/chat")} />
          <SidebarItem icon={<FaCog />} label="Settings" onClick={() => goTo("/admin/generalsettings")} />
          <SidebarItem
            icon={<MdOutlineHomeRepairService />}
            label="Service Management"
            onClick={() => goTo("/admin/services")}
          />
          <SidebarItem icon={<FaAd />} label="Ads Management" onClick={() => goTo("/admin/adtype")} />
          <SidebarItem icon={<FaBell />} label="Notifications" onClick={() => goTo("/admin/adnotification")} />
        </nav>

        {/* Footer */}
        <div className="px-6 py-5 text-xs">
          <p className="font-semibold">Service Connect</p>
          <p className="text-gray-300 mt-1">Let’s Grow Together</p>
        </div>
      </div>
    </>
  );
};
const SidebarItem = ({ icon, label, onClick }) => (
  <div
    onClick={onClick}
    className="flex items-center gap-3 py-2 px-4 cursor-pointer rounded-l-full
               hover:bg-[#5E4CFF] transition-all"
  >
    <span className="text-gray-200">{icon}</span>
    <span className="text-sm font-medium">{label}</span>
  </div>
);

export default AdminSideMenu;
