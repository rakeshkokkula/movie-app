import React from "react"

const PrimaryButton = ({ title, ...props }) => {
  return (
    <button
      className="bg-teal-500 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer"
      {...props}
    >
      <span>{title}</span>
    </button>
  )
}

export default PrimaryButton
