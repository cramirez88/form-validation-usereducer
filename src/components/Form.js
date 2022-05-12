import React, { useReducer } from "react";

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
      </div>
      { <div>
       <label>Last Name</label>
        <input type='text' onChange = {e => dispatch({type: 'SET_LAST_NAME', payload: e.target.value})}  ></input>
      </div> }
      <div>
        <label>Email</label>
        <input type='text' onChange = {e => dispatch({type: 'SET_EMAIL', payload: e.target.value})} ></input>
      </div> 
      </form>

      <p>{state.firstName}</p>
      <p>{state.lastName}</p>
      <p>{state.email}</p>
    
     
    
    </>
  )
}




export default Form;
