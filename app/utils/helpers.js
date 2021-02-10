export function difficultyStars (difficulty) {
  let stars = ''

  for (let i = 1; i <= difficulty; i++) {
    stars += '⭐️'
  }

  return stars
}