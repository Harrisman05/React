import './App.css';
import logo from './favicon.ico';

function App() {
  return (

    <div className="App">
      <img src={logo} alt="React icon"/>
      <h1> Fun facts about React </h1>
      <ol>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ol>
      <h1>Reasons I'm learning React</h1>
      <ol>
        <li>Most popular JS framework</li>
        <li>Want to level up web dev skills</li>
        <li>Practise using npm, import, export</li>
      </ol>
    </div>
  );
}

export default App;

