import React from "react";
import pokebanner from "../material/pokebanner.png";
import { VscSearch } from "react-icons/vsc";

export default function Topbar() {
  return (
    <div className="flex items-center justify-between w-full h-16 bg-gradient-to-r from-yellow-200 to-yellow-500 mx-auto px-2">
      <div>
        <img
          className="h-7 w-38 lg:h-9 lg:w-44"
          src={pokebanner}
          alt="banner"
        />
      </div>

      <div className="flex justify-around gap-3">
        <form className="flex justify-around bg-white rounded-2xl">
          <input
            className="sm:h-2 md:h-10 rounded-full px-5 text-xl border-none outline-0"
            type="text"
            placeholder="Search a pokemon"
          />
        </form>
        <button className="rounded-full w-9 h-9">
          <VscSearch size={28} className="mt-1" />
        </button>
        <p className="text-white font-bold mt-1">A -&gt; Z</p>
      </div>
    </div>
  );
}
