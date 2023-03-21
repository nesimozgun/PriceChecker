const nightmare = require('nightmare')()

const args = process.argv.slice(2)
const url = args[0]
const minPrice = args[1]

checkPrice()

async function checkPrice() {
  const priceString = await nightmare.goto(url)
                                     .wait("#corePriceDisplay_desktop_feature_div")
                                     .evaluate(() => document.getElementById("corePriceDisplay_desktop_feature_div").innerText)
                                     .end()
  const priceNumber = parseFloat(priceString.replace('$', ''))
  if (priceNumber < minPrice) {
    console.log("cheap")
  } else {
    console.log("expensive")
  }
}