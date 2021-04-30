//fetch fanduel odds

const populateOddsResults = (siteKey, data) => {

  const siteDivMap = {
    2: "fdOdds",
    4: "dkOdds",
    5: "fbOdds"
  }

  console.log(data)
  console.log(data.sites[siteKey].odds.outrights[0].name + data.sites[siteKey].odds.outrights[0].price);
  data.sites[siteKey].odds.outrights.forEach(Team => {
    const price = Team.price
    console.log(Team)
    console.log(price)
    let odd = document.createElement('p');
    odd.innerText = Team.name + `:  Odds: ${price}-1`;
    document.getElementById(`${siteDivMap[siteKey]}`).appendChild(odd);
  })
}

document.addEventListener('DOMContentLoaded', () => {
        return fetch("https://api.the-odds-api.com/v3/odds/?apiKey=95a7098bb422d018a0485be32e0ca289&sport=americanfootball_nfl_super_bowl_winner&region=us")
        .then(resp => resp.json())
        .then(json => {
          const oddsData = json.data[0]

          populateOddsResults(2, oddsData)
          populateOddsResults(4, oddsData)
          populateOddsResults(5, oddsData)
        })
})


//fetch draftkings odds
// document.addEventListener('DOMContentLoaded', () => {
//   function displaydkodds(){
//       return fetch("https://api.the-odds-api.com/v3/odds/?apiKey=95a7098bb422d018a0485be32e0ca289&sport=americanfootball_nfl_super_bowl_winner&region=us")
//       .then(resp => resp.json())
//       .then(json =>{
//           const product2 = json.data[0]
//           //console.log(json);
//           console.log(product2)
//           console.log(product2.sites[4].odds.outrights[0].name + product2.sites[4].odds.outrights[0].price);
//           product2.sites[4].odds.outrights.forEach(Team => {
//             const price = Team.price
//             console.log(Team)
//             console.log(price)
//             let odd = document.createElement('p');
//             odd.innerText = Team.name + `:  Odds: ${price}-1`;
//             document.getElementById('dkOdds').appendChild(odd);
//           })
//       })
//       }
//       displaydkodds();
//   })





// //fetch fox bet odds
// document.addEventListener('DOMContentLoaded', () => {
//   function displayfbodds(){
//       return fetch("https://api.the-odds-api.com/v3/odds/?apiKey=95a7098bb422d018a0485be32e0ca289&sport=americanfootball_nfl_super_bowl_winner&region=us")
//       .then(resp => resp.json())
//       .then(json =>{
//           const product2 = json.data[0]
//           //console.log(json);
//           //console.log(product2)
//           //console.log(product2.sites[5].odds.outrights[0].name + product2.sites[5].odds.outrights[0].price);
//           product2.sites[5].odds.outrights.forEach(Team => {
//           const price = Team.price
//           console.log(Team)
//           console.log(price)
//           let odd = document.createElement('p');
//           odd.innerText = Team.name + `:  Odds: ${price}-1`;
//           document.getElementById('fbOdds').appendChild(odd);
//         })
//       })
//       }
//       displayfbodds();
//   })