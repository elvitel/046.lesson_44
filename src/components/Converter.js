function Converter(props) {
  
    return (
        <div>
            <h2>Currency Converter</h2>
            <div className="converter">
                <div className="converter-unit">
                    <select className="converter-select" value={props.currency1} onChange={event => props.changeCurrency1(event.target.value)}>
                        {props.currencies.map((currency => (
                            <option key={currency} value={currency}>{currency}</option>
                        )))}
                    </select>
                    <input className="converter-input" type='text' value={props.amount1} onChange={event => props.changeAmount(event.target.value)} placeholder="Enter a number"></input>
                </div>
                <div className="converter-unit">
                    <select className="converter-select" value={props.currency2} onChange={event => props.changeCurrency2(event.target.value)}>
                        {props.currencies.map((currency => (
                            <option key={currency} value={currency}>{currency}</option>
                        )))}
                    </select>
                    <input className="converter-input" type='text' value={props.amount2} disabled={true}></input>  
                </div> 
            </div>            
            <button className="converter-button" type='button' onClick={props.changeResult}>Convert</button>
        </div>
    )
}

export default Converter;