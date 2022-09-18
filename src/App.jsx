import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quote from './json/quote.json'
import colors from './Utils/colors'



function App() {
  const getIndexRandom = array => Math.floor(Math.random() * array.length)
  const firstQuotes = quote[getIndexRandom(quote)]
  const firstcolors = colors[getIndexRandom(colors)]
  const [quoteRandom, setQuoteRandom] = useState(firstQuotes)
  const [colorsRandom, setColorsRandom] = useState(firstcolors)

  const getEverything = () => {
    setQuoteRandom(quote[getIndexRandom(quote)])
    setColorsRandom(colors[getIndexRandom(colors)])
  }

  const setcolorbg = {
    background: colorsRandom
  }

  return (
    <div className="App" style={setcolorbg}>
      <QuoteBox
        getEverything = {getEverything} 
        quoteRandom = {quoteRandom}
        colorsRandom = {colorsRandom}
      
      
      />
    </div>
  )
}

export default App
