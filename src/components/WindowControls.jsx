import React from "react";
import useWindowStore from "#store/window";
import { X, Minus, Plus } from "lucide-react";

const WindowControls = ({ target }) => {
  const { closeWindow } = useWindowStore();

  return (
    <div id='window-controls' className='flex space-x'>
      <div
        className='close w-4 h-4 flex items-center justify-center bg-red-500 rounded-full hover:bg-red-600 cursor-pointer relative'
        onClick={() => closeWindow(target)}
      >
        <X
          size={11}
          color='black'
          className='opacity-0 hover:opacity-100 transition-opacity'
        />
      </div>
      <div className='minimize w-4 h-4 flex items-center justify-center bg-yellow-500 rounded-full hover:bg-yellow-600 cursor-pointer relative'>
        <Minus
          size={11}
          color='black'
          className='opacity-0 hover:opacity-100 transition-opacity'
        />
      </div>
      <div className='maximize w-4 h-4 flex items-center justify-center bg-green-500 rounded-full hover:bg-green-600 cursor-pointer relative'>
        <Plus
          size={11}
          color='black'
          className='opacity-0 hover:opacity-100 transition-opacity'
        />
      </div>
    </div>
  );
};

export default WindowControls;
