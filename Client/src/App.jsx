import { useState } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import { WaveSvg, CopySvg, OpenSvg, BulbSvg } from './Data'
import Loader from './Components/loader';
import Footer from './Components/Footer';
import CustomUrl from './Components/CustomUrl';
import ShowCustom from './Components/ShowCustom';
import Result from './Components/Result';

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
  let link = import.meta.env.VITE_LINK;
  let URL = import.meta.env.VITE_URL;

  const handleSubmit = async () => {
    if (url.one.includes(' ') || url.two.includes(' ')) {
      setError(true)
      return toast.error('URL cannot contain WhiteSpace')
    }
    if (url.one.length == 0 || custom && url.two.length == 0) {
      setError(true);
      return toast.error('URL cannot be empty')
    }
    if (custom && url.two.length < 10) {
      setError(true);
      return toast.error('Custom URL should have atleast 10 characters')
    }
    if (url.one.length < 14 || !url.one.includes(':') || !url.one.includes('.')) {
      setError(true)
      return toast.error('Enter a valid URL')
    }

    setData('')
    if (!custom && url.one) {
      try {
        setLoad(!load)
        let long = url.one;
        let res = await axios.post(host + 'add', { long })
        console.log(res);
        setLoad(false)
        setData(URL + res.data.short)
      } catch (error) {
        setLoad(false)
        toast.error('Unable to shorten URL')
      }
    } else if (custom && url.one.length && url.two.length) {
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
        setData(URL + res.data.short)
      } catch (error) {
        setLoad(false)
        toast.error('Unable to shorten URL')
      }
    }
  }
  const Copy = async () => {
    toast.success('URL Copied');
    window.navigator.clipboard.writeText(data)
  }

  error &&
    setTimeout(() => {
      setError(false)
    }, 1000);

  return (
    <div className=' font-sans h-screen overflow-hidden '>
      <Toaster
        position='top-right'
      />
      <div className=' px-5  bg-blue-400   text-center lg:h-[30rem] sm:h-96 h-[38rem] pt-10 pb-16  '>
        <h1 style={{ textShadow: '2px 2px 1px black' }} className=' font-medium title  text-white  '>URL shortner</h1>
        <input
          value={url.one}
          onChange={(e) => setUrl({ ...url, one: e.target.value })}
          type="text" placeholder='Paste Or Enter Url..' autoFocus
          className={` whitespace-nowrap  mt-20  h-12 md:w-1/3 sm:w-1/2 w-5/6 px-3 text-xl border-blue-400 border-none outline-none rounded 
          ${url.one.length == 0 && error && 'shake   border-red-500'}
          `}
          style={{ border: url.one.length == 0 && error ? '1px solid red' : '1px solid rgb(175, 241, 254)' }}
        />
        <button
          onClick={handleSubmit}
          className='sm:mt-0 mt-10 px-8 py-2 ml-2 md:ml-6 text-lg rounded-lg border-none hover:bg-blue-100 cursor-pointer'>Submit</button>
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
            custom &&
            <CustomUrl url={url} setUrl={setUrl} error={error} />
          }

          {load &&
            <Loader />
          }
        </div>
      </div>
      <Footer link={link} />
    </div>

  )
}

export default App