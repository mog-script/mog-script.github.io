import React from 'react'
import { keywordsMap } from 'mog-script'

export default function () {
  const splittedMap = Object.keys(keywordsMap).reduce((res, keyword) => {
    const currentElement = { keyword, emoji: keywordsMap[keyword] }
    const index = res.length - 1

    res[index].length === 8
      ? res.push([currentElement])
      : res[index].push(currentElement)
    return res
  }, [[]])

  return (
    <table className='emojis-map'>
      <tbody>
        {splittedMap.map((row, index) => {
          return (<tr key={`tr-${index}`}>{renderCells(row)}</tr>)
        })}
      </tbody>
    </table>
  )
}

function renderCells (elements) {
  return elements.map((value, index) => {
    return (<td key={`td-${index}`}>
      <div className='keyword'>{value.keyword}</div>
      <div>{value.emoji}</div>
    </td>)
  })
}
