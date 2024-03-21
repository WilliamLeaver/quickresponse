"use client"
import React, { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from "@/components/ui/button"
import { Calendar } from '@/components/ui/calendar';

interface Props {
  label: string,
  response: string,
  date: Date | undefined,
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>,
  ClipboardCopy: (text: string) => void,
}

const Pickdate = (props:Props) => {
  const [calendarOpen, setCalendarOpen] = useState(false);

  return (
    <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
      <PopoverTrigger className='w-full' asChild>
        <Button variant="default" className="w-full">{props.label}</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div>
          <Calendar mode="single" selected={props.date} onSelect={props.setDate} className="rounded-md border"></Calendar>
        </div>
        <div className='flex justify-end mt-1'>
          <Button onClick={() => { 
            if (props.date != undefined) {
              if (props.date <= new Date()) {
                alert('Date must be in the future');
              }
              else {
                props.ClipboardCopy(props.response + props.date?.toDateString().slice(0, 16)); 
                setCalendarOpen(false); 
              }
            }
            else {
              alert('Please select a date');
            }
          }}>Done</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default Pickdate