const MenuItem = ({ id, image, name, description, price, quantity, onProductChange }) => {
    // function addFirstProduct() {
    //     onProductChange((prevState) => {
    //         prevState.filter((product) => {
    //             if (!(product.id === id)) return { ...prevState }
    //             return { ...prevState, quantity: 1 }
    //         })
    //     })
    // }

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
                    <div className="">{price}</div>
                    <div>
                        <button className="rounded-md border border-purple-500 px-4 py-1 text-base font-medium text-purple-500 shadow-sm hover:bg-purple-500 hover:text-white transition-all">
                            Add
                        </button>
                    </div>
                    <div className="flex gap-2 items-center">
                        <button className="rounded-md border border-purple-500 px-2 text-base font-medium text-purple-500 shadow-sm hover:bg-purple-500 hover:text-white transition-all">
                            -
                        </button>
                        <div>{quantity}</div>
                        <button className="rounded-md border border-purple-500 px-2 text-base font-medium text-purple-500 shadow-sm hover:bg-purple-500 hover:text-white transition-all">
                            +
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuItem
