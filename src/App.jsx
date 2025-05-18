import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from "./components/MyButton.jsx";
import Header from "./components/Header.jsx";
import About from "./components/about.jsx";
import Projects from "./components/project.jsx";
import Contact from "./components/contact.jsx";
import Footer from "./components/footer.jsx";


function App() {
  //   const name = "John Doe"
  //   const profession = "Full Stack Developer"
  //   const projects = [
  //       {
  //           "title" : "Project One",
  //           description: "A web application built using react and nodejs",
  //           link: "#"
  //       },
  //       {
  //           "title" : "Project Two",
  //           description: "A ecommerce application built using java and react and nodejs",
  //           link: "#"
  //       }
  //   ]
  //
  //
  // return (
  //     <div className="App">
  //
  //         <Header name={name} profession={profession} />
  //
  //         {/*{About section}*/}
  //         <About name={name}  profession={profession} />
  //
  //
  //     {/*    Projects section*/}
  //        <Projects projects={projects} />
  //
  //     {/*    Contact section*/}
  //       <Contact/>
  //
  //
  //         {/*Footer section*/}
  //       <Footer/>
  //     </div>
  //
  // )

    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const incrementCount = () => {
        setCount(count + step)
    };

    const decrementCount = () => {
        setCount(count - step)
    };

    return (
        <div className="app-container">
            <h1>Counter Value: {count}</h1>
            <input type='number' value={step} onChange={(e) => setStep(parseInt(e.target.value))}/>
            <button onClick={ incrementCount}>
                Increment Count
            </button>
            <button onClick={ decrementCount}>
                Decrement Count
            </button>
        </div>
    )

}

export default App
