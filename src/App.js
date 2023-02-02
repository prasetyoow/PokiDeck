import React from "react";
import { useEffect, useState } from "react";
import Topbar from "./pages/Topbar";
import PokemonCard from "./pages/PokemonCard";

function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const [loading, setLoading] = useState(true);

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
        setLoading(false);
      });
    }
    createPokemonObject(data.results);
    // await console.log(allPokemons);
  };

  useEffect(() => {
    getAllPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Topbar />
      {loading ? (
        <div className="flex justify-center my-80 text-2xl">
          Loading pokemons...
        </div>
      ) : (
        <>
          <div className="flex items-center justify-center min-h-screen py-12 px-2">
            <div className="flex items-center justify-center">
              <div className="flex flex-wrap justify-center">
                {allPokemons.map((pokemonStats, index) => {
                  return (
                    <>
                      <PokemonCard
                        key={index}
                        id={pokemonStats.id}
                        image={
                          pokemonStats.sprites.other["official-artwork"]
                            .front_default
                        }
                        name={pokemonStats.name}
                        type={pokemonStats.types[0].type.name}
                        weight={pokemonStats.weight}
                        height={pokemonStats.height}
                        statHP={pokemonStats.stats[0].base_stat}
                        statATP={pokemonStats.stats[1].base_stat}
                        statDeff={pokemonStats.stats[2].base_stat}
                      />
                      ;
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-slate-400 rounded-md w-52 h-20 text-xl mb-5 text-white"
              onClick={() => getAllPokemons()}
            >
              Load more
            </button>
          </div>
        </>
      )}
      {/* Pokemon Mapping */}
    </>
  );
}

export default App;
