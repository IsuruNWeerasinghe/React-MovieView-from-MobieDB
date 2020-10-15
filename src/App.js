import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=55957fcf3ba81b137f8fc01ac5a31fb5&language=en-US&page=1')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
  }

  render() {

    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      const res = items.results;
      const popularity = [];
      const vote_count = [];
      const id = [];
      const adult = [];
      const original_language = [];
      const original_title = [];
      const title = [];
      const vote_average = [];
      const overview = [];
      const release_date = [];
      const backdrop_path = [];
      const poster_path = [];

      for (const [index, value] of res.entries()) {
        popularity.push(<h5 key={index}>{value.original_title}</h5>)
        vote_count.push(<h5 key={index}>{value.vote_count}</h5>)
      }
      var i;
      for (i = 0; i < 20; i++) {
        popularity[i] = res[i].popularity;
        vote_count[i] = res[i].vote_count;
        id[i] = res[i].id;
        adult[i] = res[i].adult;
        original_language[i] = res[i].original_language;
        original_title[i] = res[i].original_title;
        title[i] = res[i].original_title;
        vote_average[i] = res[i].vote_average;
        overview[i] = res[i].overview;
        release_date[i] = res[i].release_date;
        poster_path[i] = "https://image.tmdb.org/t/p/w500" + res[i].poster_path;
        backdrop_path[i] = "https://image.tmdb.org/t/p/w500" + res[i].backdrop_path;
      }


      return (
        <div className="App">
          <header>
            <h2>Movie Finder</h2>
          </header>

          <section>
            <nav>
              <dl>
                <dt>Movies</dt>
                <dd>Release Calender</dd>
                <dd>DVD/Blu-Ray Release</dd>
                <dd>Top Rated Movies</dd>
                <dd>Most Popular Movies</dd>
                <dd>Coming Soon</dd>
                <dd>Movie News</dd>
                <dd>India Movie Spotlight</dd>
                <dd>Showtimes and Tickets</dd>
                <dd>Top Box Office</dd>
                <dd>TV Shows</dd>
                <dd>White cold drink</dd>
                <br></br>
                <dt>TV Shows</dt>
                <dd>What's on TV & Streaming</dd>
                <dd>Top Rated Shows</dd>
                <dd>Most Popular Shows</dd>
                <dd>TV News</dd>
                <dd>India TV Spotlight</dd>
                <br></br>
                <dt>Watch</dt>
                <dd>What to Watch</dd>
                <dd>Latest Trallers</dd>
                <dd>IMDB Originals</dd>
                <dd>IMDB Picks</dd>
                <dd>IMDB Products</dd>
                <br></br>
                <dt>Community</dt>
                <dd>Help Center</dd>
                <dd>Contributor Zone</dd>
                <dd>PollS</dd>

              </dl>
            </nav>

            <article>
              <div class="film">
                {items.results.map((item, i) => {
                  return <table>
                    <tr>
                      <td><img src={backdrop_path[i]} alt="Preview faild" width="500" height="330"></img></td>

                      <td>
                        <h1>{original_title[i]}</h1>
                        <h4>Released Date: {release_date[i]}</h4>
                        <h5>Title: {title[i]}</h5>
                        <h5>Views: {popularity[i]}</h5>

                        <h5>Language : {original_language[i]}</h5>
                        <h5>Overview</h5>
                        <p align='left'>{overview[i]}</p>
                        <h5><table>
                          <th>Vote Count: {vote_count[i]}</th>
                          <th>Average: {vote_average[i]}</th>
                        </table></h5>
                      </td>
                    </tr>

                  </table>
                })}

              </div>
            </article>

            <aside>
              <div class="ad">
                <img src={poster_path[10]} alt="Ad loading faild" width="250" height="740"></img>
                <img src={poster_path[11]} alt="Ad loading faild" width="250" height="740"></img>
                <img src={poster_path[3]} alt="Ad loading faild" width="250" height="740"></img>
                <img src={poster_path[6]} alt="Ad loading faild" width="250" height="740"></img>
                <img src={poster_path[15]} alt="Ad loading faild" width="250" height="740"></img>
                <img src={poster_path[18]} alt="Ad loading faild" width="250" height="740"></img>
                <img src={poster_path[7]} alt="Ad loading faild" width="250" height="740"></img>
                <img src={poster_path[8]} alt="Ad loading faild" width="250" height="740"></img>
                <img src={poster_path[9]} alt="Ad loading faild" width="250" height="740"></img>
                <img src={poster_path[10]} alt="Ad loading faild" width="250" height="740"></img>
              </div>
            </aside>

          </section>

          <footer>
            <h4>About</h4>
            <p>This is a simple web page of list down the top movies in the MovieDB. The application was developed by using React JS and Movie data are taken from MovieDB API.</p>
          </footer>

        </div>
      );
    }

  }
}

export default App;
