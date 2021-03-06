import React, { Component } from 'react';
import Reviews from './Reviews.js'
import Form from './FormUpdateCoffee.js';
import FormNew from './FormNew.js';
let baseURL = process.env.REACT_APP_BASEURL

//this logig let you switch b/n heroku url and local host;
//you need it everu file you use fetch request.
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3000'
} else {
  baseURL = 'https://mini-project-coffee.herokuapp.com'
}

console.log('current base URL:', baseURL)



class Coffee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            coffees: [],
           isLoaded: false
        }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleCreateChange = this.handleCreateChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
       this.handleDelete = this.handleDelete.bind(this)
    }

//*****GET all coffees **********/
    componentDidMount() {
        this.getCoffees()
    }

    getCoffees() {
      //or syntax may be : fetch( `${baseURL}/coffees/`)
        fetch(baseURL + '/coffees/')
            .then(response => response.json())
            .then(jsonedCoffees => this.setState({ coffees: jsonedCoffees}))
            .catch(error => console.error(error))
    }

//*******CREATE******** 
handleCreateChange(event) {
    this.setState({
        [event.target.id]: event.target.value
    },
    )}

handleAdd (event) {
   event.preventDefault()
   console.log(event.target)
   let formInputs = { 
    name: this.state.name,
    origin: this.state.origin,
    notes: this.state.notes,
    img: this.state.img,
    price: this.state.price 
   }
    fetch(baseURL + '/coffees/', {
      body: JSON.stringify(formInputs),
      method: 'POST',
   headers: {
     'Accept': 'application/json, text/plain, */*',
     'Content-Type': 'application/json'
   }
  })
   .then(createdCoffee => {
     return createdCoffee.json()
   })
   .then(jsonedCoffee => {
     // reset the form
     // add coffee to coffees
     this.setState({
       formInputs: {
        name: '',
        origin: '',
        notes: '',
        img: '',
        price: ''
       },
       coffees: [jsonedCoffee, ...this.state.coffees]
     })
   })
   .catch(error => console.log(error))
  }
  //... and pass this into the FormNew

//UPDATE *****************
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
        fetch(`${baseURL}/coffees/${event.target.id}`, {
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
//**********DELETE */
handleDelete (event) {
   //event here is the => onClick , and target => the whole html element (button) with function handleDelete ...;
   //the button needs an id ={coffe.id} to specify what we targetting; we need id for sending this functionality to the backend .
    event.preventDefault()
    console.log(event.currentTarget.id)
    let myInfo = {
        name: this.state.name , origin: this.state.origin , notes: this.state.notes ,img: this.state.img,  price: this.state.price
    }
    //console.log(myInfo)
    fetch(`${baseURL}/coffees/${event.target.id}`, {
      body: JSON.stringify(myInfo),
      method: 'DELETE',
   headers: {
     'Accept': 'application/json, text/plain, */*',
     'Content-Type': 'application/json'
   }
  })
   .then(deletedCoffee => {
    
     this.getCoffees()
   })
   .catch(error => console.log(error))
  }
//********************************** */
    render() {
        console.log(this.state)
        //console.log(coffees.reviews)
        return (
            <>
            <header>
            <h1>
            <span role="img" aria-label="sheep">☕</span>
               Welcome to Coffee Time !</h1>
                </header>
    
                <div className='container'>   
<section className='sidebar'> 
<h3>Add Coffee here</h3>
<FormNew create={this.handleAdd} change={this.handleCreateChange}/>
</section>
           {
                this.state.coffees.map(coffee => {
                        return (
                            <div className='card'  key={coffee.id}>
 
                                <h3 className="card-header">Blend Name: {coffee.name}</h3>
                                <div className="card-body">
                                <h3>Origin: {coffee.origin}</h3>
                                <img className="card-img-top"src={coffee.img} />
                                <h3 className="card-text">Notes: {coffee.notes}</h3>
                                <h3>Price: $ {coffee.price}</h3> 

<button onClick = {() => this.setState({isLoaded: true})}>UPDATE</button>
{this.state.isLoaded && 
<Form update = {this.handleUpdate} change={this.handleChange} id = {coffee.id}
 name={coffee.name} img = {coffee.img} price = {coffee.price}/>
}

 <button id={coffee.id} onClick = {(event) => this.handleDelete(event) }> X </button>  
</div>
  <Reviews reviews={coffee.reviews}/>
                             </div>    
                        )
                    }) 
                }
                </div>

            </>
        )
    }
}

export default Coffee