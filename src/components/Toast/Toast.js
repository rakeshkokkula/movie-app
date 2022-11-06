import React from "react"

const Toast = () => {
  return (
    <div
      class="bg-teal-100 border-t-4 rounded-b text-teal-900 px-4 py-3 shadow-md"
      role="alert"
    >
      <div class="flex">
        <div>
          <p class="font-bold">Copied !!</p>
          <p class="text-sm">Your sharing link is copied to your clipboard.</p>
        </div>
      </div>
    </div>
  )
}

export default Toast
