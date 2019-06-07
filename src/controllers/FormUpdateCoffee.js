import React, { Component } from 'react';

class Form extends Component {


    render() {
        console.log(this.props.update)
        return (
        <>
            <form className="form-group"
            id={this.props.id} onSubmit={this.props.update}>
              <input className="form-control"
                onChange={this.props.change}
                name={'name'}
                placeholder={'name'}
                type={'text'}
                defaultValue={this.props.name}
                id={'name'}
               />
               <input className="form-control"
                  onChange={this.props.change}
                 name={'img'}
                 placeholder={'img'}
                 type={'text'}
                  defaultValue={this.props.img}
                 id={'img'}
              />
              <input className="form-control"
               onChange={this.props.change}
                name={'price'}
                placeholder={'price'}
                type={'text'}
                defaultValue={this.props.price}
                id={'price'}
             />
              <input type='submit' value='submit'/>
            </form>
            </>
        )
    }
}
export default Form