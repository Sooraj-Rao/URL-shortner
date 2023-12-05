import React from 'react'
import { BulbSvg } from '../Data';

const ShowCustom = ({ setCustom, setShowCustom, setUrl, url }) => {
    return (
        <div className=' my-10'>
            {BulbSvg}
            <span>
                <span className=' ml-2  text-white text-lg ' style={{ textShadow: '1px 1px 1px black' }}>Want a custom shortened URL</span><br className=' sm:hidden block' /><br className=' sm:hidden block' />
                <span className=' px-2 py-1 rounded-md bg-blue-600 mx-2 text-white cursor-pointer' onClick={() => {
                    setCustom(true);
                    setShowCustom(false);
                    setUrl({ ...url, two: '' })
                }} >Yes</span>
                <span className=' px-2 py-1 rounded-md bg-blue-600 mx-2 text-white cursor-pointer' onClick={() => setShowCustom(false)} >No</span>
            </span>
        </div>
    )
}

export default ShowCustom