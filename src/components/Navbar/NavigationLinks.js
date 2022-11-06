import React from "react"
import Link from "next/link"

const NavigationLinks = () => {
  return (
    <>
      <Link href="/">
        <span className="text-white mx-2">Home</span>
      </Link>
      <Link href="/about-us">
        <span className="text-white mx-2">About Us</span>
      </Link>
    </>
  )
}

export default NavigationLinks
