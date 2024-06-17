import React from 'react'
import "./style.css"

export default function Demopropsform() {
    return (
        <>
            <form>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <input type="date" placeholder="Date & Time" value="Date & Time" />

                <select placeholder="No of People">
                    <option>No of People</option>
                    <option>People 1</option>
                    <option>People 2</option>
                    <option>People 3</option>
                </select>

                <input type="textarea" rows="10" cols="30" placeholder="Special Request" style={{ display: "block" }} />
                <button>BOOK NOW</button>
            </form>
        </>
    )
}
