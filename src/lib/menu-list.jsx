import { MdOutlineSpaceDashboard } from "react-icons/md";

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
          active: pathname === "/master",
          icon: MdOutlineSpaceDashboard,
          submenus: [
            {
              href: "/master/user",
              label: "master",
              active: pathname === "/master/user",
              icon: MdOutlineSpaceDashboard,
            }
          ],
        }
      ],
    },
  ];
}
