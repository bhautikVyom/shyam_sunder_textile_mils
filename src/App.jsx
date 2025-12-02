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
      {isLaptop ? <Router isLoggedIn={isLoggedIn}/> : "this website is only for leptop screen"}
    </>
  )
}

export default App
