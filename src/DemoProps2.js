import React, { useState } from 'react';
import Demoprops8 from './Demoprops8';

export default function DemoProps2(props) {
    const [modalVisible, setModalVisible] = useState(false);

    const showModal = () => {
        setModalVisible(true);
    }

    const hideModal = () => {
        setModalVisible(false);
    }

    return (
        <>
            <div style={{ width: "500px", display: "flex", flexDirection: "row", justifyContent: "space-around", margin: "30px" }}>
                <img className="card-img-top" src={props.i} alt="Card image" style={{ width: "80px", height: "80px", marginRight: "20px", marginTop: "8px", marginLeft: "10px" }} />
                <div className="card-body" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "baseline", marginBottom: "10px" }}>
                        <h4 className="card-title" style={{ margin: "0", marginRight: "10px", fontSize: "22px" }}>{props.h}</h4>

                        <h4 style={{ margin: "0", marginLeft: "auto", color: "#fda90d" }}>{props.l}</h4>
                        <button className="btn " style={{ height: "30px", width: "100px", marginTop: "10px", marginLeft: "20px", backgroundColor: "#fda90d", color: "white", fontWeight: "500" }} onClick={showModal} >Click Me</button>
                    </div>
                    <hr style={{ width: "100%", color: "grey", marginTop: "0px" }} />
                    <p className="card-text" style={{ fontSize: "16px", marginTop: "-4px" }}><i>{props.p}</i></p>
                </div>
            </div>

            {modalVisible &&
                <Demoprops8 onClose={hideModal} />
            }
        </>
    )
}
