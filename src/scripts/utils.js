import { allPosts } from "../stores"

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

export const getMonthName = (dateObj) => {
  const monthNumber = dateObj.getMonth()
  return monthNames[monthNumber]
} 

export const getPostCreationYears = (allPosts) => {
  const creationYears = new Set();
  for (const post in allPosts) {
    creationYears.add(allPosts[post].creationYear)
  }
  return Array.from(creationYears)
}