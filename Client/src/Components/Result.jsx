import { CopySvg, OpenSvg } from "../Data"

const Result = ({ data, Copy }) => {
  return (
    <div>
      <h3 className=' mt-10 text-lg font-medium text-white ' style={{ textShadow: '1px 1px 1px black' }}>Your Shortened URL </h3>
      <div className=' flex justify-center flex-wrap items-center '>
        <input type="text" readOnly value={data}
          className='mt-3 h-12 mb-4 sm:mb-0 md:w-1/4 sm:w-1/3 w-5/6 px-3 text-xl outline-none rounded border-none'
        />
        <div onClick={Copy} className='  flex  justify-center  items-center hover:bg-blue-100 bg-white text-black ml-2 sm:mt-4 md:ml-6 text-lg cursor-pointer h-10 w-24 outline-none border-none rounded-md'>
          <div className=' mr-2 mt-1'>
            {CopySvg}
          </div>
          <span>
            Copy
          </span>
        </div>
        <div onClick={() => window.open(data, '_blank')} className='  flex  justify-center  items-center hover:bg-blue-100 bg-white text-black ml-2 sm:mt-4 md:ml-6 text-lg cursor-pointer h-10 w-24 outline-none border-none rounded-md'>
          <div className=' mr-2 mt-1'>
            {OpenSvg}
          </div>
          <span>
            Open
          </span>
        </div>
      </div>
    </div>
  )
}

export default Result