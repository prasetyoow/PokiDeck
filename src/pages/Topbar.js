import React from "react";
import pokebanner from "../material/pokebanner.png";
import { VscSearch } from "react-icons/vsc";

export default function Topbar() {
  return (
    <div className="flex items-center justify-between w-full h-16 bg-gradient-to-r from-yellow-200 to-yellow-500 mx-auto px-2">
      <div>
        <img
          className="h-7 w-14 sm:h-10 sm:w-24 md:h-12 md:w-28"
          src={pokebanner}
          alt="banner"
        />
      </div>

      <div className="flex justify-around gap-2">
        <form className="flex justify-around rounded-2xl">
          <input
            className="rounded-xl placeholder:px-2"
            type="text"
            placeholder="Search a pokemon"
          />
        </form>
        <button className="rounded-full w-9 h-9">
          <VscSearch size={24} className="mt-1" />
        </button>
        <p className="text-black font-bold mt-1">A -&gt; Z</p>
      </div>
    </div>
  );
}
