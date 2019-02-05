// breaks: An array of the breaks used for the output. Ex: [0, 10, 30, 95, 100]
// sliderGapSize: The distance between each break on the slider itself. For
// example, for a slider with a range of 0 - 100 split into four sections, the
// sliderGapSize is 25. This function assumes your slider has a range starting at 0.

// See readme for a visual representation of the example values

let sliderValueToPiecewiseValue = (sliderGapSize, breaks, input) => {
    const numberOfBreaks = breaks.length
    const sliderBreaks = new Array(numberOfBreaks).fill(0).map((discard, idx) => idx * sliderGapSize)
    if (input === sliderBreaks[numberOfBreaks - 1]) {
        return breaks[numberOfBreaks - 1]
    }
    const diffs = breaks.map((br, idx) => (breaks[idx + 1] ? breaks[idx + 1] - br : null))
    diffs.pop()
    const closestSliderBreak = sliderBreaks.map(el => el <= input).indexOf(false) - 1
    return breaks[closestSliderBreak] + ((input - sliderBreaks[closestSliderBreak])
    / sliderGapSize) * diffs[closestSliderBreak]
}

// Inverse function. If your slider only accepts integers, you will want to round the output.

let piecewiseValueToSliderValue = (sliderGapSize, breaks, input) => {
    const numberOfGaps = breaks.length - 1
    if (input === breaks[numberOfGaps]) {
        return sliderGapSize * numberOfGaps
    }
    const diffs = breaks.map((br, idx) => (breaks[idx + 1] ? breaks[idx + 1] - br : null))
    diffs.pop()
    const closestBreak = breaks.map(el => el <= input).indexOf(false) - 1
    return sliderGapSize * ((input - breaks[closestBreak]) / diffs[closestBreak])
    + closestBreak * sliderGapSize
}
