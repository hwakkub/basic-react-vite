
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
     <img className="avatar" src='https://th.bing.com/th/id/OIP._L9JfwZghKVXuhCtEZnF9QHaI4?rs=1&pid=ImgDetMain'/>
     <MyButton/>
     <MyButton2/>
    </>
  )
}

export default App
