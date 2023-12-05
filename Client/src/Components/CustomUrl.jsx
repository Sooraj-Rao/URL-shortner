
const CustomUrl = ({ url, setUrl, error }) => {
    return (
        <div>
            <h3 className=' mt-10 text-lg font-medium text-white ' style={{ textShadow: '1px 1px 1px black' }}>Enter your custom URL </h3>
            <div className=' flex justify-center flex-wrap items-center '>
                <input placeholder="Add atleast 10 characters" type="text" value={url.two} onChange={(e) => setUrl({ ...url, two: e.target.value })}
                    className={`mt-3  h-12 mb-4 sm:mb-2 md:w-1/4 sm:w-1/3 w-4/6 px-3 text-xl outline-none rounded border-none
        ${error && url.two.length < 10 && 'shake   border-red-500'}
        `}
                    style={{ border: error && url.two.length < 10 ? '1px solid red' : '1px solid rgb(175, 241, 254)' }}
                />
            </div>
            <span style={{ textShadow: '1px 1px 1px black' }} className={` bg-blue-500 text-white  px-2 py-1 rounded-md mt-2`}>URL can conatin only letters or numbers</span>
        </div>
    )
}

export default CustomUrl