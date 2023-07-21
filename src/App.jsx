import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState(0);
  const [Notes, setNotes] = useState({});
  const handleChange = e =>{
    setAmount(e.target.value);
  }
  const getDenomination = amt =>{
    const denominations = [5,10,20,50,100,500];
    let notes = {500:0, 100:0, 50:0, 20:0, 10:0, 5:0};
    let sum = 0;
    
      for(let i=5;i>=0;i--)
      {
        let remaining = amt-sum;
        notes[denominations[i]] = Math.floor(((remaining)/denominations[i]));
        sum += notes[denominations[i]]*denominations[i];
      }
      return notes;
  }
  const handleChange2 = amt =>{
    setNotes(getDenomination(amt));
  }
  const getRow = (note) => {
    return(
      <>
        <tr>
          <td>{note}: </td>
          <td>{Notes[note]}</td>
        </tr>
      </>
    )
  }
  return (
    <>
      <input type="text" value={amount} onChange={handleChange}/>
      <input type="submit" onClick={() => handleChange2(amount)}/>
      <table>
        {
          Object.keys(Notes).map(note => getRow(note))
        }
      </table>
    </>
  )
}

export default App
