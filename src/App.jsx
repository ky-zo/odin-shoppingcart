import { useState } from 'react'
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import Menu from './Components/Menu'
import { Routes, Route } from 'react-router-dom'
import Cart from './Components/Cart'
import productList from './assets/products.json'
import { v4 as uuidv4 } from 'uuid'
import { useEffect } from 'react'

function App() {
    const [cartOpen, setCartOpen] = useState(false)
    const [chosenProducts, setChosenProducts] = useState([])

    const [products, setProducts] = useState(productList)

    useEffect(() => {
        setProducts((prevState) => {
            return prevState.map((element) => {
                return { ...element, id: uuidv4() }
            })
        })
    }, [])

    return (
        <>
            <NavBar onCartOpen={setCartOpen} />
            <Cart cartState={cartOpen} onCartOpen={setCartOpen} />
            <Routes>
                <Route path="/" element={<Home products={products} />} />
                <Route path="/menu" element={<Menu products={products} setChosenProducts={setChosenProducts} />} />
                <Route path="/contact" element={<h1>Contact</h1>} />
                <Route path="/*" element={<h1>404.You lost? Get back</h1>} />
            </Routes>
        </>
    )
}

export default App
