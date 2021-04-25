//fetch fanduel odds
document.addEventListener('DOMContentLoaded', () => {
    function displayfdodds(){
        return fetch("https://api.the-odds-api.com/v3/odds/?apiKey=95a7098bb422d018a0485be32e0ca289&sport=americanfootball_nfl_super_bowl_winner&region=us")
        .then(resp => resp.json())
        .then(json =>{
            const product2 = json.data[0]
            //console.log(json);
            console.log(product2)
            console.log(product2.sites[2].odds.outrights[0].name + product2.sites[2].odds.outrights[0].price);
            product2.sites[2].odds.outrights.forEach(Team => {
              const price = Team.price
              console.log(Team)
              console.log(price)
              let odd = document.createElement('p');
              odd.innerText = Team.name + `:  Odds: ${price}-1`;
              document.getElementById('fdOdds').appendChild(odd);
            })
        })
        }
        displayfdodds();
    })


//fetch draftkings odds
document.addEventListener('DOMContentLoaded', () => {
  function displaydkodds(){
      return fetch("https://api.the-odds-api.com/v3/odds/?apiKey=95a7098bb422d018a0485be32e0ca289&sport=americanfootball_nfl_super_bowl_winner&region=us")
      .then(resp => resp.json())
      .then(json =>{
          const product2 = json.data[0]
          //console.log(json);
          console.log(product2)
          console.log(product2.sites[4].odds.outrights[0].name + product2.sites[4].odds.outrights[0].price);
          product2.sites[4].odds.outrights.forEach(Team => {
            const price = Team.price
            console.log(Team)
            console.log(price)
            let odd = document.createElement('p');
            odd.innerText = Team.name + `:  Odds: ${price}-1`;
            document.getElementById('dkOdds').appendChild(odd);
          })
      })
      }
      displaydkodds();
  })





//fetch fox bet odds
document.addEventListener('DOMContentLoaded', () => {
  function displayfbodds(){
      return fetch("https://api.the-odds-api.com/v3/odds/?apiKey=95a7098bb422d018a0485be32e0ca289&sport=americanfootball_nfl_super_bowl_winner&region=us")
      .then(resp => resp.json())
      .then(json =>{
          const product2 = json.data[0]
          //console.log(json);
          //console.log(product2)
          //console.log(product2.sites[5].odds.outrights[0].name + product2.sites[5].odds.outrights[0].price);
          product2.sites[5].odds.outrights.forEach(Team => {
          const price = Team.price
          console.log(Team)
          console.log(price)
          let odd = document.createElement('p');
          odd.innerText = Team.name + `:  Odds: ${price}-1`;
          document.getElementById('fbOdds').appendChild(odd);
        })
      })
      }
      displayfbodds();
  })