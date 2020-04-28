import React, { Component } from 'react'
import LaptopList from '../LaptopList'
import './index.css'

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

  render() {
    return(
      <React.Fragment>
        <h3 className="LaptopContainer"> Here the best laptops in the word! </h3>
          <LaptopList laptops={this.state.laptops}/>
      </React.Fragment>
    )
  }

}











//
