import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import {format} from 'date-fns'

function Search() {
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuests } = router.query;

  const formattedStartDate =  format(new Date(startDate), "dd MMMM yy")
  const formattedEndDate =  format(new Date(endDate), "dd MMMM yy")
    const range = `${formattedStartDate} - ${formattedEndDate}`

  return (
    <div className="h-screen">
      <Header placeholder={`${location} | ${range} | ${numberOfGuests} guests`}/>

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">300+ Stays | {range} |  for {numberOfGuests} guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
          <div className="hidden sm:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <button className="button">Cancellation flexability</button>
            <button className="button">Type of Place</button>
            <button className="button">Price</button>
            <button className="button">Rooms and Beds</button>
            <button className="button">More Filters</button>
          </div>
        </section>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default Search;
