import { Suspense } from 'react'
import './App.css'
import Counter from './counter'
import LoadData from './load-users-data'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())

function App() {
  

  return (
    <>
      
      <h1>MY COUNTER</h1>
      
      <Counter></Counter>

      <Suspense fallback={<h2>Loading.......</h2>}>
        <LoadData fetchUsers={fetchUsers}>

        </LoadData>
      </Suspense>
      
    </>
  )
}

export default App
