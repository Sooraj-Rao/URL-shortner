import React from 'react'
import { BulbSvg } from '../Data';

const ShowCustom = ({ setCustom, setShowCustom, setUrl, url }) => {
    return (
        <div className=' flex justify-center my-10 '>
            <div className='xl:w-1/3 md:w-2/3 w-5/6  p-3 shadow-[1px_1px_10px_-1px] sm:rounded-full rounded-md shadow-black'>
                {BulbSvg}
                <span >
                    <span className=' ml-2  text-blue-950 text-lg font-semibold  ' >Want a custom shortened URL</span><br className=' sm:hidden block' /><br className=' sm:hidden block' />
                    <span className=' px-2 py-1 rounded-md bg-blue-600 hover:bg-blue-700 mx-2 text-white cursor-pointer' onClick={() => {
                        setCustom(true);
                        setShowCustom(false);
                        setUrl({ ...url, two: '' })
                    }} >Yes</span>
                    <span className=' px-3 py-1 rounded bg-blue-600 hover:bg-blue-700 mx-2 text-white cursor-pointer' onClick={() => setShowCustom(false)} >No</span>
                </span>
            </div>
        </div>
    )
}

export default ShowCustom