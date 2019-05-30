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
10.











### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
