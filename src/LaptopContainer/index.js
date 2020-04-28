import React, { Component } from 'react'
import LaptopList from '../LaptopList'
import './index.css'
import NewLaptopForm from '../NewLaptopForm'

export default class LaptopContainer extends Component {

  constructor(props) {
    super(props)

      this.state = {
        laptops: []
      }

  }

  componentDidMount() {
    this.getAllTheLaptops()
  }

  getAllTheLaptops = async () => {
    try {
      const url = await process.env.REACT_APP_API_URL + "/api/v1/laptops/"
      const laptopsToGet = await fetch(url)
      const laptopsJson = await laptopsToGet.json()

      this.setState({
        laptops: laptopsJson.data
      })

    }
    catch (e) {
      console.error(e);
    }
  }

  createNewLaptop = async (laptopToBeCreated) => {
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/laptops/"
      const newLaptopResponse = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(laptopToBeCreated)
      })

        const newLaptopJson = newLaptopResponse.json()

        if (newLaptopResponse.status === 201) {
          const state = this.state
          state.laptops.push(newLaptopJson.data)
          this.setState(state)
        }
    }
    catch (e) {
      console.error(e);
    }
  }

  render() {
    return(
      <React.Fragment>
        <h3 className="LaptopContainer"> Here are the best laptops in the word! </h3>
          <NewLaptopForm createNewLaptop={this.createNewLaptop}/>
          <LaptopList laptops={this.state.laptops}/>
      </React.Fragment>
    )
  }

}











//
