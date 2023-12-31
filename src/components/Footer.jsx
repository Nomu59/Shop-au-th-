import React from 'react'

const Footer = () => {
  return (
    <div className=''>
      <footer className="border-t-2 rounded-md border-t-white shadow bg-black bord sticky bottom-0 right-0 left-0">
        <div className="mx-auto max-w-screen-2x1 p-6 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">Money Dinasty™</a>.</span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">A propos</a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Politique</a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">License</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}



export default Footer