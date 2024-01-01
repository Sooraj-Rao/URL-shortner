import {Link} from 'react-router-dom';

const NotFound = () => {
    let link = 'https://srj-url-shortner.vercel.app/';
    return (
        <div className=" bg-blue-400 flex items-center justify-center h-screen  w-full" >
            <section className="font-sans ">
                <div className=" mx-auto">
                    <div className=" flex">
                        <div className="w-full px-4">
                            <div className="mx-auto max-w-[400px] text-center">
                                <h2 className="mb-2 text-[50px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]">
                                    404
                                </h2>
                                <h4 className="mb-3 text-lg sm:text-[22px] font-semibold leading-tight text-white">
                                    Oops! That page can’t be found
                                </h4>
                                <p className="mb-8 text-base sm:text-lg text-white">
                                    Maybe you clicked or entered a wrong URL.
                                </p>
                                <Link
                                    to={'/'}
                                    className=" cursor-pointer inline-block no-underline rounded-lg border border-white bg-blue-700 px-8 py-3 text-center text-sm sm:text-base font-semibold text-white  hover:bg-blue-600 "
                                >
                                    Generate a valid URL
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default NotFound