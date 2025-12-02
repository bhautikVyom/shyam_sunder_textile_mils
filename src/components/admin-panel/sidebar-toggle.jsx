import { ChevronLeft } from "lucide-react";

import { cn } from "../../lib/utils";
import { Button } from "../ui/button";

export function SidebarToggle({ isOpen, setIsOpen }) {
  return (
    <div className="invisible lg:visible absolute top-10 -right-4 z-20">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-md size-8 cursor-pointer bg-background border border-border"
        variant="secondary"
        size="icon"
      >
        <ChevronLeft
          className={cn(
            "size-5 transition-transform ease-in-out duration-700",
            isOpen === false ? "rotate-180" : "rotate-0"
          )}
        />
      </Button>
    </div>
  );
}
