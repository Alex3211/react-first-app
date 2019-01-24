export function Recovery() {
  return new Promise(function (resolve, reject) {
      Promise.all([
          fetch("/Data/pokemon.json").then(response => response.json()),
          fetch("/Data/stats.json").then(response => response.json()),
          fetch("/Data/types.json").then(response => response.json()),
          fetch("/Data/pokemon_stats.json").then(response => response.json()),
          fetch("/Data/pokemon_types.json").then(response => response.json()),
          ]).then(function (response) {
          const [
              pokemon,
              stats,
              types,
              pokemon_stats,
              pokemon_types
          ] = response;
          resolve({
              pokemon : pokemon,
              stats : stats,
              types : types,
              pokemon_stats : pokemon_stats,
              pokemon_types : pokemon_types
          });
      })
      .catch(reject);
  })
}