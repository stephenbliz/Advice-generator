import { useEffect, useState } from "react";
import PatternDd from './assets/images/pattern-divider-desktop.svg';
import DiceIcon from './assets/images/icon-dice.svg';

type quoteType ={
  slip:{
    advice: string
    id: number
  }
}

const adviceUrl = 'https://api.adviceslip.com/advice';

function App() {
  const [quote, setQuote] = useState<quoteType | null>(null);

  const fetchAdvice = async ()=>{
    const res = await fetch(adviceUrl);
    if(!res.ok){
      throw new Error('Failed to fetch advice')
    }else{
      const data = await res.json();
      setQuote(data);
    }
  }

  useEffect(()=>{
    fetchAdvice();
  }, [])

  return (
      <section className="section1">
        <div className="wrapper">
          <h1>Advice  #{quote?.slip.id}</h1>
          <p>"{quote?.slip.advice}"</p>
          <div className="img"><img src={PatternDd} alt="patter divider" /></div>
          <div className="icon" onClick={()=>fetchAdvice()}>
            <img src={DiceIcon} alt="dice icon" />
          </div>
        </div>
      </section>
  )
}

export default App
