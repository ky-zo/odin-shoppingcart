import MenuItem from './MenuItem'

const Menu = ({ products, onQuantityChange }) => {
    return (
        <>
            <div className="flex flex-col gap-12 items-center py-12">
                {products.map((product) => {
                    return (
                        <MenuItem
                            key={product.key}
                            id={product.id}
                            image={product.image}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            quantity={product.quantity}
                            onQuantityChange={onQuantityChange}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default Menu
