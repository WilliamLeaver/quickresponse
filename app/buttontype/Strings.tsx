import React from 'react'
import { Button } from "@/components/ui/button"


interface Props {
  label: string,
  response: string,
  ClipboardCopy: (text: string) => void,
}

const Strings = (props: Props) => {
  return (
    <Button onClick={() => props.ClipboardCopy(props.response)} variant="default" className="w-full">{props.label}</Button>
    )
}

export default Strings