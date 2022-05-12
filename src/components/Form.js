import React, { useReducer } from "react";
const email_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const initialState = {
 firstName: '',
 lastName: '',
 email: ''
};


function reducer(state, action) {
  switch (action.type) {
    case 'SET_FIRST_NAME':
      return {
        ...state,
        firstName: action.payload
      }
      case 'SET_LAST_NAME':
        return {
          ...state,
          lastName: action.payload
        }
      case 'SET_EMAIL':
        return {
          ...state,
          email: action.payload
        }
      default: 
      return state
  }
}



const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
     <form>
      <div>
        <label>First Name</label>
        <input type='text' onChange = {e => dispatch({type: 'SET_FIRST_NAME', payload: e.target.value })} ></input>
        {state.firstName.length < 2 && state.firstName.length > 0? 'First Name must be at least 2 characters!': ''}
      </div>
      { <div>
       <label>Last Name</label>
        <input type='text' onChange = {e => dispatch({type: 'SET_LAST_NAME', payload: e.target.value})}  ></input>
        {state.lastName.length < 2 && state.lastName.length > 0? 'Last Name must be at least 2 characters!': ''}
      </div> }
      <div>
        <label>Email</label>
        <input type='text' onChange = {e => dispatch({type: 'SET_EMAIL', payload: e.target.value})} ></input>
        {!email_regex.test(state.email) ? 'Please enter a valid email address!': ''} 
        {state.email.length < 8? 'Email must be at least 8 characters': ''}
      </div> 
      </form>

      <p>{state.firstName}</p>
      <p>{state.lastName}</p>
      <p>{state.email}</p>
    
     
    
    </>
  )
}




export default Form;
