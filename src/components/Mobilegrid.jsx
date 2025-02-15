import React from "react";
import { FaHome, FaUser, FaCog, FaBell, FaCamera, FaHeart, FaStar, FaMap, FaGift } from "react-icons/fa";

const items = [
  { icon: <FaHome />, label: "Home" },
  { icon: <FaUser />, label: "Profile" },
  { icon: <FaCog />, label: "Settings" },
  { icon: <FaBell />, label: "Notifications" },
  { icon: <FaCamera />, label: "Camera" },
  { icon: <FaHeart />, label: "Favorites" },
  { icon: <FaStar />, label: "Ratings" },
  { icon: <FaMap />, label: "Location" },
  { icon: <FaGift />, label: "Gifts" },
];

const MobileGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-2 p-4 max-w-xs mx-auto">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded-lg shadow-md">
          <div className="text-2xl text-blue-500">{item.icon}</div>
          <p className="text-xs mt-1 font-semibold text-gray-700">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default MobileGrid;
