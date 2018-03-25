import * as React from 'react'

interface Props {
    name: string
}

export default ({ name }: Props) => {
    return <h1>Hello {name}!</h1>
}
