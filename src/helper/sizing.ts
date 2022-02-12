import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

const guidelineBaseWidth = 402
const guidelineBaseHeight = 863

const scale = (size) => (width / guidelineBaseWidth) * size

// vertical scale
const vs = (size) => (height / guidelineBaseHeight) * size

const vsf = (size, factor = 0.1) => size + (vs(size) - size) * factor

// moderate scale
const ms = (size, factor = 0.1) => size + (scale(size) - size) * factor

export { scale, vs, ms, vsf }
