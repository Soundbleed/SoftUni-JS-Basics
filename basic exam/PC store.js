function calculateExpences(processorUsd, videoCardUsd, ramUsd, ramCount, discount) {

    let processorLeva = (processorUsd * 1.57)
    let processorLevaDiscount = processorLeva - (processorLeva * discount)
    let videoCardLeva = videoCardUsd * 1.57
    let videoCardLevaDiscount = videoCardLeva - (videoCardLeva * discount)
    let ramPerUnitLeva = ramUsd * 1.57
    let ramTotalPriceLeva = ramPerUnitLeva * ramCount
    let total = processorLevaDiscount + videoCardLevaDiscount + ramTotalPriceLeva
    console.log(`Money needed - ${total.toFixed(2)} leva.`)


}

calculateExpences(500,
    200,
    80,
    2,
    0.05
)