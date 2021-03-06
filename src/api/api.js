import {ApolloClient, gql, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://variandr-store-backend.herokuapp.com/',
    cache: new InMemoryCache()
});

export const categoriesAPI = {
    getCategories() {
        return client.query({
            query: gql`
            query Query {
              categories {
                name
              }
            }`
        }).then(res => res.data.categories)
    },
    getCategoryData(category) {
        return client.query({
            query: gql`
                query Query($input: CategoryInput) {
                  category(input: $input) {
                    name
                    products {
                      id
                      brand
                      name
                      inStock
                      gallery
                      attributes {
                        name
                        type
                        items {
                          id
                          value
                        }
                      }
                      prices {
                        currency {
                          label
                          symbol
                        }
                        amount
                      }
                    }
                  }
                }`,
            variables: {
                "input": {
                    "title": category
                }
            }
        }).then(res => res.data.category)
    }
}
export const productsAPI = {
    getProduct(productId) {
        return client.query({
            query: gql`
               query Query($productId: String!) {
                  product(id: $productId) {
                    id
                    name
                    inStock
                    description
                    attributes {
                      id
                      name
                      type
                      items {
                        displayValue
                        value
                        id
                      }
                    }
                    brand
                    gallery
                    prices {
                      currency {
                        label
                        symbol
                      }
                      amount
                    }
                  }
                }`,
            variables: {
                "productId": productId
            }
        }).then(res => {
            client.clearStore()
            return res.data.product
        })
    }
}
export const currenciesAPI = {
    getCurrencies() {
        return client.query({
            query: gql`
               query Query {
                  currencies {
                    label
                    symbol
                  }
               }`
        }).then(res => res.data.currencies)
    }
}
