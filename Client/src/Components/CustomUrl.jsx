import axios from "axios"

export const Test = async (host) => {
    const res = await axios.get(host + 'test/simply');
}

const CustomUrl = ({ url, setUrl, error }) => {

    return (
        <div>
            <h3 className=' mt-10 text-lg font-semibold text-blue-950  '>Enter your custom URL </h3>
            <div className=' flex justify-center flex-wrap items-center '>
                <input placeholder="" type="text" value={url.two} onChange={(e) => setUrl({ ...url, two: e.target.value })}
                    className={`mt-3  h-12 mb-4 md:w-1/4 sm:w-1/3 w-4/6 px-3 text-xl outline-none rounded border-none
        ${error && url.two.length < 10 && 'shake   border-red-500'}
        `}
                    style={{ border: error && url.two.length < 10 ? '1px solid red' : '1px solid rgb(175, 241, 254)' }}
                />
            </div>
            <span className=" ml-2">-</span>
            <span className={` text-blue-950  font-bold  px-2 py-1 rounded-md mt-2`}>URL should contain minimum of 10  characters</span><br /><br />
            <span>-</span><span className={`  text-blue-950 font-bold   px-2 py-1 rounded-md mt-2`}>URL should contain only letters or numbers</span>
        </div>
    )
}

export default CustomUrl