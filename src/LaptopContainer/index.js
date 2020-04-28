import React, { Component } from 'react'

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

      console.log("fetch data");
      console.log(url);

      const laptopsToGet = await fetch(url)

      console.log("laptopsToGet");
      console.log(laptopsToGet);

      const laptopsJson = await laptopsToGet.json()

      console.log("laptopsJson");
      console.log(laptopsJson);


    }
    catch (e) {
      console.error(e);
    }
  }

  render() {
    return(
      <h3> LaptopContainer </h3>
    )
  }

}











//
