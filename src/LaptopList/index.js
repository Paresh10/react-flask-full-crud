import React from 'react'
import { Card, Button } from 'semantic-ui-react'

export default function DogList(props) {

  const laptopsToBeDisplayed = props.laptops.map(laptop => {
    return (
      <Card key={laptop.id} color={'black'}>
        <Card.Content >
          <Card.Header>
            {laptop.maker}
          </Card.Header>
          <Card.Meta>
            {laptop.model}
          </Card.Meta>
          <Card.Description>
          Manufacturing date:
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
