export const sortProductsByName = (products) => {
    const tempProducts = [...products]
    return tempProducts.sort((a, b) => {
        return ('' + a.name).localeCompare(b.name);
    })
}

export const toUpperLetterString = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export const getDefaultAttributes = (attributes) => {
    let chosenAttributes = []
    attributes.map(a => {
        return a.items.forEach((i, index) => {
            if (index === 0) chosenAttributes = [...chosenAttributes, {id: i.id, value: i.value}]
        })
    })
    return chosenAttributes
}