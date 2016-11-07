const emojisMap = ['😞', '😟', '😠', '😔', '😕', '🙁', '🙁', '😕', '😣', '😍', '😖', '😫', '😩', '😮', '😯', '😵', '😀', '😬', '😁', '😂', '😃', '😄', '😅', '😆', '😇', '😉', '😊', '🙂', '😋', '😌', '😍', '😘', '😗', '😙', '😚', '😜', '🙃', '😝', '😛', '🤓', '🤑', '😎', '🤗', '😏', '😶', '😐', '😑', '😒', '🙄', '🤔', '😳', '😴', '😒', '🙄', '🤔', '😳', '😘', '😗']
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

export default function () {
  let emojiCounter = 0
  const content = Array(50).fill().map((_, i) => {
    return emojisMap.map((emoji) => {
      emojiCounter++
      return flatLogoSegments.indexOf(emojiCounter) !== -1
        ? '<span class="logo-segment">' + emoji + '</span>'
        : '<span class="bg-segment">' + emoji + '</span>'
    }).join('')
  }).join('')
  return {
    '__html': content
  }
}
