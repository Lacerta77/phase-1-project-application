function fetchunibetdata() {
fetch('https://api.the-odds-api.com/v3/odds/?apiKey=33ec130f94414bb4491dbddaeb8d3e0e&sport=americanfootball_nfl_super_bowl_winner&region=us')
  .then(response => response.json())
  .then(data => console.log(data.data[0].sites[0].odds.outrights));
}

function fetchintertopsdata() {
  fetch('https://api.the-odds-api.com/v3/odds/?apiKey=33ec130f94414bb4491dbddaeb8d3e0e&sport=americanfootball_nfl_super_bowl_winner&region=us')
    .then(response => response.json())
    .then(data => console.log(data.data[0].sites[1].odds.outrights));
  }

  function fetchfandueldata() {
    fetch('https://api.the-odds-api.com/v3/odds/?apiKey=33ec130f94414bb4491dbddaeb8d3e0e&sport=americanfootball_nfl_super_bowl_winner&region=us')
      .then(response => response.json())
      .then(data => console.log(data.data[0].sites[2].odds.outrights));
    }

  function fetchbovadadata() {
    fetch('https://api.the-odds-api.com/v3/odds/?apiKey=33ec130f94414bb4491dbddaeb8d3e0e&sport=americanfootball_nfl_super_bowl_winner&region=us')
      .then(response => response.json())
      .then(data => console.log(data.data[0].sites[3].odds.outrights));
    }

  function fetchdraftkingsdata() {
    fetch('https://api.the-odds-api.com/v3/odds/?apiKey=33ec130f94414bb4491dbddaeb8d3e0e&sport=americanfootball_nfl_super_bowl_winner&region=us')
      .then(response => response.json())
      .then(data => console.log(data.data[0].sites[4].odds.outrights));
    }

  function fetchfoxbetdata() {
    fetch('https://api.the-odds-api.com/v3/odds/?apiKey=33ec130f94414bb4491dbddaeb8d3e0e&sport=americanfootball_nfl_super_bowl_winner&region=us')
        .then(response => response.json())
        .then(data => console.log(data.data[0].sites[5].odds.outrights));
      }

    function fetchsugarhousedata() {
      fetch('https://api.the-odds-api.com/v3/odds/?apiKey=33ec130f94414bb4491dbddaeb8d3e0e&sport=americanfootball_nfl_super_bowl_winner&region=us')
        .then(response => response.json())
        .then(data => console.log(data.data[0].sites[6].odds.outrights));
      }

    function fetchbetmgmdata() {
      fetch('https://api.the-odds-api.com/v3/odds/?apiKey=33ec130f94414bb4491dbddaeb8d3e0e&sport=americanfootball_nfl_super_bowl_winner&region=us')
        .then(response => response.json())
        .then(data => console.log(data.data[0].sites[7].odds.outrights));
      }

    function fetchmybookieagdata() {
      fetch('https://api.the-odds-api.com/v3/odds/?apiKey=33ec130f94414bb4491dbddaeb8d3e0e&sport=americanfootball_nfl_super_bowl_winner&region=us')
        .then(response => response.json())
        .then(data => console.log(data.data[0].sites[8].odds.outrights));
      }