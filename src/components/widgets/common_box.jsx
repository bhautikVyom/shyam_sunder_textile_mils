import React, { useState } from 'react'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../../components/ui/command";
import { Check, ChevronDown, ChevronsUpDown } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import { cn } from '../../lib/utils';
import { Button } from '../ui/button';



const CommonBox = ({ placeholders, frameworks, value, onChange, error }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="justify-between w-full"
          >
            {value
              ? frameworks?.find((framework) => framework.value === value)?.label
              : <span className='line-clamp-1'>{placeholders}</span>}
            <ChevronDown className="opacity-50 max-sm:size-5" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 lg:w-[367px]" align="start">
          <Command>
            <CommandInput placeholder="search..." className="h-9" />
            <CommandList>
              <CommandEmpty>not found</CommandEmpty>
              <CommandGroup>
                {frameworks?.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      onChange(currentValue === value ? "" : currentValue)
                      setOpen(false)
                    }}
                  >
                    {framework.label}
                    <Check
                      className={cn(
                        "ml-auto",
                        value === framework.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </>
  )
}

export default CommonBox
