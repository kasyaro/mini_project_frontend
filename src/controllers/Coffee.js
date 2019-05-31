import React, { Component } from 'react';
import Reviews from './Reviews.js'
import Form from './FormUpdateCoffee.js';

class Coffee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            coffees: [],
           
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
    }
    componentDidMount() {
        this.getCoffees()
    }

    getCoffees() {
        fetch('/coffees/')
            .then(response => response.json())
            .then(jsonedCoffees => this.setState({ coffees: jsonedCoffees }))
            .catch(error => console.error(error))
    }

    handleChange (event) {
        //track changes to input (this will be a "handleChange") this will have the data (stored in state)
        this.setState({
            [event.target.id] : event.target.value},
            
        )
      }

      
    handleUpdate (event) {
        //submit the changes (this will be a "handlesubmit, handleadd") this will take the data (stored in state) and PUT/PATCH to backend
        event.preventDefault()
        console.log(event.target.id)
        let myInfo = {
            name: this.state.name , img: this.state.img,  price: this.state.price
        }
        //console.log(myInfo)
        fetch(`/coffees/${event.target.id}`, {
          body: JSON.stringify(myInfo),
          method: 'PUT',
       headers: {
         'Accept': 'application/json, text/plain, */*',
         'Content-Type': 'application/json'
       }
      })
       .then(updatedCoffee => {
        
         this.getCoffees()
       })
       .catch(error => console.log(error))
      }

    render() {
        console.log(this.state)
        return (
            <>
                <h1>Welcome to Coffee Time !</h1>

                {
                    this.state.coffees.map(coffee => {
                        return (
                            <div className='coffees' key={coffee.id}>

                                <div className='coffeees box'>
                                <h3>Blend Name: {coffee.name}</h3>
                                <h3>Origin: {coffee.origin}</h3>
                                <img src={coffee.img} />
                                <h3>Notes: {coffee.notes}</h3>
                                <h3>Price: {coffee.price}</h3> 

                             <Reviews reviews={coffee.reviews}/>

<Form update = {this.handleUpdate} change={this.handleChange} id = {coffee.id}
 name={coffee.name} img = {coffee.img} price = {coffee.price}/>
                             </div>
                             
                            </div>
                        )
                    }) 
                }
            </>
        )
    }
}

export default Coffee