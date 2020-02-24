import React, { useState, useEffect } from "react";
import "./assets/css/Bootstrap.css";
import "./assets/css/style.css";

import Hisotry from "./components/History";

const App = () => {
  const [configuration, setConfiguration] = useState(null);
  const [stats, setStats] = useState(null);
  const [scheduledGames, setScheduledGames] = useState(null);
  const [history, setHistory] = useState([]);
  const [nextGame, setNextGame] = useState(null);
  const [spinById, setSpinById] = useState(null);
  const [spinByUuId, setSpinByUuId] = useState(null);

  const apis = {
    configurationApi:
      "http://dev-games-backend.advbet.com/v1/ab-roulette/1/configuration",
    statsApi: "http://dev-games-backend.advbet.com/v1/ab-roulette/1/stats",
    scheduledGamesApi:
      "http://dev-games-backend.advbet.com/v1/ab-roulette/1/scheduledGames",
    historyApi:
      "http://dev-games-backend.advbet.com/v1/ab-roulette/1/history?limit=37",
    nextGameApi:
      "http://dev-games-backend.advbet.com/v1/ab-roulette/1/nextGame",
    spinByIdApi:
      "http://dev-games-backend.advbet.com/v1/ab-roulette/1/game/1405055",
    spinByUuIdApi:
      "http://dev-games-backend.advbet.com/v1/ab-roulette/1/game/15f493ad-637c-4bbc-69ab-164789e4a4ee"
  };

  useEffect(() => {
    Promise.all(Object.values(apis).map(value => fetch(value)))
      .then(async data => await Promise.all(data.map(e => e.json())))
      .then(results => {
        setConfiguration(results[0]);
        setStats(results[1]);
        setScheduledGames(results[2]);
        // setHistory(results[3]);
        setNextGame(results[4]);
        setSpinById(results[5]);
        setSpinByUuId(results[6]);

        let counter = results[3].length;
        for (let i = 0; i < counter; i++) {
          setTimeout(() => {
            const v = results[3][i];
            setHistory(old => [...old, v]);
          }, i * 10000);
        }

      })
      .catch(error => {
        console.log("error", error);
      });
  }, []);

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
                <label>API base URL: </label>{" "}
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
                            <td key={index} className="btn-red">
                              {resultList.result}
                            </td>
                          ))
                        : null}
                    </tr>
                    <tr>
                      <th>Hits</th>
                      {stats
                        ? stats.map((countList, index) => (
                            <td
                              key={index}
                              className={`${index < 5 ? "cold" : "neutral"} ${
                                index > 31 ? "hot" : "neutral"
                              }`}
                            >
                              {countList.count}
                            </td>
                          ))
                        : null}
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
                                  : ""
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
                              <Hisotry data={event} key={index} />
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
