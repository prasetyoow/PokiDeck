import React from "react";
import pokeball from "../material/pokeball-black.png";

export default function PokemonCard({
  id,
  image,
  name,
  type,
  weight,
  height,
  statHP,
  statATP,
  statDeff,
}) {
  // const colors = {
  //   rock: "rgb(148, 81, 81)",
  //   ghost: "rgb(247, 247, 247)",
  //   electric: "rgb(255, 255, 161)",
  //   bug: "#F6D6A7",
  //   poison: "#E0A7F6",
  //   fairy: "rgba(255, 192, 203, 0.863)",
  //   fire: "#FBE3DF",
  //   grass: "#E2F9E1",
  //   water: "#E0F1FD",
  //   normal: "#A8A77A",
  //   ice: "#96D9D6",
  //   ground: "#E2BF65",
  //   psychic: "#F95587",
  //   dragon: "#6F35FC",
  //   dark: "#705746",
  //   steel: "#B7B7CE",
  // };
  // console.log(type);

  const style =
    type +
    " flex w-72 sm:w-76 lg:w-80 xl:w-3/12 flex-col items-center justify-center m-2 border-2 shadow-xl rounded-xl";

  return (
    <>
      <div className={style}>
        <div className="w-full h-11 bg-gradient-to-r from-yellow-200 to-yellow-500 flex justify-between px-2 rounded-t-xl">
          <div className="flex gap-3">
            <img className="w-19 h-9 mt-1" src={image} alt={name} />
            <p className="font-bold text-lg mt-2">No. {id}</p>
          </div>
          <p className="first-letter:capitalize font-bold text-lg mt-2">
            {name}
          </p>
          <img className="w-14 h-7 mt-2" src={pokeball} alt="pokeball" />
        </div>
        <img className="image-title" src={image} alt={name} />

        {/* Main Stats */}
        <div className="flex mx-10 border-b-2">
          <div className="bg-gray-400 w-32 2xl:w-40">
            <p className="text-center text-xl text-white">Type</p>
          </div>
          <div className="bg-white w-28 2xl:w-40">
            <p className="first-letter:capitalize text-center text-xl">
              {type}
            </p>
          </div>
        </div>
        <div className="flex mx-10 border-b-2">
          <div className="bg-gray-400 w-32 2xl:w-40">
            <p className="text-center text-xl text-white">Height</p>
          </div>
          <div className="bg-white w-28 2xl:w-40">
            <p className="first-letter:capitalize text-center text-xl">
              {height} Cm
            </p>
          </div>
        </div>
        <div className="flex mx-10 border-b-2">
          <div className="bg-gray-400 w-32 2xl:w-40">
            <p className="text-center text-xl text-white">Weight</p>
          </div>
          <div className="bg-white w-28 2xl:w-40">
            <p className="first-letter:capitalize text-center text-xl">
              {weight} Lbs
            </p>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-5 mb-3 w-60 2xl:w-80">
          <div className="bg-slate-500 h-8 border-b-2">
            <div className="flex justify-between mx-10">
              <p className="text-center text-xl text-white">HP</p>
              <p className="text-center text-xl text-red-50">{statHP}</p>
            </div>
          </div>
          <div className="bg-slate-500 h-8 border-b-2">
            <div className="flex justify-between mx-10">
              <p className="text-center text-xl text-white">Attack</p>
              <p className="text-center text-xl text-red-50">{statATP}</p>
            </div>
          </div>
          <div className="bg-slate-500 h-8 border-b-2">
            <div className="flex justify-between mx-10">
              <p className="text-center text-xl text-white">Defense</p>
              <p className="text-center text-xl text-red-50">{statDeff}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
