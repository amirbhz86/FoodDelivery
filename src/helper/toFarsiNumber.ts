const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']

export const toFarsiNumber = (n: any) => {
  return n
    .toString()
    .split('')
    .map((x) => farsiDigits[x])
    .join('')
}
