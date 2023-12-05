import { WaveSvg } from '../Data'

const Footer = ({ link }) => {
    return (
        <div>
            {WaveSvg}
            <div className='w-full  absolute  bottom-1 flex justify-center font-sans' >
                <span>Developed By</span><span onClick={() => window.open(link, '_blank')} className=' pl-2 text-blue-800 font-semibold cursor-pointer' >Sooraj</span>
            </div>
        </div>
    )
}

export default Footer