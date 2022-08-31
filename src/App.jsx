import Nav from './Nav'
import Home from './Home'
import About from './About'
import Services from './Services'

export default function App() {
    return(
        <div className="app">
            <Nav/>
            <Home/>
            <About/>
            <Services/>
        </div>
    )
}