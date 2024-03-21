'use client'
import React from 'react'
import data from './data.json';
import { useToast } from "@/components/ui/use-toast"
import Strings from '@/app/buttontype/Strings';
import Pickdate from './buttontype/Pickdate';
import Pickdate_time from './buttontype/Pickdate_time';
import Attempts from './buttontype/Attempts';


interface dataProps {
  "id": number,
  "type": string,
  "label": string,
  "response": string,
  "section": string
}


const AttemptsArray: dataProps[] = [];
const SchedulingArray: dataProps[] = [];
const NotesArray: dataProps[] = [];

const loadData = async () => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].section == "Attempts") {
      AttemptsArray.push(data[i]);
    }
    else if (data[i].section == "Scheduling") {
      SchedulingArray.push(data[i]);
    }
    else {
      NotesArray.push(data[i]);
    }
  }
}
loadData();
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
    <div className='grid grid-cols-3 text-center gap-2 font-extrabold text-xl m-1'>
      <div className=''>
        <h1 className='border-b-2 border-white'>Attempts</h1>
        {AttemptsArray.map((item, index) => (
          <div key={index} className='my-2'>
            {((item.type) == "Attempts") ?
              (<Attempts label={item.label} response={item.response} ClipboardCopy={ClipboardCopy}></Attempts>) :
              (<Strings label={item.label} response={item.response} ClipboardCopy={ClipboardCopy}></Strings>)}
          </div>
        ))}
      </div>
      <div className=''>
        <h1 className='border-b-2 border-white'>Scheduling</h1>
        {SchedulingArray.map((item, index) => (
          <div key={index} className='my-2'>
            {((item.type) == "Calendar+Time") ?
              (<Pickdate_time label={item.label} response={item.response} date={date} setDate={setDate} ClipboardCopy={ClipboardCopy}></Pickdate_time>) :
              (<Strings label={item.label} response={item.response} ClipboardCopy={ClipboardCopy}></Strings>)}
          </div>
        ))}
      </div>
      <div className=''>
        <h1 className='border-b-2 border-white'>Notes</h1>
        {NotesArray.map((item, index) => (
          <div key={index} className='my-2'>
            {((item.type) == "Calendar") ?
              (<Pickdate label={item.label} response={item.response} date={date} setDate={setDate} ClipboardCopy={ClipboardCopy}></Pickdate>) :
              (<Strings label={item.label} response={item.response} ClipboardCopy={ClipboardCopy}></Strings>)}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Buttons