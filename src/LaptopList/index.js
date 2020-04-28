import React from 'react'
import { Card } from 'semantic-ui-react'

export default function DogList(props) {

  const laptopsToBeDisplayed = props.laptops.map(laptop => {
    return (
      <Card key={laptop.id}>
        <Card.Content >
          <Card.Header>
            {laptop.maker}
          </Card.Header>
          <Card.Meta>
            {laptop.model}
          </Card.Meta>
          <Card.Description>
            {laptop.manufactured_on}
          </Card.Description>
        </Card.Content>
      </Card>
    )
  })

  return (
    <Card.Group>
      {laptopsToBeDisplayed}
    </Card.Group>
  )

}
