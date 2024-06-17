export default function DemoProps4(props) {
    return (
        <div className="card" id="card" style={{ width: "330px", height: "320px", marginTop: "30px", marginLeft: "20px" }}>
            <img className="card-img-top" src={props.i1} alt="Image 1" style={{ width: "40px", height: "40px", margin: "20px" }} />
            <div className="card-body">
                <p className="card-text" style={{ marginTop: "-20px" }}>{props.p1}</p>
                <div style={{ overflow: "hidden" }}> {/* Adding overflow: hidden to clear floats */}
                    <img src={props.i2} style={{ height: "60px", width: "60px", borderRadius: "100%" }} />
                    <h4 className="card-title" style={{ display: "inline-block", marginBottom: "0", marginLeft: "20px" }}>{props.h}</h4>

                </div>
                <p className="card-text d-inline" style={{ marginLeft: "80px", marginTop: "-10px" }} >{props.p2}</p>
            </div>
        </div>


    );
}
