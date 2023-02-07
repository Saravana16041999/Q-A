import './App.css';
import { Data } from './Data';
import Frequnt from './components/Frequnt';

function App() {
  const FAQ = Data
  return (
    <div className='main'>
    <h1>Frequently Asked Qustions</h1>
    {FAQ.map((QandA)=>{
      return (
        <Frequnt key={QandA.id} {...QandA}/>
      )
    })}
    </div>
  );
}

export default App;
