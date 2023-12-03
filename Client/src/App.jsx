import { useState } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  const [url, seturl] = useState('')
  const [data, setdata] = useState('')
  const [load, setload] = useState(false);
  let host = import.meta.env.VITE_SERVER;
  let link = 'https://sooraj-rao.vercel.app/';


  const handleSubmit = async () => {
    setdata('')
    try {
      if (url.length < 14 || !url.includes(':') || !url.includes('.')) return toast.error('Enter a valid URL')
      setload(!load)
      let res = await axios.post(host + 'add', { url })
      setload(false)
      setdata(host + res.data)
    } catch (error) {
      setload(false)
      toast.error('Unable to shorten URL')
    }
  }
  const Copy = async () => {
    toast.success('URL Copied');
    window.navigator.clipboard.writeText(data)
  }

  return (
    <div className=' font-sans h-screen overflow-hidden '>
      <Toaster
        position='top-right'
      />
      <div className=' px-5  bg-blue-400  text-white text-center lg:h-60 sm:h-96 h-[38rem] pt-10 pb-16  '>
        <h1 className=' font-medium '>URL shortner</h1>

        <input
          value={url}
          onChange={(e) => seturl(e.target.value)}
          type="text" placeholder='Paste Or Enter Url..' autoFocus
          className={` mt-20  h-12 md:w-1/3 sm:w-1/2 w-5/6 px-3 text-xl border-none outline-none rounded 
          `}
        />
        <button
          onClick={handleSubmit}
          className='sm:mt-0 mt-10 px-8 py-2 ml-2 md:ml-6 text-lg rounded-lg border-none hover:bg-blue-100 cursor-pointer'>Submit</button>
        <br />

        <div>
          {
            data &&
            <div>
              <h3 className=' mt-10 text-lg font-medium '>Your Shortened URL </h3>
              <div className=' flex justify-center flex-wrap items-center '>
                <input type="text" readOnly value={data}
                  className='mt-3 h-12 mb-4 sm:mb-0 md:w-1/4 sm:w-1/3 w-4/6 px-3 text-xl outline-none rounded border-none'
                />
                <div onClick={Copy} className='  flex  justify-center  items-center hover:bg-blue-100 bg-white text-black ml-2 sm:mt-4 md:ml-6 text-lg cursor-pointer h-10 w-24 outline-none border-none rounded-md'>
                  <div className=' mr-2 mt-1'>
                    <svg height="1rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M21 8C21 6.34315 19.6569 5 18 5H10C8.34315 5 7 6.34315 7 8V20C7 21.6569 8.34315 23 10 23H18C19.6569 23 21 21.6569 21 20V8ZM19 8C19 7.44772 18.5523 7 18 7H10C9.44772 7 9 7.44772 9 8V20C9 20.5523 9.44772 21 10 21H18C18.5523 21 19 20.5523 19 20V8Z" fill="#0F0F0F"></path> <path d="M6 3H16C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1H6C4.34315 1 3 2.34315 3 4V18C3 18.5523 3.44772 19 4 19C4.55228 19 5 18.5523 5 18V4C5 3.44772 5.44772 3 6 3Z" fill="#0F0F0F"></path> </g></svg>
                  </div>
                  <span>
                    Copy
                  </span>
                </div>
                <div onClick={() => window.open(data, '_blank')} className='  flex  justify-center  items-center hover:bg-blue-100 bg-white text-black ml-2 sm:mt-4 md:ml-6 text-lg cursor-pointer h-10 w-24 outline-none border-none rounded-md'>
                  <div className=' mr-2 mt-1'>
                    <svg height="1rem" fill="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" d="M5,2 L7,2 C7.55228475,2 8,2.44771525 8,3 C8,3.51283584 7.61395981,3.93550716 7.11662113,3.99327227 L7,4 L5,4 C4.48716416,4 4.06449284,4.38604019 4.00672773,4.88337887 L4,5 L4,19 C4,19.5128358 4.38604019,19.9355072 4.88337887,19.9932723 L5,20 L19,20 C19.5128358,20 19.9355072,19.6139598 19.9932723,19.1166211 L20,19 L20,17 C20,16.4477153 20.4477153,16 21,16 C21.5128358,16 21.9355072,16.3860402 21.9932723,16.8833789 L22,17 L22,19 C22,20.5976809 20.75108,21.9036609 19.1762728,21.9949073 L19,22 L5,22 C3.40231912,22 2.09633912,20.75108 2.00509269,19.1762728 L2,19 L2,5 C2,3.40231912 3.24891996,2.09633912 4.82372721,2.00509269 L5,2 L7,2 L5,2 Z M21,2 L21.081,2.003 L21.2007258,2.02024007 L21.2007258,2.02024007 L21.3121425,2.04973809 L21.3121425,2.04973809 L21.4232215,2.09367336 L21.5207088,2.14599545 L21.5207088,2.14599545 L21.6167501,2.21278596 L21.7071068,2.29289322 L21.7071068,2.29289322 L21.8036654,2.40469339 L21.8036654,2.40469339 L21.8753288,2.5159379 L21.9063462,2.57690085 L21.9063462,2.57690085 L21.9401141,2.65834962 L21.9401141,2.65834962 L21.9641549,2.73400703 L21.9641549,2.73400703 L21.9930928,2.8819045 L21.9930928,2.8819045 L22,3 L22,3 L22,9 C22,9.55228475 21.5522847,10 21,10 C20.4477153,10 20,9.55228475 20,9 L20,5.414 L13.7071068,11.7071068 C13.3466228,12.0675907 12.7793918,12.0953203 12.3871006,11.7902954 L12.2928932,11.7071068 C11.9324093,11.3466228 11.9046797,10.7793918 12.2097046,10.3871006 L12.2928932,10.2928932 L18.584,4 L15,4 C14.4477153,4 14,3.55228475 14,3 C14,2.44771525 14.4477153,2 15,2 L21,2 Z"></path> </g></svg>
                  </div>
                  <span>
                    Open
                  </span>
                </div>
              </div>
            </div>
          }
          {load &&
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
          }
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(96, 165, 250)" fillOpacity="1" d="M0,256L80,245.3C160,235,320,213,480,218.7C640,224,800,256,960,256C1120,256,1280,224,1360,208L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
      <div className='hidden md:block  md:-mt-[14rem] xl:-mt-[18rem] -ml-[20rem]'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(96, 165, 250)" fillOpacity="0.5" d="M0,256L80,245.3C160,235,320,213,480,218.7C640,224,800,256,960,256C1120,256,1280,224,1360,208L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
      </div>
      <div className=' absolute bottom-3 sm:left-[45%] left-[38%] flex justify-center' >
        <span >Made by
          <span className=' cursor-pointer text-blue-800 pl-3  ' onClick={() => window.open(link, '_target')}>Sooraj</span>
        </span>
      </div>
    </div>

  )
}

export default App