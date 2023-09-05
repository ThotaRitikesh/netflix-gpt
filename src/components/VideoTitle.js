import React from 'react';

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[20%] px-12 absolute bg-gradient-to-r from-black text-white w-screen aspect-video'>
      <h1 className='text-5xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-2/4'>{overview}</p>
      <div>
        <button className='bg-white text-black p-2 px-8  text-l font-semibold hover:bg-opacity-80 rounded-lg'>Play</button>
        <button className='mx-3 bg-gray-500 text-white p-2 px-8   text-l font-semibold bg-opacity-50 rounded-lg'>More Info</button>
      </div>
    </div>
  );
}

export default VideoTitle;
