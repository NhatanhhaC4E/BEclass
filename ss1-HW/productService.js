function findMax(product) {
    product.sort((a, b) => b.price - a.price)
    return product[0]
}

function findMinWomen(product) {
    const womenGender = product.filter((item) => item.gender === 'Women')
    womenGender.sort((a, b) => a.price - b.price)
    return womenGender[0]
}

module.exports = {
    findMax,
    findMinWomen
}