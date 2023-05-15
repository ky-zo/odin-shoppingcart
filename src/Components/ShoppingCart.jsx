import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useEffect } from 'react'
import { useState } from 'react'

const ShoppingCart = ({ chosenProducts }) => {
    const [badgeVisibilityState, setBadgeVisibilityState] = useState('hidden')
    const [totalNumberOfProducts, setTotalNumebrOfProducts] = useState(0)

    useEffect(() => {
        let helperCounter = 0
        if (!chosenProducts) return
        chosenProducts.forEach((element) => {
            helperCounter += element.quantity
        })
        setTotalNumebrOfProducts(helperCounter)
        console.log(totalNumberOfProducts)
    }, [chosenProducts])

    useEffect(() => {
        if (!(totalNumberOfProducts === 0)) return setBadgeVisibilityState('absolute')
        setBadgeVisibilityState('hidden')
    }, [totalNumberOfProducts])

    return (
        <div className="relative">
            <ShoppingCartIcon className="w-8 sm:w-10 p-1" />
            <div
                className={` ${badgeVisibilityState} bottom-0 right-0 transform translate-x-1/8 translate-y-1/8 bg-red-500 rounded-full text-white text-xs w-4 h-4 flex items-center justify-center`}
            >
                {totalNumberOfProducts}
            </div>
        </div>
    )
}

export default ShoppingCart
