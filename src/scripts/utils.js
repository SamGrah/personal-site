const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

export const getMonthName = (dateObj) => {
  const monthNumber = dateObj.getMonth()
  return monthNames[monthNumber]
} 

export const getPostCreationYears = (postsToDisplay) => {
  const creationYears = new Set();
  for (const post in postsToDisplay) {
    creationYears.add(postsToDisplay[post].creationYear)
  }
  return Array.from(creationYears)
}