import { promises as fs } from 'fs';
import Buttons from './Buttons';



export default async function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className='flex flex-col border-dotted border-2 border-white p-1'>
        <div>
          <h1 className="text-2xl font-bold text-center">Notes</h1>
        </div>
        <Buttons></Buttons>
      </div>
      
    </div>
  );
}
