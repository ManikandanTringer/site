import './App.css';

function App() {
  return (

    <div className="site">
      <header className="site-head">
      <p id="site-title">ReactFacts</p>
      <p id="extra-title">React Course - Project 1</p>
      </header>
      <div className="content">
        <h1 className='content-title'>Fun facts about React</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
      </div>
  );
}

export default App;
