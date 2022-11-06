import Link from "next/link"
import React from "react"

const Footer = () => {
  return (
    <footer className="p-2 bg-white shadow md:px-4 md:py-4 bg-slate-900 mt-auto">
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <Link href="/" className="hover:underline">
          MovieSearch
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  )
}

export default Footer
