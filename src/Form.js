import React, { useState } from 'react'

export default function Form() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [date, setdate] = useState("");
    const [people, setpeople] = useState("");
    const [area, setarea] = useState("");

    let xyz = (e) => {
        e.preventDefault();
        document.getElementById("one").innerHTML = `Customer Name: ${name}`;
        document.getElementById("two").innerHTML = `Customer email: ${email}`;
        document.getElementById("three").innerHTML = `Date of Booking: ${date}`;
        document.getElementById("four").innerHTML = `No of People:${people}`;
        document.getElementById("five").innerHTML = `Message: ${area}`;
    }
    return (
        <>
            <form>
                <input type="text" placeholder="Your Name" onChange={(e) => setname(e.target.value)} />
                <input type="email" placeholder="Your Email" onChange={(e) => setemail(e.target.value)} />
                <input type="date" placeholder="Date & Time" onChange={(e) => setdate(e.target.value)} />

                <select onChange={(e) => setpeople(e.target.value)}>
                    <option>No of People</option>
                    <option>People 1</option>
                    <option>People 2</option>
                    <option>People 3</option>
                </select>

                <input type="textarea" rows="10" cols="30" placeholder="Special Request" style={{ display: "block" }} onChange={(e) => setarea(e.target.value)} />
                <button onClick={xyz}>BOOK NOW</button>
            </form>
        </>
    )
}
