import React, { Component } from 'react';


class FormNew extends Component {

   //******************************* */
   render() {
      console.log(this.props.create)
      return (
         <>
            <form  onSubmit={this.props.create} >
               <div className="form-group">
                  <label htmlFor="exampleInputTitle">Coffee name</label>
                  <input className="form-control"
                     onChange={this.props.change}
                     name={'name'}
                     placeholder={'name'}
                     type={'text'}
                     defaultValue={this.props.name}
                     id={'name'}
                  />
               </div>

               <div className="form-group">
                  <label for="exampleInputImage">Image </label>
                  <input className="form-control"
                     onChange={this.props.change}
                     name={'img'}
                     placeholder={'img'}
                     type={'text'}
                     defaultValue={this.props.img}
                     id={'img'}
                  />
               </div>

               <div className="form-group">
                  <label for="exampleInputDescription">Notes</label>
                  <input className="form-control"
                     onChange={this.props.change}
                     name={'notes'}
                     placeholder={'notes'}
                     type={'text'}
                     defaultValue={this.props.notes}
                     id={'notes'}
                  />
               </div>

               <div className="form-group">
                  <label for="exampleInputSize">Price </label>
                  <input className="form-control"
                     onChange={this.props.change}
                     name={'price'}
                     placeholder={'price'}
                     type={'text'}
                     defaultValue={this.props.price}
                     id={'price'}
                  />
               </div>

               <div className="form-group">
                  <label for="exampleInputStyle">Origin</label>
                  <input className="form-control"
                     onChange={this.props.change}
                     name={'origin'}
                     placeholder={'origin'}
                     type={'text'}
                     defaultValue={this.props.origin}
                     id={'origin'}
                  />
               </div>

               {/* onClick if this.props.update(Art.js) is false, than run this.props.create(User_id.js) */}
              <input type='submit' value='submit' onClick={this.props.create} />
            </form>
         </>
      )
   }
}
export default FormNew