import { FaFacebookF, FaTwitter, FaGooglePlusG, FaWhatsapp } from "react-icons/fa";
import PageHeader from "../components/ui/PageHeader";

const friends = [
  { name: "Virginia M. Patterson", phone: "(+1) 702-897-7965" },
  { name: "Dominick S. Jenkins", phone: "(+1) 702-897-7965" },
  { name: "Duncan E. Hoffman", phone: "(+1) 727-688-4052" },
  { name: "Roy R. McCraney", phone: "(+1) 601-897-1714" },
  { name: "Janice R. Norris", phone: "(+1) 802-312-3206" },
];

export default function InviteFriend() {
  return (
    <div className="flex flex-col h-screen bg-[#E8E8E8]">
      {/* HEADER */}
      <PageHeader showFilter showSearch title="INVITE FRIEND" />

      {/* MAIN CONTENT */}
      <div className="flex-1 overflow-y-auto">
        <div className="mt-5 mx-6 bg-[#F3F3F3] rounded-2xl shadow-inner pb-4">
          <div className="pt-4">
            {friends.map((friend, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between bg-white rounded-xl p-3 shadow mb-3 hover:shadow-md transition mx-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-black" />
                  <div>
                    <h2 className="font-semibold text-gray-800 text-sm">
                      {friend.name}
                    </h2>
                    <p className="text-xs text-gray-500">{friend.phone}</p>
                  </div>
                </div>
                <button
                  className={`px-5 py-1.5 text-sm rounded-full font-medium ${
                    idx % 2 === 0
                      ? "bg-[#1D1F2A] text-white"
                      : "bg-[#E7ECF9] text-[#1D1F2A]"
                  }`}
                >
                  Invite
                </button>
              </div>
            ))}
          </div>

          {/* SHARE INVITE VIA */}
          <div className="text-start py-6">
            <p className="text-sm font-medium text-gray-700 mb-3 ml-5">
              Share Invite Via
            </p>
            <div className="flex justify-start ml-5 gap-4">
              <button className="p-2 bg-white rounded-full shadow">
                <FaFacebookF className="text-[#3b5998]" size={18} />
              </button>
              <button className="p-2 bg-white rounded-full shadow">
                <FaTwitter className="text-[#00acee]" size={18} />
              </button>
              <button className="p-2 bg-white rounded-full shadow">
                <FaGooglePlusG className="text-[#db4a39]" size={18} />
              </button>
              <button className="p-2 bg-white rounded-full shadow">
                <FaWhatsapp className="text-[#25D366]" size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
