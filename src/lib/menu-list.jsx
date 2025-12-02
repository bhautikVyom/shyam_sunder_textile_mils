import { MdOutlineSpaceDashboard } from "react-icons/md";
import { Box, User } from "lucide-react";

export function getMenuList(pathname) {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/",
          label: "dashboard",
          active: pathname === "/",
          icon: MdOutlineSpaceDashboard,
          submenus: [],
        },
        {
          href: "/master",
          label: "master",
          active: pathname.includes("/master"),
          icon: Box,
          submenus: [
            {
              href: "/master/user",
              label: "User",
              active: pathname === "/master/user",
              icon: User,
            }
          ],
        }
      ],
    },
  ];
}
