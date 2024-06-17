import React from 'react'

export default function DemoProps5(props) {
    return (
        <>
            <div style={{ width: "250px", height: "320px", display: "none", backgroundColor: "white" }} className="vsc">
                <div style={{ backgroundColor: "orange", width: "40px", height: "40px", borderRadius: "100%" }}>
                    <img src={props.i1} />
                </div>

                <div style={{ backgroundColor: "orange", width: "40px", height: "40px", borderRadius: "100%" }}>
                    <img src={props.i2} />
                </div>

                <div style={{ backgroundColor: "orange", width: "40px", height: "40px", borderRadius: "100%" }}>
                    <img src={props.i3} />
                </div>


            </div>
        </>
    )
}

