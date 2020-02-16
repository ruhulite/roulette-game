import React from 'react';
import './assets/css/Bootstrap.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="col col-sm-12 col-md-12">
              <h2>Header...</h2>
            </div>
          </div>
        </div>
      </header>
      <article className="App-header">
        <div className="container">
          <div className="row">
            <div className="col col-sm-12 col-md-12">
              <div>Content...</div>
            </div>
          </div>
        </div>
      </article>
      <footer className="App-header">
        <div className="container">
          <div className="row">
            <div className="col col-sm-12 col-md-12">
              <div>Footer...</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
