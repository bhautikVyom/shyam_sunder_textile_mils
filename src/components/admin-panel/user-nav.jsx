import React from "react";
import { useNavigate } from "react-router";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Moon, Sun } from "lucide-react";
import { Switch } from "../ui/switch";

export function UserNav() {
  const navigate = useNavigate();

  const handleThemeChange = (checked) => {
    const theme = checked ? "dark" : "light";
    document.documentElement.classList.toggle("dark", checked);
    localStorage.setItem("theme", theme);
  };

  const isDarkMode = document.documentElement.classList.contains("dark");

  return (
    <div className="flex items-center gap-2">
      <Sun className="h-5 w-5 text-gray-900 dark:text-gray-100" />
      <Switch
        onCheckedChange={handleThemeChange}
        defaultChecked={isDarkMode}
      />
      <Moon className="h-5 w-5 text-gray-900 dark:text-gray-100" />
    </div>

  );
}
