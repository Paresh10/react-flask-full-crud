import React, { Component } from 'react'
import LaptopList from '../LaptopList'
import NewLaptopForm from '../NewLaptopForm'
import EditLaptop from '../EditLaptop'
import './index.css'

export default class LaptopContainer extends Component {

  constructor(props) {
    super(props)

      this.state = {
        laptops: [],
        idOfLaptopToBeEdited: -1
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
          const laptops = this.state.laptops
          laptops.push(newLaptopJson.data)
          this.setState({ laptops: laptops })
        }
    }
    catch (e) {
      console.error(e);
    }
  }

  deleteLaptop = async (idOfLaptopToBeDeleted) => {
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/laptops/" + idOfLaptopToBeDeleted
      const laptopToBeDeleted = await fetch(url, {
        method: 'DELETE'
      })

      if (laptopToBeDeleted.status === 200) {

        const laptops = this.state.laptops
        let indexOfLaptopToBeDeleted  = 0

        for (let i = 0; i < laptops.length; i++) {
          if(laptops[i].id === idOfLaptopToBeDeleted) {
            indexOfLaptopToBeDeleted = i
            break
          }
        }
        laptops.splice(indexOfLaptopToBeDeleted, 1)
        this.setState({ laptops: laptops })
      }
    }
    catch (e) {
      console.error(e);
    }
  }

  editLaptop = async (idOfLaptopToBeEdited) => {
    this.setState({
      idOfLaptopToBeEdited: idOfLaptopToBeEdited
    })
  }

  updateLaptop = async (updatedLaptopInfo) => {
    const url = process.env.REACT_APP_API_URL + "/api/v1/lapttops/" + this.state.idOfLaptopToBeEdited

    try {
      const updateLaptop = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(updatedLaptopInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const updatedLaptopJson = await updateLaptop.json()

      if (updateLaptop.status === 200) {
        const laptops = this.state.laptops
        const indexOfLaptopToBeUpdated = laptops.find((laptop) => laptop.id === this.state.idOfLaptopToBeEdited)
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
          <LaptopList
          laptops={this.state.laptops}
          deleteLaptop={this.deleteLaptop}
          editLaptop={this.editLaptop}
          />
          { this.state.idOfLaptopToBeEdited !== -1
            &&
            <EditLaptop
            laptopToBeEdited = {this.state.laptops.find((laptop) => laptop.id === this.state.idOfLaptopToBeEdited)}
            updateLaptop={this.updateLaptop}
            />
          }
      </React.Fragment>
    )
  }

}











//
