import { Link } from 'react-router-dom'
import Floaters from './Floaters'

function Home({ products }) {
    return (
        <>
            <div className="flex flex-col align-middle">
                <div className="flex flex-col items-center justify-center gap-12 sm:gap-24">
                    <h1 className="text-4xl sm:text-6xl font-black p-10 sm:p-0 sm:pt-24 drop-shadow-white">
                        Best fucking food.
                        <br /> Nothing else matters.
                    </h1>

                    <Link
                        to="/menu"
                        className="px-5 py-3 bg-purple-500 text-white font-semibold rounded-md shadow-md transition duration-300 ease-in-out hover:bg-white hover:text-purple-500 hover:border-purple-500 border-2 border-transparent focus:outline-none"
                    >
                        Order the goodies
                    </Link>
                    <div className="grid grid-cols-1 items-center justify-items-center sm:flex sm:items-center sm:justify-center">
                        <img src="https://ky-zo.github.io/odin-food/984a48ca8a9a133f68cc.png" className="w-24 h-auto" />
                        <div className="w-9/12 sm:w-2/5 max-2 flex flex-col gap-5 justify-between">
                            <h2 className="font-bold text-lg sm:text-2xl drop-shadow-white">Rodrygo Aborgeles</h2>
                            <div className=" text-xs sm:text-base drop-shadow-white">
                                Rodrygo Joaquin Aborgeles Jr. is a Polish television personality, celebrity chef, restaurateur and painter.
                                Gessler is known for presenting TV programme Kuchenne rewolucje and judging in Polish version of MasterChef.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Floaters products={products} />
        </>
    )
}

export default Home
