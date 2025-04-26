
import { useSelector } from 'react-redux'

function App() {

    //status of reducer cant be seen without use Selector
    // const isLoggedIn = useSelector(()=>{})
        const isLoggedIn = useSelector(state => state.auth.isLoggedin);
    console.log(isLoggedIn);
    
  return (
    <>
      <h1>Redux Toolkit</h1>
    </>
  )
}
export default App
