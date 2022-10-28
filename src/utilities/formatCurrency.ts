const FORMAT_CURRENCY = new Intl.NumberFormat(undefined, {
    currency: 'USD',
    style: 'currency'
})

function formatCurrency(number: number) {
 return FORMAT_CURRENCY.format(number)
}

export default formatCurrency;