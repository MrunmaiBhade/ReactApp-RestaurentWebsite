import React, { useState } from 'react'
import a from "./images/main-image.png"
import b from "./images/fork-and-knife.png"
import c from "./images/businessman.png"
import d from "./images/like.png"
import e from "./images/dislike.png"
import f from "./images/grocery-store.png"
import g from "./images/headphones.png"
import h from "./images/businessman1.png"
import i from "./images/knife-and-fork1.png"
import j from "./images/grocery-store1.png"
import k from "./images/headphones1.png"
import l from "./images/like1.png"
import m from "./images/dislike1.png"

export default function DemoProps1(props) {
    const [image1, setImage1] = useState(props.i11);
    const [head, sethead] = useState(props.h11);
    const [para, setpara] = useState(props.p22);
    const [image2, setImage2] = useState(props.i2);
    const [image3, setImage3] = useState(props.i3)
    const [back, setback] = useState("white")
    const [like, setlike] = useState(0)
    const [dislike, setdislike] = useState(0)

    const handleMouseOver = () => {
        sethead(props.h22);
        setpara(props.p22);
        setImage1(props.i22);
        setback("orange");
        setImage2(props.i23)
        setImage3(props.i24)

    };

    const handleMouseOut = () => {
        sethead(props.h11);
        setpara(props.p11);
        setImage1(props.i11);
        setback("white");
        setImage2(props.i2)
        setImage3(props.i3)
    };

    const xyz = () => {
        setlike(like + 1)
    }
    const hjj = () => {
        setdislike(dislike + 1)
    }

    return (
        <>
            <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{ backgroundColor: back, height: "280px", borderRadius: "4px" }}>
                <img src={image1} style={{ height: "50px", width: "60px", marginTop: "30px", marginLeft: "20px" }} /><br /><br />
                <h2 style={{ marginLeft: "15px", marginTop: "25px", fontFamily: "Nunito,san-serif", fontWeight: "800", fontSize: "25px" }}>{head}</h2>
                <p style={{ marginLeft: "15px", fontFamily: "Noto,san-serif", fontSize: "18px", color: "#4b4a4a", fontWeight: "510" }}>{para}</p>
                <img src={image2} style={{ height: "30px", width: "30px", marginLeft: "20px", marginTop: "-20px" }} onClick={xyz} /><span><h6 style={{ marginTop: "-28px", marginLeft: "60px" }}>{like}</h6></span>
                <img src={image3} style={{ height: "30px", width: "30px", marginLeft: "200px", marginTop: "-60px" }} onClick={hjj} /><span><h6 style={{ marginTop: "-52px", marginLeft: "170px" }}>{dislike}</h6></span>

            </div>
        </>
    )
}
