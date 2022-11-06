import React, { useState } from "react"
import Link from "next/link"
import ShareModal from "../../components/Modals/ShareModal"
import PrimaryButton from "../../components/Buttons/PrimaryButton"
import SecondaryButton from "../../components/Buttons/SecondaryButton"

const MovieDetailButtons = ({ movie }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  return (
    <>
      <Link href={`${movie.id}/watch`}>
        <PrimaryButton title="Watch Trailer" />
      </Link>
      <SecondaryButton title="Share" onClick={handleOpen} />
      {open && <ShareModal showModal={open} setShowModal={setOpen} />}
    </>
  )
}

export default MovieDetailButtons
