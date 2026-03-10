import React from "react";
import { Edit3, Trash2, MoreVertical, SquarePen } from "lucide-react";

// STYLE MAP (each type → background + avatar image + corner badge)
const typeStyles = {
  notification: {
    bg: "bg-green-100",
    avatar: "/avatargreen.png",
    badge: "/noti-noti-icon.png",
  },
  announcement: {
    bg: "bg-yellow-100",
    avatar: "/avataryellow.png",
    badge: "/noti-announce-icon.png",
  },
  info: {
    bg: "bg-blue-100",
    avatar: "/avatarrob.png",
    badge: "/noti-info-icon.png",
  },
};

export default function NotificationList({
  notifications = [],
  previousNotifications = [],
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 max-w-6xl md:ml-10 mt-6 border border-gray-100">
      
      {/* MAIN TITLE */}
      <h2 className="text-[#2B3674] font-semibold text-lg mb-4">
        Notifications
      </h2>

      {/* CURRENT NOTIFICATIONS */}
      <ul className="space-y-4">
        {notifications.map((n, i) => {
          const style = typeStyles[n.type] || typeStyles.info;

          return (
            <li
              key={i}
              className="flex justify-between items-start border-b border-gray-100 pb-4 last:border-0"
            >
              <div className="flex items-start space-x-4">

                {/* AVATAR + BADGE */}
                <div className="relative w-12 h-12">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${style.bg}`}
                  >
                    <img
                      src={style.avatar}
                      alt=""
                      className="w-7 h-7 object-contain"
                    />
                  </div>

                  {style.badge && (
                    <img
                      src={style.badge}
                      alt="type badge"
                      className="absolute -top-1 -right-1 w-4 h-4"
                    />
                  )}
                </div>

                {/* TEXT */}
                <div>
                  <p className="font-semibold text-[#2B3674]">{n.title}</p>
                  <p className="text-sm text-gray-500">{n.description}</p>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex items-center space-x-3 relative">

                {/* 🔴 RED DOT */}
                <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-3 h-3 bg-red-500 rounded-full"></span>

                <button className="text-gray-600 hover:text-gray-800">
                  <SquarePen size={18} />
                </button>
                <button className="text-red-500 hover:text-red-600">
                  <Trash2 size={18} />
                </button>
                <button className="text-gray-400 hover:text-gray-500">
                  <MoreVertical size={18} />
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      {/* PREVIOUS NOTIFICATIONS */}
      <div className="mt-8">
        <p className="text-[#2B3674] font-semibold mb-4">
          Previous notifications
        </p>

        <ul className="space-y-4">
          {previousNotifications.map((p, i) => {
            const style = typeStyles[p.type] || typeStyles.info;

            return (
              <li
                key={i}
                className="flex justify-between items-start border-b border-gray-100 pb-4 last:border-0"
              >
                <div className="flex items-start space-x-4">

                  {/* AVATAR + BADGE */}
                  <div className="relative w-12 h-12">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${style.bg}`}
                    >
                      <img
                        src={style.avatar}
                        alt=""
                        className="w-7 h-7 object-contain"
                      />
                    </div>

                    {style.badge && (
                      <img
                        src={style.badge}
                        alt="badge"
                        className="absolute -top-1 -right-1 w-4 h-4"
                      />
                    )}
                  </div>

                  {/* TEXT */}
                  <div>
                    <p className="font-semibold text-[#2B3674]">{p.title}</p>
                    <p className="text-sm text-gray-500">{p.description}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 relative">

                  {/* 🔴 RED DOT */}
                  <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-3 h-3 bg-red-500 rounded-full "></span>

                  <button className="text-gray-600 hover:text-gray-800">
                    <Edit3 size={18} />
                  </button>
                  <button className="text-red-500 hover:text-red-600">
                    <Trash2 size={18} />
                  </button>
                  <button className="text-gray-400 hover:text-gray-500">
                    <MoreVertical size={18} />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="text-right text-sm text-[#707EAE] mt-3 cursor-pointer hover:underline">
          Show More
        </div>
      </div>
    </div>
  );
}
