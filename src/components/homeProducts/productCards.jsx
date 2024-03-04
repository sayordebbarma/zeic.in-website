import React from 'react'
import homebg from '../../assets/images/products/homebg.png'
import { Link } from 'react-router-dom'

const productCards = () => {
  return (
    <div className="flex flex-row justify-evenly">
    <Link to="products">
        <div class="max-w-64 rounded-lg shadow bg-gray-800 border-gray-700">
            <img class="rounded-t-lg" src={homebg} alt="" />
        <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Zip speaker</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Link href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
        </div>
    </div>
    </Link>
    <Link to="products">
        <div class="max-w-64 rounded-lg shadow bg-gray-800 border-gray-700">
            <img class="rounded-t-lg h-52" src={homebg} alt="" />
        <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Zip speaker</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </div>
    </Link>
    <Link to="products">
      <div className="max-w-64 rounded-lg shadow bg-gray-800 border-gray-700 overflow-hidden hover:bg-gray-900 transform transition duration-300 ease-in-out hover:scale-105">
        <img className="rounded-t-lg h-52" src={homebg} alt="" />
        <div className="p-5 rounded-t-2xl">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Zip speaker</h5>
          <p className="mb-3 font-normal text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </Link>
    <Link to="products">
      <div className="max-w-64 rounded-lg shadow bg-gray-800 border-gray-700 overflow-hidden hover:bg-gray-900 transform transition duration-300 ease-in-out hover:scale-105">
        <img className="rounded-t-lg h-52" src={homebg} alt="" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Zip speaker</h5>
          <p className="mb-3 font-normal text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </Link>
    </div>
  )
}

export default productCards