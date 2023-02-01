import React from "react";
import pokebanner from "../material/pokebanner.png";
import { VscSearch } from "react-icons/vsc";

export default function Topbar() {
  return (
    <div className="flex items-center justify-between w-full h-16 bg-gradient-to-r from-yellow-200 to-yellow-500 mx-auto px-5">
      <div>
        <img className="h-11   w-44" src={pokebanner} alt="banner"></img>
      </div>

      <div className="flex justify-around gap-5">
        <form className="flex justify-around bg-white rounded-2xl">
          <input
            className="h-10 rounded-full px-5 text-xl border-none outline-0"
            type="text"
            placeholder="Search a pokemon"
          />
          <VscSearch size={28} className="mx-3 mt-2" />
        </form>
        <p className="text-white font-bold mt-2">A -&gt; Z</p>
      </div>
    </div>
  );
}
