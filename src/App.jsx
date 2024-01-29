
import './App.css'
import MyButton from './component/MyButton'

function MyButton2() {
  return (
    <button>
      I'm a real button 
    </button>
  );
}

function App() {

  return (
    <>
     <h1>Hello world</h1>
     <MyButton/>
     <MyButton2/>
    </>
  )
}

export default App
