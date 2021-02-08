const api = 'https://overwatch-api.tekrop.fr/'

export function fetchAllHeroes () {
  return fetch(`${api}/heroes`)
    .then((res) => res.json())
}