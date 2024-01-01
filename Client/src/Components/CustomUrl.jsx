import axios from "axios"
import { useState } from "react";
import toast from "react-hot-toast";

export const Test = async (host) => {
    const res = await axios.get(host + 'test/simply');
    toast(res.data,{
        icon: '👋',
    });
}

const CustomUrl = ({ url, setUrl, error }) => {

    let isValidInput = /^[a-zA-Z0-9]+$/.test(url?.two);

    const handleChange = (e) => {
        setUrl({ ...url, two: e.target.value })
    }

    return (
        <div>
            <h3 className=' mt-10 text-lg font-semibold text-blue-950  '>Enter your custom URL </h3>
            <div className=' flex justify-center flex-wrap items-center '>
                <input placeholder="" type="text" value={url?.two} onChange={handleChange}
                    className={`mt-3  h-12 mb-4 md:w-1/4 sm:w-1/3 w-4/6 px-3 text-xl outline-none rounded border-2 border-blue-300
                            ${error && url?.two?.length < 10 && 'shake   border-red-500'}
                            ${error && url?.two?.includes(' ') && 'shake   border-red-500'}
                            ${!isValidInput && url.two.length > 1 && 'border-2 border-red-500'}
        `}
                />
            </div>
            <div className=" flex justify-center sm:my-0 my-5 ">
                <div className=" 2xl:w-[30%] 2xl:pl-10  text-start  ">
                    <div className={`
                    ${url?.two?.length > 10 && 'hidden'}
                    `}>
                        <span>-</span><span className={`px-2 `}>URL should contain minimum of 10  characters</span>
                    </div>
                    <div className={` my-2
                     ${isValidInput && 'hidden'}
                    `}>
                        <span>-</span><span className={`px-2 `}>URL should contain only letters or numbers</span>
                    </div>
                    <div className={`
                    ${!url?.two?.includes(' ') && 'hidden'}
                    `}>
                        <span>-</span><span className={`px-2`}>URL cannot contain Whitespace</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomUrl