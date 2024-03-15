'use client'
import React from 'react'
import { Button } from "@/components/ui/button"
import data from './data.json';
import { useToast } from "@/components/ui/use-toast"
  

const Buttons = () => {
    const { toast } = useToast()
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
                (<Button onClick={() => ClipboardCopy(item.response)} variant="default" className="focus:bg-green-800 w-full">{item.label}</Button>) : 
                (<Button onClick={() => ClipboardCopy(item.response)} variant="default" className="focus:bg-green-800 w-full">{item.label}</Button>)}
            </div>
        ))}   
    </div> 
  )
}

export default Buttons