import { MdDraw, MdOutlineSpaceDashboard } from "react-icons/md";
import { Box, User } from "lucide-react";
import { IoReorderFourSharp } from "react-icons/io5";
import { TbReportOff } from "react-icons/tb";

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
          href: "/design",
          label: "design",
          active: pathname === "/design",
          icon: MdDraw,
          submenus: [],
        },
        {
          href: "/order",
          label: "Order",
          active: pathname === "/order",
          icon: IoReorderFourSharp,
          submenus: [],
        },
        {
          href: "/report",
          label: "Report",
          active: pathname === "/report",
          icon: TbReportOff,
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
            },
          ],
        },
      ],
    },
  ];
}
