import data from '../data.json';

const Rate = (props) => {     

    return (
        <div>
            <div>
                <h2>Currency Rate</h2>
                <p className='rate-date'>as at {props.date}</p>
                <p className='rate-name'>1 EUR =</p>
            </div>            
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <table>                   
                    <tbody>               
                        {data.map((elem) => (
                            <tr key={elem.id}>                        
                                <td className='rate-item'><img src={elem.flag} alt=''></img></td>
                                <td className='rate-item'>{elem.code}</td>
                                <td className='rate-item'>{elem.name}</td>                               
                                {Object.entries(props.currencies).map(([key, value]) => {
                                    if(elem.code === key) {
                                        return <td className='rate-item' key={elem.id}>{value.toFixed(4)}</td>
                                    }                                  
                                })}                               
                            </tr>
                        ))}  
                    </tbody>
                </table>
            </div>       
        </div>
    );

}

export default Rate;