import React from 'react'
import { Card, Button } from 'semantic-ui-react'

export default function LaptopList(props) {

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
        <Card.Content>
          <Button
            onClick={() => props.deleteLaptop(laptop.id) }>
            Remove
          </Button>
          <Button
            onClick={() => props.editLaptop(laptop.id) } >
            Edit {laptop.model}
          </Button>
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
