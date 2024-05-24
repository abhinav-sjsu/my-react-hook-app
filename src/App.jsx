/*
React Hook = Special function that allows functional components to use
React features without writing class components(Recat v16.8 onwards)
(useState, useEffect, useContext, useReducer, useCallback)

useState() = A React hook that allows the creation of a stateful variable
ANS a setter function to update its value in the virtual DOM.
[name,setName]

*/

import MyComponent from "./MyComponent"
import Counter from "./Counter"

function App() {

  return (
    <>
      <MyComponent></MyComponent>
      <Counter></Counter>
    </>
  )
}

export default App
