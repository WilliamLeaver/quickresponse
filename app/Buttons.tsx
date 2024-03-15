'use client'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import data from './data.json';
import { useToast } from "@/components/ui/use-toast"
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';


const Buttons = () => {
  const { toast } = useToast()
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [calendarOpen, setCalendarOpen] = useState(false);
  
  const ClipboardCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied to clipboard",
      description: text,
    })
  }

  return (
    <div className="grid grid-cols-3 gap-2 m-1 w-max">
      {data.map((item) => (
        <div key={item.id}>
          {((item.type) == "String") ?
            (<Button onClick={() => ClipboardCopy(item.response)} variant="default" className="w-full">{item.label}</Button>) :
            (<Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
              <PopoverTrigger className='w-full'>
                <Button variant="default" className="w-full">{item.label}</Button>
              </PopoverTrigger>
              <PopoverContent>
                <div>
                  <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border"></Calendar>
                </div>
                <div className='flex justify-end mt-1'>
                  <Button onClick={() => {ClipboardCopy(item.response + date?.toDateString().slice(0, 16)); setCalendarOpen(false);}}>Done</Button>
                </div>
              </PopoverContent>
            </Popover>)}
        </div>
      ))}
    </div>
  )
}

export default Buttons