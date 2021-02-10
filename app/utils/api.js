const api = 'https://overwatch-api.tekrop.fr/'

function sortByRoles (heroes, role) {
  return heroes.filter((hero) => hero.role === role)
}

export function fetchHeroes (role) {
  return fetch(`${api}/heroes`)
    .then((res) => res.json())
    .then((heroes) => {
      if (!role) {
        return heroes
      }

      return sortByRoles(heroes, role) 
    })
}

export function fetchHero(id) {
  return fetch(`${api}/hero/${id}`)
    .then((res) => res.json())
    .then((res) => {
      if (res.message) {
        throw new Error('Error fetching hero')
      }
      return res
    })
}