import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

import data from "./data.js";


export default function App() {

    const cards = data.map(card => {
        return <Card
            {...card}
        />
    })

    return (
        <div>
            <Navbar />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}