import logo from './logo.svg';
import './App.css';

import {Routes, Route} from 'react-router-dom'

// Importing Component Modul
import First from './components/First/First'
import If from './components/If/If'
import List from './components/List/List'
import Form from './components/Form/Form'

// Importing Page
import Home from './pages/Home'
import About from './pages/About'
import Information from './pages/Information'

function App() {
  // variable
  const string = 'ReactJS'
  const object = {
    first: 'This',
    second: 'is',
  }

  const array = [
    {id: 1, text:'Number1'},
    {id: 2, text:'Number2'},
    {id: 3, text:'Number3'},
  ]

  const form = [
    {id: 1, type:'text', name:'username', label:'Username'},
    {id: 2, type:'email', name:'email', label:'E-mail'},
    {id: 3, type:'password', name:'password', label:'Password'},
  ]

  let counter = 0
  const count = () => {
    counter++
    alert(counter)
  }

  const argument = (argument) => {
    alert(argument)
  }

  const eventHandler = (argument, event) => {
    alert(`${argument} ${event.type}`)
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* Event */}
        <div onClick={count}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <p>{counter > 3 ? 'You have click the image 3 times' : 'Counting...'}</p>

        {/* Event with argument */}
        <div onClick={() => argument('This is argument')}>

          {/* Passing property to component */}
          <First string={string} object={object}/>
        </div>

          {/* Event with argument and event */}
        <div onClick={(event) => eventHandler('Event is', event)}>
          <p>Try it!</p>
        </div>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* Condition */}
        <If firstCondition={true} secondCondition={true} />

        {/* List */}
        <ul>
          {array.map((text) => <List key={text.id} text={text.text} />)}
        </ul>

        {/* Form */}
        <Form properties={form}/>
      </header>
      <main>
        <Routes>
          <Route path='learning-react-basic/' element={<Home />} />
          <Route path='learning-react-basic/about' element={<About />} />
          <Route path='learning-react-basic/information' element={<Information />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
