export const englishToPersianNum = (input: string, reverse = true) => {
  const persianNumbersRegex = [
    /۰/g,
    /۱/g,
    /۲/g,
    /۳/g,
    /۴/g,
    /۵/g,
    /۶/g,
    /۷/g,
    /۸/g,
    /۹/g,
  ]
  const englishNumbersRegex = [
    /0/g,
    /1/g,
    /2/g,
    /3/g,
    /4/g,
    /5/g,
    /6/g,
    /7/g,
    /8/g,
    /9/g,
  ]

  const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
  const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

  const fixNumbers = (str: string) => {
    if (typeof str === 'string') {
      for (var i = 0; i < 10; i++) {
        reverse
          ? (str = str.replace(englishNumbersRegex[i], persianNumbers[i]))
          : (str = str.replace(persianNumbersRegex[i], englishNumbers[i]))
      }
    }
    return str
  }
  return fixNumbers(input)
}
