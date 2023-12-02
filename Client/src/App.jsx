import { useState } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  const [url, seturl] = useState('')
  const [data, setdata] = useState('')
  const [load, setload] = useState(false);
  let host = import.meta.env.VITE_SERVER


  const handleSubmit = async () => {
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
    toast.success('URL Copied', {
      style: {
        background: 'black',
        color: 'white',
        margin: '1rem 2rem'
      }
    });
    window.navigator.clipboard.writeText(data)
  }

  return (
    <div className=' font-sans'>
      <Toaster
        position='top-right'
      />
      <div className=' px-5 bg-blue-400 text-white text-center lg:h-60 sm:h-96 h-[30rem] py-10 pb-14  '>
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
              <input type="text" readOnly value={data}
                className='mt-3 h-12 md:w-1/4 sm:w-1/2 w-4/6 px-3 text-xl outline-none rounded border-none'
              />
              <button onClick={Copy} className='hover:bg-blue-100 ml-2 md:ml-6 text-lg cursor-pointer h-10 w-24 outline-none border-none rounded-md'>
                Copy
              </button>
            </div>
          }
          {load &&
            <div>
              <h3 className=' flex justify-center mt-10 text-lg font-medium  '>
                <span className='animate w-1/3'>.</span>
              </h3>
              <input type="text" readOnly
                className='animate mt-3 h-12 md:w-1/4 sm:w-1/2 w-4/6 px-3 text-xl outline-none rounded border-none'
              />
              <button className='animate text-white ml-2 md:ml-6 text-lg cursor-pointer h-10 w-24 outline-none border-none rounded-md'>
                .
              </button>
            </div>
          }
        </div>

      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(96, 165, 250)" fillOpacity="1" d="M0,256L80,245.3C160,235,320,213,480,218.7C640,224,800,256,960,256C1120,256,1280,224,1360,208L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
      <div className='hidden md:block  md:-mt-[14rem] xl:-mt-[18rem] -ml-[20rem]'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(96, 165, 250)" fillOpacity="0.5" d="M0,256L80,245.3C160,235,320,213,480,218.7C640,224,800,256,960,256C1120,256,1280,224,1360,208L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
      </div>
    </div>
  )
}

export default App