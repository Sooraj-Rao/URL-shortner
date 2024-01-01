
const Loader = () => {
    return (
        <div>
            <h3 className=' flex justify-center  mt-10   '>
                <span className='animate sm:w-1/4 w-1/2 h-8 rounded'></span>
            </h3>
            <div className=' flex justify-center items-center flex-wrap'>
                <div
                    className='animate mt-4 h-12 mb-4 sm:mb-0 md:w-1/4 sm:w-1/3 w-4/6 px-3   rounded '
                >
                </div>
                <div className='sm:mt-3 animate z-50  ml-2 md:ml-6  h-10 w-24  rounded-md'>
                </div>
                <div className='sm:mt-3 animate z-50  ml-2 md:ml-6   h-10 w-24  rounded-md'>
                </div>
            </div>
        </div>
    )
}

export default Loader