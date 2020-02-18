import React from 'react';
import './assets/css/Bootstrap.css';
import './assets/css/style.css';

function App() {
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
              <label for="api_base">API base URL: </label> <a className="alert-link" href="https://dev-games-backend.advbet.com/v1/ab-roulette/1/">https://dev-games-backend.advbet.com/v1/ab-roulette/1/</a>
              </div>
              <h4>Stats (last 200)</h4>
              {/* stats table */}
              <div className="responsive-table">
                <table id="stats" className="table">
                  <tbody>
                    <tr>
                      <td>&nbsp;</td>
                      <th colspan="5" className="cold">
                        Cold
                      </th>
                      <th colspan="27" className="neutral">
                        Neutral
                      </th>
                      <th colspan="5" className="hot">
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
                      <button
                        data-id="slot-0"
                        type="button"
                        className="col-xs-1 btn btn-green"
                      >
                        0
                      </button>
                      <button
                        data-id="slot-32"
                        type="button"
                        className="col-xs-1 btn btn-red"
                      >
                        32
                      </button>
                      <button
                        data-id="slot-15"
                        type="button"
                        className="col-xs-1 btn btn-black"
                      >
                        15
                      </button>
                      <button
                        data-id="slot-19"
                        type="button"
                        className="col-xs-1 btn btn-red"
                      >
                        19
                      </button>
                      <button
                        data-id="slot-4"
                        type="button"
                        className="col-xs-1 btn btn-black"
                      >
                        4
                      </button>
                      <button
                        data-id="slot-21"
                        type="button"
                        className="col-xs-1 btn btn-red"
                      >
                        21
                      </button>
                      <button
                        data-id="slot-2"
                        type="button"
                        className="col-xs-1 btn btn-black"
                      >
                        2
                      </button>
                      <button
                        data-id="slot-25"
                        type="button"
                        className="col-xs-1 btn btn-red"
                      >
                        25
                      </button>
                      <button
                        data-id="slot-17"
                        type="button"
                        className="col-xs-1 btn btn-black"
                      >
                        17
                      </button>
                      <button
                        data-id="slot-34"
                        type="button"
                        className="col-xs-1 btn btn-red"
                      >
                        34
                      </button>
                      <button
                        data-id="slot-6"
                        type="button"
                        className="col-xs-1 btn btn-black"
                      >
                        6
                      </button>
                      <button
                        data-id="slot-27"
                        type="button"
                        className="col-xs-1 btn btn-red"
                      >
                        27
                      </button>
                      <button
                        data-id="slot-13"
                        type="button"
                        className="col-xs-1 btn btn-black"
                      >
                        13
                      </button>
                      <button
                        data-id="slot-36"
                        type="button"
                        className="col-xs-1 btn btn-red"
                      >
                        36
                      </button>
                      <button
                        data-id="slot-11"
                        type="button"
                        className="col-xs-1 btn btn-black"
                      >
                        11
                      </button>
                      <button
                        data-id="slot-30"
                        type="button"
                        className="col-xs-1 btn btn-red"
                      >
                        30
                      </button>
                      <button
                        data-id="slot-8"
                        type="button"
                        className="col-xs-1 btn btn-black"
                      >
                        8
                      </button>
                      <button
                        data-id="slot-23"
                        type="button"
                        className="col-xs-1 btn btn-red"
                      >
                        23
                      </button>
                      <button
                        data-id="slot-10"
                        type="button"
                        className="col-xs-1 btn btn-black"
                      >
                        10
                      </button>
                      <button
                        data-id="slot-5"
                        type="button"
                        className="col-xs-1 btn btn-red"
                      >
                        5
                      </button>
                      <button
                        data-id="slot-24"
                        type="button"
                        className="col-xs-1 btn btn-black"
                      >
                        24
                      </button>
                      <button
                        data-id="slot-16"
                        type="button"
                        className="col-xs-1 btn btn-red"
                      >
                        16
                      </button>
                      <button
                        data-id="slot-33"
                        type="button"
                        className="col-xs-1 btn btn-black"
                      >
                        33
                      </button>
                      <button
                        data-id="slot-1"
                        type="button"
                        className="col-xs-1 btn btn-red"
                      >
                        1
                      </button>
                      <button
                        data-id="slot-20"
                        type="button"
                        className="col-xs-1 btn btn-black"
                      >
                        20
                      </button>
                      <button
                        data-id="slot-14"
                        type="button"
                        className="col-xs-1 btn btn-red"
                      >
                        14
                      </button>
                      <button
                        data-id="slot-31"
                        type="button"
                        className="col-xs-1 btn btn-black"
                      >
                        31
                      </button>
                      <button
                        data-id="slot-9"
                        type="button"
                        className="col-xs-1 btn btn-red"
                      >
                        9
                      </button>
                      <button
                        data-id="slot-22"
                        type="button"
                        className="col-xs-1 btn btn-black"
                      >
                        22
                      </button>
                      <button
                        data-id="slot-18"
                        type="button"
                        className="col-xs-1 btn btn-red"
                      >
                        18
                      </button>
                      <button
                        data-id="slot-29"
                        type="button"
                        className="col-xs-1 btn btn-black"
                      >
                        29
                      </button>
                      <button
                        data-id="slot-7"
                        type="button"
                        className="col-xs-1 btn btn-red"
                      >
                        7
                      </button>
                      <button
                        data-id="slot-28"
                        type="button"
                        className="col-xs-1 btn btn-black"
                      >
                        28
                      </button>
                      <button
                        data-id="slot-12"
                        type="button"
                        className="col-xs-1 btn btn-red"
                      >
                        12
                      </button>
                      <button
                        data-id="slot-35"
                        type="button"
                        className="col-xs-1 btn btn-black"
                      >
                        35
                      </button>
                      <button
                        data-id="slot-3"
                        type="button"
                        className="col-xs-1 btn btn-red"
                      >
                        3
                      </button>
                      <button
                        data-id="slot-26"
                        type="button"
                        className="col-xs-1 btn btn-black"
                      >
                        26
                      </button>
                    </div>
                    <h4>Events</h4>
                    <ul id="event_box" class="list-group">
                      <li class="list-group-item">
                        Game 1404131 ended, result is 5
                      </li>
                      <li class="list-group-item">
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
