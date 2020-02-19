import React, {useState, useEffect} from 'react';
import './assets/css/Bootstrap.css';
import './assets/css/style.css';

const App = () => {
  const [configuration, setConfiguration] = useState(null);
  const [stats, setStats] = useState(null);
  const [scheduledGames, setScheduledGames] = useState(null);
  const [history, setHistory] = useState(null);
  const [nextGame, setNextGame] = useState(null);
  const [spinById, setSpinById] = useState(null);
  const [spinByUuId, setSpinByUuId] = useState(null);

  const configurationApi = fetch(
    'http://dev-games-backend.advbet.com/v1/ab-roulette/1/configuration'
  ),
  statsApi = fetch(
    'http://dev-games-backend.advbet.com/v1/ab-roulette/1/stats'
  ),
  scheduledGamesApi = fetch(
    'http://dev-games-backend.advbet.com/v1/ab-roulette/1/scheduledGames'
  ),
  historyApi = fetch(
    'http://dev-games-backend.advbet.com/v1/ab-roulette/1/history?limit=37'
  ),
  nextGameApi = fetch(
    'http://dev-games-backend.advbet.com/v1/ab-roulette/1/nextGame'
  ),
  spinByIdApi = fetch(
    'http://dev-games-backend.advbet.com/v1/ab-roulette/1/game/1405055'
  ),
  spinByUuIdApi = fetch(
    'http://dev-games-backend.advbet.com/v1/ab-roulette/1/game/15f493ad-637c-4bbc-69ab-164789e4a4ee'
  );

  useEffect(() => {

    configurationApi
      .then(res => res.json())
      .then(
        result => {
          setConfiguration(result);
        },
        error => {
          console.log('ERR ', error);
        }
      );

    statsApi
      .then(res => res.json())
      .then(
        result => {
          setStats(result);
        },
        error => {
          console.log('ERR ', error);
        }
      );

    scheduledGamesApi
      .then(res => res.json())
      .then(
        result => {
          setScheduledGames(result);
        },
        error => {
          console.log('ERR ', error);
        }
      );

    historyApi
      .then(res => res.json())
      .then(
        result => {
          setHistory(result);
        },
        error => {
          console.log('ERR ', error);
        }
      );

    nextGameApi
      .then(res => res.json())
      .then(
        result => {
          setNextGame(result);
        },
        error => {
          console.log('ERR ', error);
        }
      );

    spinByIdApi
      .then(res => res.json())
      .then(
        result => {
          setSpinById(result);
        },
        error => {
          console.log('ERR ', error);
        }
      );

    spinByUuIdApi
      .then(res => res.json())
      .then(
        result => {
          setSpinByUuId(result);
        },
        error => {
          console.log('ERR ', error);
        }
      );
      
  }, []);

  console.log('history ', history ? history : null);

  // var timeLeft = 30;
  // var elem = document.getElementById('some_div');
  
  // var timerId = setInterval(countdown, 1000);
  
  // function countdown() {
  //   if (timeLeft == 0) {
  //     clearTimeout(timerId);
  //     doSomething();
  //   } else {
  //     elem.innerHTML = timeLeft + ' seconds remaining';
  //     timeLeft--;
  //   }
  // }

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
      <article className="content">
        <div className="container">
          <div className="row">
            <div className="col col-sm-12 col-md-12">
              <div className="alert alert-primary" role="alert">
                <label>API base URL: </label>{' '}
                <a
                  className="alert-link"
                  href="https://dev-games-backend.advbet.com/v1/ab-roulette/1/"
                >
                  https://dev-games-backend.advbet.com/v1/ab-roulette/1/
                </a>
              </div>
              <h4>Stats (last 200)</h4>
              {/* stats table */}
              <div className="responsive-table">
                <table id="stats">
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
                      {stats
                        ? stats.map((resultList, index) => (
                            <td key={index} className="btn-black">
                              {resultList.result}
                            </td>
                          ))
                        : null}
                      {/* <td className="btn-black">11</td>
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
                      <td className="btn-red">9</td> */}
                    </tr>
                    <tr>
                      <th>Hits</th>
                      {stats
                        ? stats.map((countList, index) => (
                            <td key={index} className="cold">
                              {countList.count}
                            </td>
                          ))
                        : null}
                      {/* <td className="cold">2</td>
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
                      <td className="hot">9</td> */}
                    </tr>
                  </tbody>
                </table>
              </div>
              <section className="game-board-and-log">
                <div className="row">
                  <div className="col col-sm-12 col-md-6">
                    <h4>Game board</h4>
                    <div className="game-board">
                      {configuration && configuration.positionToId
                        ? configuration.positionToId.map((data, index) => (
                            <button
                              key={index}
                              data-id={`slot-${data}`}
                              type="button"
                              className={`col-xs-1 btn btn-${
                                configuration && configuration.colors
                                  ? configuration.colors[index]
                                  : ''
                              }`}
                            >
                              {data}
                            </button>
                          ))
                        : null}
                    </div>
                    <h4>Events</h4>
                    <div className="event-wrap">
                      <ul className="event-list-group">
                        {history
                          ? history.map((event, index) => (
                              <li key={index} className="list-group-item">
                                Game {event.id} ended, result is {event.result}
                              </li>
                            ))
                          : null}
                      </ul>
                    </div>
                  </div>
                  <div className="col col-sm-12 col-md-6">
                    <h4>Log</h4>
                    <pre className="log-box">
                      2020-02-17T06:55:09.310Z Loading game board <br />
                      2020-02-17T06:55:09.313Z GET .../configuration
                      <br />
                      2020-02-17T06:55:09.314Z Checking for new game
                      <br />
                      2020-02-17T06:55:09.314Z GET .../nextGame
                      <br />
                      2020-02-17T06:55:09.583Z GET .../stats?limit=200
                      <br />
                      2020-02-17T06:55:09.584Z sleeping for fakeStartDelta 11
                      <br />
                      sec 2020-02-17T06:55:20.585Z Spinning the wheel
                      <br />
                      2020-02-17T06:55:20.597Z GET .../game/1404131
                      <br />
                      2020-02-17T06:55:20.800Z Still no result continue spinning
                      <br />
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
};

export default App;
