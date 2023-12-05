import { WaveSvg } from '../Data'

const Footer = ({ link }) => {
    return (
        <div>
            {WaveSvg}
            <div className='w-full  absolute  bottom-1 flex justify-center' >
                <span >Made by
                    <span className=' cursor-pointer text-blue-800 pl-3  ' onClick={() => window.open(link, '_target')}>Sooraj</span>
                </span>
            </div>
        </div>
    )
}

export default Footer