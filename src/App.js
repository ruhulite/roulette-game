import React, { useState, useEffect } from 'react';
import './assets/css/Bootstrap.css';
import './assets/css/style.css';

const App = () => {

  const [firstApiData, setFirstApiData] = useState(null);
  const [secondApiData, setSecondApiData] = useState(null);
  const [thirdApiData, setThirdApiData] = useState(null);
  const [fourthApiData, setFourthApiData] = useState(null);
  const [nextGameApiData, setNextGameApiData] = useState(null);
  const [getSpinByIdApiData, setGetSpinByIdApiData] = useState(null);
  const [getSpinByUuIdApiData, setGetSpinByUuIdApiData] = useState(null);
  
  const firstAPICall = fetch("http://dev-games-backend.advbet.com/v1/ab-roulette/1/configuration");
  const secondAPICall = fetch("http://dev-games-backend.advbet.com/v1/ab-roulette/1/stats");
  const thirdAPICall = fetch("http://dev-games-backend.advbet.com/v1/ab-roulette/1/scheduledGames");
  const fourthAPICall = fetch("http://dev-games-backend.advbet.com/v1/ab-roulette/1/history?limit=37");
  const nextGame = fetch("http://dev-games-backend.advbet.com/v1/ab-roulette/1/nextGame");
  const getSpinById = fetch("http://dev-games-backend.advbet.com/v1/ab-roulette/1/game/1405055");
  const getSpinByUuId = fetch("http://dev-games-backend.advbet.com/v1/ab-roulette/1/game/15f493ad-637c-4bbc-69ab-164789e4a4ee");

  useEffect(() => {
    firstAPICall
      .then(res => res.json())
      .then(
        (result) => {
          setFirstApiData(result);
        },
        (error) => {
          console.log('ERR ', error);
        }
      );

      secondAPICall
      .then(res => res.json())
      .then(
        (result) => {
          setSecondApiData(result);
        },
        (error) => {
          console.log('ERR ', error);
        }
      );

      thirdAPICall
      .then(res => res.json())
      .then(
        (result) => {
          setThirdApiData(result);
        },
        (error) => {
          console.log('ERR ', error);
        }
      );

      fourthAPICall
      .then(res => res.json())
      .then(
        (result) => {
          setFourthApiData(result);
        },
        (error) => {
          console.log('ERR ', error);
        }
      );

      nextGame
      .then(res => res.json())
      .then(
        (result) => {
          setNextGameApiData(result);
        },
        (error) => {
          console.log('ERR ', error);
        }
      );

      getSpinById
      .then(res => res.json())
      .then(
        (result) => {
          setGetSpinByIdApiData(result);
        },
        (error) => {
          console.log('ERR ', error);
        }
      );

      getSpinByUuId
      .then(res => res.json())
      .then(
        (result) => {
          setGetSpinByUuIdApiData(result);
        },
        (error) => {
          console.log('ERR ', error);
        }
      );

  }, []);


  console.log('nextGameApiData ', nextGameApiData ? nextGameApiData : null);

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="col col-sm-12 col-md-12 pt-30 pb-30">
              <h1>Aardvark Roulette game API demo</h1>
            </div>
          </div>
        </div>
      </header>
      <article className="App-header">
        <div className="container">
          <div className="row">
            <div className="col col-sm-12 col-md-12">
              <div className="alert alert-primary" role="alert">
              <label>API base URL: </label> <a className="alert-link" href="https://dev-games-backend.advbet.com/v1/ab-roulette/1/">https://dev-games-backend.advbet.com/v1/ab-roulette/1/</a>
              </div>
              <h4>Stats (last 200)</h4>
              {/* stats table */}
              <div className="responsive-table">
                <table id="stats" className="table">
                  <tbody>
                    <tr>
                      <td>&nbsp;</td>
                      <th colSpan="5" className="cold">
                        Cold
                      </th>
                      <th colSpan="27" className="neutral">
                        Neutral
                      </th>
                      <th colSpan="5" className="hot">
                        Hot
                      </th>
                    </tr>
                    <tr>
                      <th>Slot</th>
                      <td className="btn-black">11</td>
                      <td className="btn-red">19</td>
                      <td className="btn-red">1</td>
                      <td className="btn-red">12</td>
                      <td className="btn-red">14</td>
                      <td className="btn-black">15</td>
                      <td className="btn-red">16</td>
                      <td className="btn-black">17</td>
                      <td className="btn-black">29</td>
                      <td className="btn-red">30</td>
                      <td className="btn-red">32</td>
                      <td className="btn-black">35</td>
                      <td className="btn-black">2</td>
                      <td className="btn-red">3</td>
                      <td className="btn-black">6</td>
                      <td className="btn-red">7</td>
                      <td className="btn-black">20</td>
                      <td className="btn-red">23</td>
                      <td className="btn-black">26</td>
                      <td className="btn-red">27</td>
                      <td className="btn-red">36</td>
                      <td className="btn-black">10</td>
                      <td className="btn-red">18</td>
                      <td className="btn-black">22</td>
                      <td className="btn-red">25</td>
                      <td className="btn-black">28</td>
                      <td className="btn-black">31</td>
                      <td className="btn-green">0</td>
                      <td className="btn-red">5</td>
                      <td className="btn-black">8</td>
                      <td className="btn-black">13</td>
                      <td className="btn-black">24</td>
                      <td className="btn-black">4</td>
                      <td className="btn-red">21</td>
                      <td className="btn-black">33</td>
                      <td className="btn-red">34</td>
                      <td className="btn-red">9</td>
                    </tr>
                    <tr>
                      <th>Hits</th>
                      <td className="cold">2</td>
                      <td className="cold">2</td>
                      <td className="cold">3</td>
                      <td className="cold">4</td>
                      <td className="cold">4</td>
                      <td className="neutral">4</td>
                      <td className="neutral">4</td>
                      <td className="neutral">4</td>
                      <td className="neutral">4</td>
                      <td className="neutral">4</td>
                      <td className="neutral">4</td>
                      <td className="neutral">4</td>
                      <td className="neutral">5</td>
                      <td className="neutral">5</td>
                      <td className="neutral">5</td>
                      <td className="neutral">5</td>
                      <td className="neutral">5</td>
                      <td className="neutral">5</td>
                      <td className="neutral">5</td>
                      <td className="neutral">5</td>
                      <td className="neutral">5</td>
                      <td className="neutral">6</td>
                      <td className="neutral">6</td>
                      <td className="neutral">6</td>
                      <td className="neutral">6</td>
                      <td className="neutral">6</td>
                      <td className="neutral">6</td>
                      <td className="neutral">7</td>
                      <td className="neutral">7</td>
                      <td className="neutral">7</td>
                      <td className="neutral">7</td>
                      <td className="neutral">7</td>
                      <td className="hot">8</td>
                      <td className="hot">8</td>
                      <td className="hot">8</td>
                      <td className="hot">8</td>
                      <td className="hot">9</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <section className="game-board-and-log">
                <div className="row">
                  <div className="col col-sm-12 col-md-6">
                    <h4>Game board</h4>
                    <div className="game-board">
                    {firstApiData && firstApiData.positionToId ? firstApiData.positionToId.map((data, index) => {
                        return(
                          <button
                          key={index}
                        data-id={`slot-${data}`}
                        type="button"
                        className={`col-xs-1 btn btn-${firstApiData && firstApiData.colors ? firstApiData.colors[index] : ''}`}
                      >
                        { data }
                      </button>
                        )
                      }) : null}
                    </div>
                    <h4>Events</h4>
                    <ul id="event_box" className="list-group">
                      <li className="list-group-item">
                        Game 1404131 ended, result is 5
                      </li>
                      <li className="list-group-item">
                        Game 1404132 will start in 133 sec
                      </li>
                    </ul>
                  </div>
                  <div className="col col-sm-12 col-md-6">
                    <h4>Log</h4>
                    <pre className="log-box">
                      2020-02-17T06:55:09.310Z Loading game board <br />
                      2020-02-17T06:55:09.313Z GET .../configuration<br />
                      2020-02-17T06:55:09.314Z Checking for new game<br />
                      2020-02-17T06:55:09.314Z GET .../nextGame<br />
                      2020-02-17T06:55:09.583Z GET .../stats?limit=200<br />
                      2020-02-17T06:55:09.584Z sleeping for fakeStartDelta 11<br />
                      sec 2020-02-17T06:55:20.585Z Spinning the wheel<br />
                      2020-02-17T06:55:20.597Z GET .../game/1404131<br />
                      2020-02-17T06:55:20.800Z Still no result continue spinning<br />
                      sec
                    </pre>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default App;
