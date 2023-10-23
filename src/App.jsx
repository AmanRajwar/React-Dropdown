import { useState } from 'react'
import ReactDropdown from './components/ReactDropdown';
import Styles from './App.module.css';

function App() {
  // const [count, setCount] = useState(0);
  const items = ['Yes', 'Probably not'];

  return (
    <div className= {Styles.body}>
    <ReactDropdown items={items}/>
    </div>
  )
}

export default App
