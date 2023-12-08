import { useEffect, useState } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import Loader from './Components/Loader';
import Footer from './Components/Footer';
import CustomUrl, { Test } from './Components/CustomUrl';
import ShowCustom from './Components/ShowCustom';
import Result from './Components/Result';
import { ErrorMessage } from './Data';

const App = () => {
  const [url, setUrl] = useState({
    one: '',
    two: ''
  })
  const [data, setData] = useState('')
  const [load, setLoad] = useState(false);
  const [custom, setCustom] = useState(false);
  const [showCustom, setShowCustom] = useState(true)
  const [error, setError] = useState(false);
  let host = import.meta.env.VITE_SERVER;



  const handleSubmit = async () => {
    if (url.one.length == 0 || custom && url.two.length == 0) {
      setError(true);
      return toast.error(ErrorMessage.Empty)
    }
    if (custom && url.two.length < 10) {
      setError(true);
      return toast.error(ErrorMessage.TenChar)
    }
    if (url.one.length < 6 || !url.one.includes('.')) {
      setError(true)
      return toast.error(ErrorMessage.Valid)
    }
    if (url.one.includes(' ') || url.two.includes(' ')) {
      setError(true)
      return toast.error(ErrorMessage.WhiteSpace)
    }
    setData('')
    if (!custom && url.one) {
      try {
        setLoad(!load)
        let long = url.one;
        let res = await axios.post(host + 'add', { long })
        setLoad(false)
        setData(host + res.data.short)
      } catch (error) {
        setLoad(false)
        toast.error('Unable to shorten URL')
      }
    } else if (custom && url.one && url.two) {
      try {
        const isValidInput = /^[a-zA-Z0-9]+$/.test(url.two);
        if (!isValidInput) return toast.error('Custom URL can conatin only letter or number')
        setShowCustom(false);
        setLoad(!load)
        let res = await axios.post(host + 'custom/' + 'add', { short: url.two, long: url.one })
        setLoad(false)
        if (!res.data.success) {
          return toast.error((res.data.message))
        }
        setShowCustom(true);
        setCustom(false)
        setData(host + res.data.short)
      } catch (error) {
        setLoad(false)
        toast.error('Unable to shorten URL')
      }
    }
    setUrl({ ...url, one: '' })
  }

  const Copy = async () => {
    window.navigator.clipboard.writeText(data)
    toast.success('URL Copied');
  }

  error &&
    setTimeout(() => {
      setError(false)
    }, 1000);

  useEffect(() => {
    Test(host)
  }, [host])

  return (
    <div className=' font-mono h-screen overflow-hidden '>
      <Toaster
        position='top-right'
      />
      <div className=' px-5 bg-blue-300  sm:bg-blue-400   text-center lg:h-[30rem] sm:h-96 h-[38rem] pt-5 pb-28 '>
        <h1 style={{ textShadow: '3px 3px 1px black' }} className='   text-4xl font-semibold  text-white font-sans  '>URL shortner</h1>
        <input
          value={url.one}
          onChange={(e) => setUrl({ ...url, one: e.target.value })}
          type="text" placeholder='Paste Or Enter URL..' autoFocus
          className={` whitespace-nowrap  sm:mt-20 mt-10 border-2  h-12 md:w-1/3 sm:w-1/2 w-5/6 px-3 text-xl  border-blue-300  outline-none rounded 
          ${error && url.one.length == 0 && 'shake   border-red-500'}
          ${error && url.one.includes(' ') && 'shake   border-red-500'}
          ${error && !url.one.includes('.') && 'shake   border-red-500'}
          ${error && url.one.length < 6 && 'shake   border-red-500'}
          `}
        />
        <button
          disabled={load}
          onClick={handleSubmit}
          className='sm:mt-0 disabled:bg-slate-600 disabled:cursor-not-allowed mt-5 bg-blue-600 text-white hover:bg-blue-700  px-8 py-2 ml-2 md:ml-6 text-lg rounded-lg border-none outline-none  cursor-pointer'>Submit</button>
        <br />
        <div>
          {
            data && !custom &&
            <Result data={data} Copy={Copy} />
          }
          {
            showCustom && !load &&
            <ShowCustom setUrl={setUrl} url={url} setShowCustom={setShowCustom} setCustom={setCustom} />
          }
          {
            custom && !load &&
            <CustomUrl url={url} setUrl={setUrl} error={error} />
          }
          {load &&
            <Loader />
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App