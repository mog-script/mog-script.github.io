const emojisMap = ['😍', '😖', '😮', '😯', '😵', '😀', '😬', '😁', '😃', '😄', '😅', '😆', '😇', '😉', '😊', '🙂', '😋', '😌', '😍', '😘', '😗', '🙃', '😛', '🤓', '🤑', '😎', '🤗', '😏', '😶', '😐', '🙄', '🤔', '😴']
const logoSegments = [
  { 1: [10, 11, 12, 15, 19, 22, 23, 24, 25] },
  { 2: [9, 13, 15, 16, 18, 19, 21] },
  { 3: [9, 13, 15, 17, 19, 21] },
  { 4: [9, 13, 15, 19, 21, 24, 25] },
  { 5: [9, 13, 15, 19, 21, 25] },
  { 6: [10, 11, 12, 15, 19, 22, 23, 24, 25] },
  { 8: [9, 13, 16, 17, 18, 22, 23, 24, 25] },
  { 9: [9, 10, 12, 13, 15, 19, 21] },
  { 10: [9, 11, 13, 15, 19, 21] },
  { 11: [9, 13, 15, 19, 21, 24, 25] },
  { 12: [9, 13, 15, 19, 21, 25] },
  { 13: [9, 13, 16, 17, 18, 22, 23, 24, 25] }
]

const flatLogoSegments = logoSegments.reduce((arr, line) => {
  const key = Object.keys(line)[0]
  const calcIndexes = line[key].map((value) => {
    return 33 * key + value
  })
  return arr.concat(calcIndexes)
}, [])

const shuffle = (array) => {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1))
    const temp = newArray[i]
    newArray[i] = newArray[randomIndex]
    newArray[randomIndex] = temp
  }
  return newArray
}

const renderEmojis = (emojisArray, currentCounter) => {
  return emojisArray.map((emoji) => {
    currentCounter++

    // choose random animation delay number of the 4 prefined in css
    const randomDelay = Math.floor(Math.random() * 4) + 1

    return flatLogoSegments.indexOf(currentCounter) !== -1
      ? '<span class="bg-elem logo delay-' + randomDelay + '">' + emoji + '</span>'
      : '<span class="bg-elem delay-' + randomDelay + '">' + emoji + '</span>'
  }).join('')
}

export default function () {
  const content = Array(40).fill().map((_, i) => {
    let emojiCounter = emojisMap.length * i
    return `<div class="bg-row">${renderEmojis(shuffle(emojisMap), emojiCounter)}</div>`
  }).join('')
  return {
    '__html': content
  }
}
