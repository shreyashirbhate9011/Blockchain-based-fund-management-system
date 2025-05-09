"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { Clock } from "lucide-react"

interface TimePickerProps {
  defaultValue?: string
  className?: string
}

export function TimePicker({ defaultValue = "12:00 PM", className }: TimePickerProps) {
  const [time, setTime] = useState(defaultValue)
  const [open, setOpen] = useState(false)

  const hours = Array.from({ length: 12 }, (_, i) => i + 1)
  const minutes = ["00", "15", "30", "45"]
  const periods = ["AM", "PM"]

  const handleSelectTime = (hour: number, minute: string, period: string) => {
    setTime(`${hour.toString().padStart(2, "0")}:${minute} ${period}`)
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className={cn("w-[120px] justify-start text-left font-normal", className)}>
          <Clock className="mr-2 h-4 w-4" />
          {time}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="p-3">
          <div className="space-y-2">
            <div className="grid grid-cols-4 gap-2">
              <div className="col-span-2">
                <div className="font-medium text-xs mb-1">Hour</div>
                <div className="grid grid-cols-4 gap-1">
                  {hours.map((hour) => (
                    <Button
                      key={hour}
                      size="sm"
                      variant="outline"
                      className="h-8 w-8 p-0"
                      onClick={() => {
                        const [_, minute, period] = time.split(/[: ]/)
                        handleSelectTime(hour, minute, period)
                      }}
                    >
                      {hour}
                    </Button>
                  ))}
                </div>
              </div>
              <div>
                <div className="font-medium text-xs mb-1">Minute</div>
                <div className="grid grid-cols-1 gap-1">
                  {minutes.map((minute) => (
                    <Button
                      key={minute}
                      size="sm"
                      variant="outline"
                      className="h-8 w-full p-0"
                      onClick={() => {
                        const [hour, _, period] = time.split(/[: ]/)
                        handleSelectTime(Number.parseInt(hour), minute, period)
                      }}
                    >
                      {minute}
                    </Button>
                  ))}
                </div>
              </div>
              <div>
                <div className="font-medium text-xs mb-1">AM/PM</div>
                <div className="grid grid-cols-1 gap-1">
                  {periods.map((period) => (
                    <Button
                      key={period}
                      size="sm"
                      variant="outline"
                      className="h-8 w-full p-0"
                      onClick={() => {
                        const [hour, minute] = time.split(/[: ]/)
                        handleSelectTime(Number.parseInt(hour), minute, period)
                      }}
                    >
                      {period}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center mt-2">
              <Input type="text" value={time} onChange={(e) => setTime(e.target.value)} className="flex-1" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
