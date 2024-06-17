import React, { useState } from 'react'
import a from "./images/businessman.png"
import b from "./images/fork-and-knife.png"
export default function LikeDislikeOnclick() {
    const [img1, setimg1] = useState(img1)
    let xyz = () => {
        setimg1({ b })
    }

    return (
        <div>
            <img src={img1} />

        </div>
    )
}
