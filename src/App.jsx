import { useState } from 'react'
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import Menu from './Components/Menu'
import { Routes, Route } from 'react-router-dom'
import Cart from './Components/Cart'
import productList from './assets/products.json'
import { v4 as uuidv4 } from 'uuid'
import { useEffect } from 'react'
import Contact from './Components/Contact'

function App() {
    const [cartOpen, setCartOpen] = useState(false)
    const [products, setProducts] = useState([])
    const [chosenProducts, setChosenProducts] = useState([])

    useEffect(() => {
        setProducts(productList)
        setProducts((prevState) => {
            return prevState.map((element) => {
                return { ...element, key: uuidv4(), quantity: 0 }
            })
        })
    }, [])

    useEffect(() => {
        setChosenProducts(() => {
            return products.filter((product) => product.quantity > 0)
        })
    }, [products])

    function handleQuantityChange(id, add = true, clearQuantity = false) {
        setProducts((prevState) => {
            return prevState.map((product) => {
                if (!(product.id === id)) return product //id passed to a function is not the product's id, then return the previous value
                if (clearQuantity) return { ...product, quantity: 0 }
                if (add) {
                    return { ...product, quantity: product.quantity + 1 } //if add = true, then add 1 to product quantity
                } else {
                    if (product.quantity === 0) return product // if product quantity equals 0, you can't subtract
                    return { ...product, quantity: product.quantity - 1 } //if add = false, then subtractk 1 from product quantity
                }
            })
        })
    }

    return (
        <>
            <NavBar onCartOpen={setCartOpen} chosenProducts={chosenProducts} />
            <Cart chosenProducts={chosenProducts} cartState={cartOpen} onCartOpen={setCartOpen} onQuantityChange={handleQuantityChange} />
            <Routes>
                <Route path="/" element={<Home products={products} />} />
                <Route path="/menu" element={<Menu products={products} onQuantityChange={handleQuantityChange} />} />{' '}
                <Route path="/contact" element={<Contact />} />
                <Route path="/*" element={<h1>404.You lost? Get back</h1>} />
            </Routes>
        </>
    )
}

export default App
