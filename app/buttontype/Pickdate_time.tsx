'use client'
import React, {useState} from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from "@/components/ui/button"
import { Calendar } from '@/components/ui/calendar';
import { DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { DropdownMenu, DropdownMenuContent } from '@/components/ui/dropdown-menu';

interface Props {
    label: string,
    response: string,
    date: Date | undefined,
    setDate: React.Dispatch<React.SetStateAction<Date | undefined>>,
    ClipboardCopy: (text: string) => void,
}

const Pickdate_time = (props: Props) => {
    const [calendarOpen, setCalendarOpen] = useState(false);
    const [meridiem, setMeridiem] = useState('AM');
    const [minutes, setMins] = useState('00');
    const [hours, setHrs] = useState('01');

  return (
    // expire date must be in the future
    <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
    <PopoverTrigger className='w-full' asChild>
      <Button variant="default" className="w-full">{props.label}</Button>
    </PopoverTrigger>
    <PopoverContent>
      <div>
        <Calendar mode="single" selected={props.date} onSelect={props.setDate} className="rounded-md border"></Calendar>
      </div>
      <div className='flex flex-row m-2 justify-evenly'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="default">{hours}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setHrs('01')}>01</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setHrs('02')}>02</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setHrs('03')}>03</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setHrs('04')}>04</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setHrs('05')}>05</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setHrs('06')}>06</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setHrs('07')}>07</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setHrs('08')}>08</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setHrs('09')}>09</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setHrs('10')}>10</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setHrs('11')}>11</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setHrs('12')}>12</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className='text-2xl font-extrabold'>:</div>
        <Button variant="default" onClick={() => {if (minutes == '00') {setMins('30')} else (setMins('00'))}}>{minutes}</Button>
        <Button variant="default" onClick={() => {if (meridiem == 'AM') {setMeridiem('PM')} else {setMeridiem('AM')}}}>{meridiem}</Button>
      </div>
      <div className='flex justify-end mt-1'>
        <Button variant="default" onClick={() => { props.ClipboardCopy(props.response + props.date?.toDateString().slice(0, 16) + " @ " + hours + ":" + minutes + " " + meridiem + " Eastern Time"); setCalendarOpen(false); }}>Done</Button>
      </div>
    </PopoverContent>
  </Popover>
  )
}

export default Pickdate_time