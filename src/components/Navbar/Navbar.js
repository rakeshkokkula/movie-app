import React from "react"
import Logo from "./Logo"
import NavigationLinks from "./NavigationLinks"

const Navbar = () => {
  return (
    <nav className="bg-slate-900 flex flex-row justify-between">
      <div className="font-bold text-neutral-100 p-4 max-w-6xl tracking-widest">
        <Logo />
      </div>
      <div className="p-3 self-center">
        <NavigationLinks />
      </div>
    </nav>
  )
}

export default Navbar
