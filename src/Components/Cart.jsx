import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useEffect } from 'react'

export default function Cart({ chosenProducts, cartState, onCartOpen, onQuantityChange }) {
    const [subTotal, setSubTotal] = useState(0)

    useEffect(() => {
        let helperSum = 0
        if (!chosenProducts) return
        chosenProducts.forEach((element) => {
            helperSum += element.quantity * element.price
        })
        setSubTotal(helperSum)
    }, [chosenProducts])

    return (
        <>
            <Transition.Root show={cartState} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={onCartOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-100 sm:duration-200"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-100 sm:duration-200"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                                <div className="flex items-start justify-between">
                                                    <Dialog.Title className="text-lg font-bold text-gray-900">Order Goodies</Dialog.Title>
                                                    <div className="ml-3 flex h-7 items-center">
                                                        <button
                                                            type="button"
                                                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                                            onClick={() => onCartOpen(false)}
                                                        >
                                                            <span className="sr-only">Close panel</span>
                                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="mt-8">
                                                    <div className="flow-root">
                                                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                            {chosenProducts.map((product) => (
                                                                <li key={product.id} className="flex py-6">
                                                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                        <img
                                                                            src={`/images/${product.image}`}
                                                                            className="h-full w-full object-cover object-center"
                                                                        />
                                                                    </div>

                                                                    <div className="ml-4 flex flex-1 flex-col">
                                                                        <div>
                                                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                                                <h3>
                                                                                    <a href={product.href}>{product.name}</a>
                                                                                </h3>
                                                                                <p className="ml-4">{product.price}€</p>
                                                                            </div>
                                                                            <p className="mt-1 text-xs text-gray-500">
                                                                                {product.description}
                                                                            </p>
                                                                        </div>
                                                                        <div className="flex flex-1 items-end justify-between text-sm">
                                                                            <div className="text-gray-500 flex justify-between gap-1">
                                                                                <div>
                                                                                    Total: {(product.quantity * product.price).toFixed(2)}€
                                                                                    for{' '}
                                                                                </div>
                                                                                <div className="flex gap-1">
                                                                                    <div>{product.quantity}</div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="flex gap-3">
                                                                                <button
                                                                                    onClick={() =>
                                                                                        onQuantityChange(product.id, false, false)
                                                                                    }
                                                                                    className="font-medium text-purple-600 rounded-md border border-purple-500 pl-2 pr-2 hover:text-purple-800"
                                                                                >
                                                                                    -
                                                                                </button>
                                                                                <button
                                                                                    onClick={() =>
                                                                                        onQuantityChange(product.id, true, false)
                                                                                    }
                                                                                    className="font-medium text-purple-600 rounded-md border border-purple-500 pl-2 pr-2 hover:text-purple-800"
                                                                                >
                                                                                    +
                                                                                </button>
                                                                                <button
                                                                                    onClick={() =>
                                                                                        onQuantityChange(product.id, false, true)
                                                                                    }
                                                                                    className="font-medium text-purple-600 hover:text-purple-800"
                                                                                >
                                                                                    Delete
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                    <p>Subtotal</p>
                                                    <p>{subTotal.toFixed(2)}€</p>
                                                </div>
                                                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                                <div className="mt-6">
                                                    <a
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        href="https://donate.stripe.com/14k8yT4d03gx9zO000"
                                                        className="flex items-center justify-center rounded-md border border-transparent bg-purple-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-purple-800"
                                                    >
                                                        Checkout
                                                    </a>
                                                </div>
                                                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                    <p>
                                                        {`or `}
                                                        <button
                                                            type="button"
                                                            className="font-medium text-purple-500 hover:text-purple-800"
                                                            onClick={() => onCartOpen(false)}
                                                        >
                                                            Continue Shopping
                                                            <span aria-hidden="true"> &rarr;</span>
                                                        </button>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}
