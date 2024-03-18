'use client'
import React from 'react'
import data from './data.json';
import { useToast } from "@/components/ui/use-toast"
import Strings from '@/app/buttontype/Strings';
import Pickdate from './buttontype/Pickdate';
import Pickdate_time from './buttontype/Pickdate_time';
import Attempts from './buttontype/Attempts';

const Buttons = () => {
  const { toast } = useToast()
  const [date, setDate] = React.useState<Date | undefined>(new Date())

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
          {((item.type) == "Attempts") ?
          (<Attempts label={item.label} response={item.response} ClipboardCopy={ClipboardCopy}></Attempts>) :
            ((item.type) == "Calendar") ?
            (<Pickdate label={item.label} response={item.response} date={date} setDate={setDate} ClipboardCopy={ClipboardCopy}></Pickdate>) : 
              ((item.type) == "Calendar+Time") ?
              (<Pickdate_time label={item.label} response={item.response} date={date} setDate={setDate} ClipboardCopy={ClipboardCopy}></Pickdate_time>) :
                (<Strings label={item.label} response={item.response} ClipboardCopy={ClipboardCopy}></Strings>)}
        </div>
      ))}
    </div>
  )
}

export default Buttons