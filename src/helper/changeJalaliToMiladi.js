export const changeJalaliToMiladi = (date) => {
  let miladiDate = moment(englishToPersianNum(date, false), 'jYYYY/jMM/jDD')
  let year = miladiDate._i.split('-')[0]
  let month = miladiDate._i.split('-')[1]
  let day = miladiDate._i.split('-')[2]
  let editedDate = `${year}-${month}-${day}`
  return editedDate
}
