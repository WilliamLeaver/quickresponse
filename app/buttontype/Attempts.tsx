'use client'
import React, {useState} from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from "@/components/ui/button"
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface Props {
  label: string,
  response: string,
  ClipboardCopy: (text: string) => void,
}

const CraftResponse = (response: string, isVMChecked:Boolean, isEmailChecked: Boolean) => {
    if (isVMChecked == true) {
        response += ", Left Voicemail";
    }
    else {
        response += ", No Voicemail"
    }
    if (isEmailChecked == true) {
        response += ", Unable to Reach Email Sent";
    }
    return response;
}

const Attempts = (props:Props) => {
    const [calendarOpen, setCalendarOpen] = useState(false);
    const [VMchecked, setVMchecked] = useState(false);
    const [Emailchecked, setEmailchecked] = useState(false);
  return (
    <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
      <PopoverTrigger className='w-full' asChild>
        <Button variant="default" className="w-full">{props.label}</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className='flex flex-row justify-around'>
            <Checkbox id="VM" onCheckedChange={() => {if (VMchecked == true) setVMchecked(false); else setVMchecked(true);}}/><Label htmlFor="VM">Voicemail?</Label>
            <Checkbox id="email" onCheckedChange={() => {if (Emailchecked == true) setEmailchecked(false); else setEmailchecked(true);}}/><Label htmlFor="email">Email Sent?</Label>
        </div>
        <div className='flex justify-end mt-1'>
          <Button onClick={() => {props.ClipboardCopy(CraftResponse(props.response, VMchecked, Emailchecked)); setCalendarOpen(false); setEmailchecked(false); setVMchecked(false);}}>Done</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default Attempts