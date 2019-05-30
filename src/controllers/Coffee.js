import React, { Component } from 'react';

class Coffee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            coffees: []
        }
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

    render() {
        return (
            <>
                <h1>Welcome to Coffee Time !</h1>
                {
                    this.state.coffees.map(coffee => {
                        return (
                            <div className='coffees' key={coffee.id}>
                                <h3>Blend Name: {coffee.name}</h3>
                                <h3>Origin: {coffee.origin}</h3>
                                <img src={coffee.img} />
                                <h3>Notes: {coffee.notes}</h3>
                                <h3>Price: {coffee.price}</h3>
                            </div>
                        )

                    })
                }
            </>
        )
    }
}

export default Coffee