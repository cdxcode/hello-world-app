import * as React from 'react'
import { render } from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

//import gql from 'graphql-tag'

import Hello from './Hello'

const client = new ApolloClient({
    uri: 'https://w5xlvm3vzz.lp.gql.zone/graphql'
})

// client
//     .query({
//         query: gql`
//             {
//                 rates(currency: "USD") {
//                     currency
//                 }
//             }
//         `
//     })
//     .then(data => console.log({ data }))

const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center'
}

const App = () => (
    <ApolloProvider client={client}>
        <div style={styles}>
            <h2>Boo 🚀</h2>
        </div>
    </ApolloProvider>
)

render(<App />, document.getElementById('root'))
