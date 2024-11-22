export const currency = (value) => {
    return new Intl.NumberFormat('ru-RU', {currency: 'RUB', style: 'currency', maximumFractionDigits: 2, minimumFractionDigits: 2}).format(value)
}

