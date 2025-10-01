
import { ToastContainer } from 'react-toastify/unstyled'
import './App.css'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import IssuesContainer from './Components/IssuesContainer'
import { Suspense } from 'react'
import Footer from './Components/Footer'




const fetchIssues = async () => {
   const res = await fetch('/data.json')
   return res.json()

 }

function App() {
  const fetchPromise = fetchIssues()

  return (
    <>
    
      <header>
        <Navbar></Navbar>
      </header>
      <section>
        <Suspense fallback= {<span className="loading loading-spinner text-primary"></span>}>
          <IssuesContainer fetchPromise= {fetchPromise}></IssuesContainer>
        </Suspense>
      </section>
      <Footer></Footer>
      
    </>
  )
}
<ToastContainer></ToastContainer>
export default App
