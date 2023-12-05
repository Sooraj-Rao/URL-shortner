
const Loader = () => {
    return (
        <div>
            <h3 className=' flex justify-center  mt-10 text-lg font-medium  '>
                <span className='animate sm:w-1/4 w-1/2 h-8 rounded'></span>
            </h3>
            <div className=' flex justify-center items-center flex-wrap'>
                <div
                    className='animate mt-4 h-12 mb-4 sm:mb-0 md:w-1/4 sm:w-1/3 w-4/6 px-3 text-xl outline-none rounded border-none'
                >
                </div>
                <div className='sm:mt-3 animate z-50 text-white ml-2 md:ml-6 text-lg  h-10 w-24  rounded-md'>
                </div>
                <div className='sm:mt-3 animate z-50 text-white ml-2 md:ml-6 text-lg  h-10 w-24  rounded-md'>
                </div>
            </div>
        </div>
    )
}

export default Loader