import './App.css';
import Main from './component/Main';
import logo from './assets/logo.svg';



function App() {
  return (
    <div className="App">
      <header className="AppHeader">
        <div className='circle'>
        <img src={logo}></img>
        </div>
       </header>
       <Main/>
    </div>
  );
}

export default App;
