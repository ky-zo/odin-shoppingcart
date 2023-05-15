import { useEffect, useRef, useState } from 'react'

function Floaters({ products }) {
    const [foods, setFoods] = useState([])

    const image1 = useRef()
    const image2 = useRef()
    const image3 = useRef()
    const image4 = useRef()
    const image5 = useRef()

    useEffect(() => {
        function loadImages() {
            setFoods(products.map((product) => `/images/${product.image}`))
        }
        loadImages()
    }, [products])

    function getRandomFood() {
        const randomIndex = Math.floor(Math.random() * foods.length)
        return foods[randomIndex]
    }

    function getRandomPosition() {
        const windowWidth = window.innerWidth
        const windowHeight = window.innerHeight

        const x = Math.floor(windowWidth * 0.01 + Math.random() * windowWidth * 0.99)
        const y = Math.floor(windowHeight * 0.01 + Math.random() * windowHeight * 0.5)

        return { x, y }
    }

    function moveImagesOnMouseMove(event) {
        const x = event.clientX
        const y = event.clientY

        image1.current.style.transform = `translate(${x * 0.01}px, ${y * 0.01}px)`
        image2.current.style.transform = `translate(${x * 0.02}px, ${y * 0.02}px)`
        image3.current.style.transform = `translate(${x * 0.03}px, ${y * 0.03}px)`
        image4.current.style.transform = `translate(${x * 0.04}px, ${y * 0.04}px)`
        image5.current.style.transform = `translate(${x * 0.05}px, ${y * 0.06}px)`
    }

    useEffect(() => {
        const positions = [image1, image2, image3, image4, image5].map(() => getRandomPosition())

        positions.forEach((pos, index) => {
            const img = document.querySelectorAll('.food-image')[index]
            img.style.left = `${pos.x}px`
            img.style.top = `${pos.y}px`
        })

        document.addEventListener('mousemove', moveImagesOnMouseMove)

        return () => {
            document.removeEventListener('mousemove', moveImagesOnMouseMove)
        }
    }, [])

    return (
        <>
            <img ref={image1} src={getRandomFood()} className="food-image fixed max-w-[100px] -z-50 opacity-50" alt="food" />
            <img ref={image2} src={getRandomFood()} className="food-image fixed max-w-[100px] -z-50  opacity-50" alt="food" />
            <img ref={image3} src={getRandomFood()} className="food-image fixed max-w-[100px] -z-50 opacity-50" alt="food" />
            <img ref={image4} src={getRandomFood()} className="food-image fixed max-w-[100px] -z-50 opacity-50" alt="food" />
            <img ref={image5} src={getRandomFood()} className="food-image fixed max-w-[100px] -z-50 opacity-50" alt="food" />
        </>
    )
}

export default Floaters
