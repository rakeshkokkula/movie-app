import React from "react"
import Link from "next/link"

const Logo = () => {
  return (
    <>
      <Link href="/">
        <span className="text-base md:text-2xl text-white">
          Movie<span className="text-teal-500">Search</span>
        </span>
      </Link>
    </>
  )
}

export default Logo
