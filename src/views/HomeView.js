import NavBar from '../components/NavBar';
import Home from '../components/Home';
import About from  '../components/About'
import Works from '../components/Works';
import Contact from '../components/Contact';

function HomeView() {
    return (
        <div>
            <NavBar />
            <Home />
            <About />
            <Works />
            <Contact />
        </div>
    )
}

export default HomeView