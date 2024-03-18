'use client'
import React, {useState} from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from "@/components/ui/button"
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@radix-ui/react-dropdown-menu';

interface Props {
  label: string,
  response: string,
  ClipboardCopy: (text: string) => void
}

const Attempts = (props:Props) => {
    const [calendarOpen, setCalendarOpen] = useState(false);
  return (
    <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
      <PopoverTrigger className='w-full' asChild>
        <Button variant="default" className="w-full">{props.label}</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div>
            <Checkbox id="VM?"></Checkbox>
        </div>
        <div className='flex justify-end mt-1'>
          <Button onClick={() => { props.ClipboardCopy(props.response)}}>Done</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default Attempts