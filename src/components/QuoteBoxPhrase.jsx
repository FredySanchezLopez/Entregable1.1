import React from 'react'


const QuoteBoxPhrase = ({quoteRandom, colorsRandom}) => {
    const setColor = {
        color: colorsRandom
    }
  return (
    <div className='boxphrase' style={setColor}>
        <article>
            <h1 className='h1__boxphrase'>“</h1>
            <p className='p__boxphrase'>{quoteRandom.quote}</p>
            <h2 className='h2__boxphrase'>{quoteRandom.author}</h2>
        </article>  
    </div>
  )
}

export default QuoteBoxPhrase