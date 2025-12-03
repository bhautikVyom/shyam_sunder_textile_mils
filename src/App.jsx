import { useEffect, useState } from 'react'
import './App.css'
import Router from "./router/router";

function App() {

  const [isLaptop, setIsLaptop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsLaptop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let isLoggedIn = true

  return (
    <>
      {isLaptop ? <Router isLoggedIn={isLoggedIn} /> : <div className='flex justify-center items-center h-screen '>This website is accessible only on laptop and desktop devices.</div>}
    </>
  )
}

export default App
