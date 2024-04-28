import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[25%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/3'> {overview} </p>
        <div>
            <button className='bg-white text-black text-xl p-4 px-12 rounded-lg hover:bg-opacity-80'><span>▶</span> Play</button>
            <button className='bg-gray-500 text-white text-xl m-2 p-4 px-12 rounded-lg bg-opacity-70'> <span>ℹ</span>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle