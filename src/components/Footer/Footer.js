import React from "react"

const Footer = () => {
  return (
    <footer className="p-4 bg-white shadow md:px-6 md:py-8 bg-slate-900">
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          MovieSearch
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  )
}

export default Footer
