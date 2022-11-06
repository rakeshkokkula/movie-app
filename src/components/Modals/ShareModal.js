import React, { useState } from "react"
import Toast from "../Toast/Toast"

const ShareModal = ({ showModal, setShowModal }) => {
  const [openToast, setOpenToast] = useState(false)
  const handleClick = () => {
    setOpenToast(true)
    navigator.clipboard.writeText(window.location.toString())
  }
  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative max-w-lg p-5 mx-auto bg-white rounded-md shadow-lg">
                <div className="mt-3 sm:flex">
                  <div className="text-left">
                    <div className="flex items-start justify-between border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-2xl font-semibold">Share</h3>
                      <button
                        className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="text-black text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>

                    <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                      The below is your sharing link
                    </p>
                    <button
                      className="flex flex-row items-center"
                      onClick={handleClick}
                    >
                      <span className="text-[15px] leading-relaxed text-gray-500">
                        {window.location.toString()}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        class="w-5 h-5 m-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                        />
                      </svg>
                    </button>
                    {openToast && <Toast />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}

export default ShareModal
