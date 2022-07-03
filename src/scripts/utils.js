const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

export const getMonthName = (dateObj) => {
  const monthNumber = dateObj.getMonth()
  return monthNames[monthNumber]
} 