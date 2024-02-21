import { useEffect, useState } from 'react'
import Axios from 'axios'

const Facts = () => {
    const [quotes, setQuotes] = useState("");

    const fetchFact = () => {
      Axios.get("https://catfact.ninja/fact").then((res) => {
        setQuotes(res.data.fact);
    });
    }
  
    useEffect(() => {
      fetchFact();
  }, []);
  
  return (
    <div className="facts flex flex-col items-center justify-center bg-white shadow-xl" style={{ height: "calc(70vh - 30px)" }}>
        <h1 className="text-3xl capitalize font-bold mb-6">Facts about cats</h1>
         <h2 className="text-2xl text-wrap text-gray font mb-6">"{quotes}"</h2>
      <button className="px-4 py-2 mb-6 bg-blue-500 text-white rounded hover:bg-black focus:outline-none text-lg" onClick={fetchFact}>Generate a cat fact</button>
     
    </div>
  )
}

export default Facts