import { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [url, seturl] = useState('')
  const [data, setdata] = useState('')
  const [error, seterror] = useState('')
  let host =  import.meta.env.VITE_SERVER

  error &&
    setTimeout(() => {
      seterror(!error)
    }, 3000);

  const handleSubmit = async () => {
    try {
      if (url.length < 14 || !url.includes(':') || !url.includes('.')) return seterror(!error)
      let res = await axios.post(host + 'add', { url })
      setdata(res.data)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <div className=' px-5 bg-blue-400 text-white text-center lg:h-60 sm:h-96 h-[34rem] py-10 pb-14   font-sans '>
        <h1 className=' font-medium '>URL shortner</h1>
        <input
          value={url}
          onChange={(e) => seturl(e.target.value)}
          type="text" placeholder='Paste Or Enter Url..' autoFocus
          className={` mt-20  h-12 md:w-1/3 sm:w-1/2 w-4/6 px-3 text-xl border-none outline-none rounded 
          ${error && 'border outline border-red-500'}
          `}
        />
        <button
          onClick={handleSubmit}
          className='sm:mt-0 mt-10 px-8 py-2 ml-6 text-lg rounded-lg border-none hover:bg-blue-100 cursor-pointer'>Submit</button>
        <br />
        {
          error &&
          <label className=' text-red-800 bg-teal-300 px-2 ' >Please add a valid URL</label>
        }
        {
          data &&
          <div>
            <h3 className=' mt-10 text-lg font-medium '>Your Shortened URL </h3>
            <input type="text" readOnly value={data}
              className='mt-3 h-12 md:w-1/4 sm:w-1/2 w-4/6 px-3 text-xl outline-none rounded border-none'
            />
            <button

              className='sm:mt-0 mt-10 px-8 py-2 ml-6 text-lg rounded-lg border-none hover:bg-blue-100 cursor-pointer'>Copy</button>
          </div>
        }
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(96, 165, 250)" fillOpacity="1" d="M0,256L80,245.3C160,235,320,213,480,218.7C640,224,800,256,960,256C1120,256,1280,224,1360,208L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
      <div className='hidden md:block  md:-mt-[14rem] xl:-mt-[18rem] -ml-[20rem]'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(96, 165, 250)" fillOpacity="0.5" d="M0,256L80,245.3C160,235,320,213,480,218.7C640,224,800,256,960,256C1120,256,1280,224,1360,208L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
      </div>
    </div>
  )
}

export default App