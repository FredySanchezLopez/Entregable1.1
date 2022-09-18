import React from 'react'
import QuoteBoxPhrase from './QuoteBoxPhrase'

const QuoteBox = ({quoteRandom, getEverything, colorsRandom}) => {
    const btnbackground = {
        background: colorsRandom
    }
  return (
    <div className='maincard'>
        <QuoteBoxPhrase 
            quoteRandom = {quoteRandom}
            colorsRandom = {colorsRandom}
        />
        <button onClick={getEverything} style={btnbackground}>&gt;</button>
    </div>
  )
}

export default QuoteBox