import { promises as fs } from 'fs';
import Buttons from './Buttons';



export default async function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className='flex flex-col border-dotted border-2 border-white p-1 m-1'>
        <Buttons></Buttons>
      </div>
      
    </div>
  );
}
