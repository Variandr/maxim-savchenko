import {ApolloClient, gql, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache()
});

export const categoriesAPI = {
    getCategory(category) {
        return client.query({
            query: gql`
        query Query($input: CategoryInput) {
            category(input: $input) {
                name
                products {
                    id
                    name
                    gallery
                }
            }
        }`,
            variables: {
                "input": {
                    "title": category
                }
            }
        }).then(res => res.data.category)
    },
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
        }).then(res => res.data.product)
    }
}