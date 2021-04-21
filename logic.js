//fetch fanduel odds
  function fetchfandueldata() {
    fetch('https://api.the-odds-api.com/v3/odds/?apiKey=33ec130f94414bb4491dbddaeb8d3e0e&sport=americanfootball_nfl_super_bowl_winner&region=us')
      .then(response => response.json())
      .then(data => console.log(data.data[0].sites[2].odds.outrights));
    }


//fetch draftkings odds
  function fetchdraftkingsdata() {
    fetch('https://api.the-odds-api.com/v3/odds/?apiKey=33ec130f94414bb4491dbddaeb8d3e0e&sport=americanfootball_nfl_super_bowl_winner&region=us')
      .then(response => response.json())
      .then(data => console.log(data.data[0].sites[4].odds.outrights));
    }


//fetch fox bet odds
  function fetchfoxbetdata() {
    fetch('https://api.the-odds-api.com/v3/odds/?apiKey=33ec130f94414bb4491dbddaeb8d3e0e&sport=americanfootball_nfl_super_bowl_winner&region=us')
        .then(response => response.json())
        .then(data => console.log(data.data[0].sites[5].odds.outrights));
      }