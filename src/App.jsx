
import './App.css'
import MyButton from './component/MyButton'

function MyButton2() {
  return (
    <button>
      I'm a real button 
    </button>
  );
}

const user = {
  name: 'world',
  imageUrl: 'https://th.bing.com/th/id/OIP._L9JfwZghKVXuhCtEZnF9QHaI4?rs=1&pid=ImgDetMain',
  imageSize: 90,
};

function App() {

  return (
    <>
     <h1>Hello {user.name}</h1>
     <img className="avatar" src={user.imageUrl} alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}/>
     <MyButton/>
     <MyButton2/>
    </>
  )
}

export default App
