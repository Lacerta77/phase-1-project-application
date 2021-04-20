fetch('https://api.the-odds-api.com/v3/odds/?apiKey=33ec130f94414bb4491dbddaeb8d3e0e&region=us&sport=americanfootball_nfl_super_bowl_winner&mkt=outrights')
  .then(response => response.json())
  .then(data => console.log(data.data));