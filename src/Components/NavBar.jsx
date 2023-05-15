import ShoppingCart from './ShoppingCart'
import logoImg from '/images/Eggplant.png'
import { NavLink } from 'react-router-dom'

const NavBar = ({ onCartOpen, chosenProducts }) => {
    const menuElements = ['Home', 'Menu', 'Contact']

    const createURLfromMenuItem = (pageName) => {
        if (pageName === 'Home') return '/'
        return `/${pageName}`
    }

    return (
        <header className="grid grid-cols-3 justify-between bg-white bg-opacity-30 backdrop-blur-md py-2 px-4 sticky top-0 z-10 shadow-lg">
            <div className="flex items-center gap-2">
                <img src={logoImg} alt="Logo" className="w-10" />
                <div className="text-lg font-bold">Foodey</div>
            </div>
            <nav className="flex justify-center items-center gap-8">
                {menuElements.map((element) => (
                    <div key={element} className="font-semibold text-lg hover:text-purple-500 transition-all duration-300 hover:text-xl">
                        <NavLink to={`${createURLfromMenuItem(element)}`}>{element}</NavLink>
                    </div>
                ))}
            </nav>
            <div className="flex justify-end">
                <button onClick={() => onCartOpen(true)}>
                    <ShoppingCart chosenProducts={chosenProducts} />
                </button>
            </div>
        </header>
    )
}

export default NavBar
