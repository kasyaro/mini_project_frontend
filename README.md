This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## SETUP

In the project directory, I created my app with REACT named mini-client:
1.
npx create-react-app mini-client
2.
than run : cd mini-client

& run : touch .env
3.
Inside my env file I set my port for front end to : 

 PORT=3001

4. 
setting a proxy to connect with backend part of mini_app:
 in file => package.json set proxy to be:  http://localhost:3000:

"proxy": "http://localhost:3000",

5. 
check for connection set up correctly  by running in terminal:

### `npm start`

it should open in a browser on : 
[http://localhost:3001] 

 (http://localhost:3000) running for back end with (rails s) in another tab of your terminal. Also run the back end first.  

6. 
My App.js will be rendering component <Coffee/>
**********
import React, {Component} from 'react';
import Coffee from './controllers/Coffee.js'
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Coffee />
      </div>
    );
  }
  }

export default App;
************

7. 
create folder:
 controllers

8. 
create file inside controllers: 
Coffee.js

9. 
Coffee.js will contailn all our coffee we created on a backend.
we will use method map to do this: 
**************
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
***************
*. Passing a props. 

I create another Component => Reviews.js
that will render for me my reviews. 

1. 
Since my coffees and reviews are both on the same fetch request ( http://localhost:3001/coffes) I do not need to write a new function in a new component for getting my reviews, but just render them . 
2. 
Reviews belongs to my coffees. We could render all them inside Coffee.js ( coffee.reviews ), but instead I pass into Coffee.js => <Reviews/> component that render them.
3. 
<Reviews/> passing down (coffee.reviews) as a props : 

 <Reviews reviews={coffee.reviews}/>
 
     where "reviews" now have a value === {coffee.reviews}. 

4. 
in Reviews.js instead of this.state : 

 this.props.reviews.map(review => {

     this props.reviews passing a value of {coffee.reviews} down to different component.

* Form component to update my coffee img , price and name.
1.
Im passing down to FormUpdateCoffee.js the function handleUpdate, as well as props for my name , price and img thats going to be used for setting a defaultValues inside my <form>:

<Form update = {this.handleUpdate}  name={coffee.name} img = {coffee.img} price = {coffee.price}/>

2. 
Also , to update besides handleUpdate function (wich is the last step of the process) , I will neeed handleChange function to track the changes:  

    handleChange (event) {
        this.setState({
            [event.target.id] : event.target.value},   
        )
      }
 this will have the data (stored in state)=> meaning [event.target.id] same as => {coffees.id} and we passing it down to Forms as => {this.props.id};

 event.target.value ==> {coffee.name},{coffee.img},{coffee.price} , we passing this values down to Form as  ==> {this.props.name}, {this.props.img}, {this.props.price}

 3. 
 change the fetch request for update function to : 

    fetch(`/coffees/${event.target.id}





