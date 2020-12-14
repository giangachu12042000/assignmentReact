import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import {
    Link
} from "react-router-dom";

const Cart = ({ handleCoutCart, openCateCart }) => {

    return (
        <div className="my-5 bg-gray-50">
            <h1 className="text-center text-yellow-800 py-5 text-lg" onClick={() => handleCoutCart(1)}>CART</h1>
            {
                openCateCart % 2 === 0 ? <div></div> :
                    <div className="py-5 my-5 border">
                        <div className="flex items-center">
                            <div className="flex-2 px-3">
                                <img src="images/pic04.jpg" alt="" className="object-none h-10 w-full " />
                            </div>
                            <div className="flex-1">
                                <div className="flex">
                                    <h1 className="text-center text-sm py-2 px-3 ">Skiper</h1>
                                    <h1 className="text-center text-sm py-2 px-3">88$</h1>
                                </div>
                            </div>
                            <div className="px-1">
                                <svg className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150 hover:text-red-500" width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>
                    </div>
            }

        </div>
    )
}

export default Cart;