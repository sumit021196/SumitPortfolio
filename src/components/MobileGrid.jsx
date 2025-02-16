import React from "react";
import { 
  Home as HomeIcon, 
  Person as PersonIcon, 
  Settings as SettingsIcon, 
  Notifications as NotificationsIcon, 
  CameraAlt as CameraAltIcon, 
  Favorite as FavoriteIcon, 
  Star as StarIcon, 
  Map as MapIcon, 
  CardGiftcard as CardGiftcardIcon 
} from "@mui/icons-material";

const items = [
  { icon: <HomeIcon />, label: "Home" },
  { icon: <PersonIcon />, label: "Profile" },
  { icon: <SettingsIcon />, label: "Settings" },
  { icon: <NotificationsIcon />, label: "Notifications" },
  { icon: <CameraAltIcon />, label: "Camera" },
  { icon: <FavoriteIcon />, label: "Favorites" },
  { icon: <StarIcon />, label: "Ratings" },
  { icon: <MapIcon />, label: "Location" },
  { icon: <CardGiftcardIcon />, label: "Gifts" },
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
