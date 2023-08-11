import './App.css';
import { useState, useEffect } from 'react';
import Converter from './components/Converter';
import Rate from './components/Rate';
import moment from 'moment';

function App() {

  const [amount1, setAmount1] = useState('');             
  const [amount2, setAmount2] = useState('');              
  const [currency1, setCurrency1] = useState('EUR');
  const [currency2, setCurrency2] = useState('EUR');
  const [rates, setRates] = useState({});
  const [date, setDate] = useState('');
    
  let now = moment().format('YYYY-MM-DD');
    
  useEffect(() => {    

    fetch(`https://api.exchangerate.host/latest&v=${now}`)   
      .then(response => response.json())
      .then(response => {
        setRates(response.rates);
        setDate(response.date);        
      })      
      .catch(error => console.log(error));       
        
  }, []);

  function handleResult() {  
    let result = amount1 * rates[currency2] / rates[currency1];    
    setAmount2(result.toFixed(4));
    setAmount1(amount1);     
  }
  
  function handleAmount1(amount1) {   
    if(amount1.match(/^[0-9]*\.?[0-9]*$/)) {      
      setAmount1(amount1);
      setAmount2('');
    } else {
      return    
    }  
  }

  function handleCurrency1(currency1) {
    setCurrency1(currency1);
    setAmount2('');    
  }

  function handleCurrency2(currency2) {
    setCurrency2(currency2);
    setAmount2('');    
  }

  return (    
    <div className="App">      
      <Rate currencies={rates} date={date} />    
      <Converter 
        currencies={Object.keys(rates)} 
        amount1={amount1} amount2={amount2} 
        currency1={currency1} currency2={currency2}       
        changeAmount={handleAmount1}      
        changeCurrency1={handleCurrency1}      
        changeCurrency2={handleCurrency2}
        changeResult={handleResult} />    
    </div>  
  );

}

export default App;
