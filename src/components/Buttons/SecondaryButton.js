import React from "react"

const SecondaryButton = ({ title, ...props }) => {
  return (
    <button
      className="bg-gray-300 py-3 px-5 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mx-2"
      {...props}
    >
      <span>{title}</span>
    </button>
  )
}

export default SecondaryButton
