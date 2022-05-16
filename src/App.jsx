import { useState } from 'react'
import './App.css'

function App() {
  const dummyCBs = {cB0 : false, cB1 : false,cB2 : false,cB3 : false,cB4 : false,cB5 : false,cB6 : false}
  const [ checkBoxes, setCheckBoxes] = useState(dummyCBs)
  const handleChange = (e)=>{
    if(checkBoxes.cB0)
      return
    const { checked, name} = e.target
    setCheckBoxes({ ...checkBoxes, [name] : checked})
  }
  const handleChangeAll = (e)=>{
    const { checked, name} = e.target
    setCheckBoxes({ ...checkBoxes, [name] : checked})
    for(let i = 1; i <= 6 ; i++)
      setCheckBoxes((checkBoxes) => ({ ...checkBoxes, [`cB${i}`] : checked}))
    console.log(checkBoxes)
  }
  return (
    <div>
      <ul style={{
        listStyle : 'none',
      }}>
        <h3>Companies</h3>
        <li> <input onChange={handleChangeAll} checked={checkBoxes.cB0} type="checkbox" name="cB0"/> Select all</li>
        <li> <input onChange={handleChange} checked={checkBoxes.cB1} type="checkbox" name="cB1"/>  FlipKart</li>
        <li> <input onChange={handleChange} checked={checkBoxes.cB2} type="checkbox" name="cB2"/>  Uber</li>
        <li> <input onChange={handleChange} checked={checkBoxes.cB3} type="checkbox" name="cB3"/>  Snapdeal</li>
        <li> <input onChange={handleChange} checked={checkBoxes.cB4} type="checkbox" name="cB4"/>  Linkedin</li>
        <li> <input onChange={handleChange} checked={checkBoxes.cB5} type="checkbox" name="cB5"/>  Google</li>
        <li> <input onChange={handleChange} checked={checkBoxes.cB6} type="checkbox" name="cB6"/>  Tracxn</li>
      </ul>
    </div>
  )
}

export default App
