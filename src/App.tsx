import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Component/Home/Home";
import MovieCard from "./Component/Movie-card/Movie_card";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Home />
        </>
    );
}

export default App;
