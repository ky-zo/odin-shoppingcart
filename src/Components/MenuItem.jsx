import { useEffect, useState } from 'react'

const AddButton = ({ id, onQuantityChange }) => {
    return (
        <div>
            <button
                className="rounded-md border border-purple-500 px-6 text-base font-medium text-purple-500 shadow-sm hover:bg-purple-500 hover:text-white transition-all"
                onClick={() => onQuantityChange(id, true)}
            >
                Add
            </button>
        </div>
    )
}

const PlusMinusButton = ({ id, quantity, onQuantityChange }) => {
    return (
        <div className="flex gap-2 items-center">
            <button
                className="rounded-md border border-purple-500 px-2 text-base font-medium text-purple-500 shadow-sm hover:bg-purple-500 hover:text-white transition-all"
                onClick={() => onQuantityChange(id, false)}
            >
                -
            </button>
            <div className="w-4 text-center">{quantity}</div>
            <button
                className="rounded-md border border-purple-500 px-2 text-base font-medium text-purple-500 shadow-sm hover:bg-purple-500 hover:text-white transition-all"
                onClick={() => onQuantityChange(id, true)}
            >
                +
            </button>
        </div>
    )
}

const MenuItem = ({ id, image, name, description, price, quantity, onQuantityChange }) => {
    const [itemsButton, setItemsButton] = useState(<AddButton id={id} onQuantityChange={onQuantityChange} />)

    useEffect(() => {
        if (quantity === 0) return setItemsButton(<AddButton id={id} onQuantityChange={onQuantityChange} />)
        setItemsButton(<PlusMinusButton id={id} quantity={quantity} onQuantityChange={onQuantityChange} />)
    }, [quantity])

    return (
        <>
            <div className="grid grid-cols-[25%_1fr_20%] w-6/12 min-w-[300px] border-0 border-purple-500 gap-2 sm:gap-5 p-2 hover:shadow-md rounded-lg transition-all">
                <div className="flex justify-center">
                    <img src={`/images/${image}`} className="object-contain w-[80%]"></img>
                </div>
                <div className="flex flex-col justify-center gap-1">
                    <h3 className="font-black text-base sm:text-lg">{name}</h3>
                    <p className="menuItem-descP font-light text-xs sm:text-sm">{description}</p>
                </div>
                <div className="flex flex-col justify-center gap-1">
                    <div className="">{price}€</div>
                    {itemsButton}
                </div>
            </div>
        </>
    )
}

export default MenuItem
