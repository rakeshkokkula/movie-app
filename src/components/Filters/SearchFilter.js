import React from "react"
import {
  updateSearch,
  updateRating,
  updateCategory,
  updateYear,
  clearFilter,
} from "../../store/reducers"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { categories, ratings, years } from "../../constants"
import Select from "../Select/Select"
import PrimaryButton from "../Buttons/PrimaryButton"
import SecondaryButton from "../Buttons/SecondaryButton"
import Input from "../Input/Input"
import { isClearAvailable } from "../../services/searchFilter"

const SearchFilter = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state)
  const [search, setSearch] = useState(data?.search_text || "")

  const handleCategory = (e) => {
    dispatch(updateCategory(e.target.value))
  }

  const handleRating = (e) => {
    dispatch(updateRating(e.target.value))
  }

  const handleYear = (e) => {
    dispatch(updateYear(e.target.value))
  }

  const handleSearch = () => {
    dispatch(updateSearch(search))
  }
  const handleSearchType = (e) => setSearch(e.target.value)

  const handleClearFilter = (e) => {
    setSearch("")
    dispatch(clearFilter())
  }

  const isClear = isClearAvailable(data)

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-6 md:space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500 my-6">
      <div className="flex bg-gray-100 p-4 space-x-4 rounded-lg col-span-2">
        <Input value={search} onChange={handleSearchType} />
      </div>
      <div className="grid py-2">
        <PrimaryButton title="Search" onClick={handleSearch} />
      </div>
      {/* <div className="flex py-3 px-4 rounded-lg text-gray-500 font-semibold col-span-1 "> */}
      <div className="col-span-1 mx-2">
        <Select
          data={categories}
          value={data?.category}
          handleChange={handleCategory}
          placeholder={"All Categories"}
        />
      </div>
      <div className="col-span-1">
        <Select
          data={ratings}
          value={data?.rating}
          handleChange={handleRating}
          placeholder={"Rating"}
        />
      </div>
      <div className="col-span-1 mx-2">
        <Select
          data={years}
          value={data?.year}
          handleChange={handleYear}
          placeholder={"Year"}
        />
      </div>
      {isClear && (
        <SecondaryButton title={"Clear Filters"} onClick={handleClearFilter} />
      )}
      {/* </div> */}
    </div>
  )
}

export default SearchFilter
