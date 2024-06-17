import React, { Component } from 'react';

export default class DemoProps3 extends Component {
    render() {
        return (
            <div className="card" style={{ width: "250px", height: "320px", display: "flex", justifyContent: "center", alignItems: "center", margin: "20px", position: "relative" }}>
                <img className="card-img-top" id="first" src={this.props.i1} alt="Card image" style={{ width: "200px", height: "200px", borderRadius: "100%", marginTop: "10px" }} />
                <div className="card-body">
                    <h4 className="card-title">{this.props.h}</h4>
                    <p className="card-text">{this.props.p}</p>
                </div>
                <div className="one">
                    <div style={{ width: "50px", height: "50px", borderRadius: "100%", backgroundColor: "orange" }}>
                        <img src={this.props.i2} style={{ height: "30px", width: "30px", marginTop: "10px", marginLeft: "10px" }} href="www.gmail.com" />
                    </div>

                    <div style={{ width: "50px", height: "50px", borderRadius: "100%", backgroundColor: "orange" }}>
                        <img src={this.props.i3} style={{ height: "30px", width: "30px", marginTop: "10px", marginLeft: "10px" }} href="www.facebook.com" />
                    </div>

                    <div style={{ width: "50px", height: "50px", borderRadius: "100%", backgroundColor: "orange" }}>
                        <img src={this.props.i4} style={{ height: "30px", width: "30px", marginTop: "10px", marginLeft: "10px" }} href="www.youtube.com" />
                    </div>
                    {/* Add more icons as needed */}
                </div>
            </div>
        );
    }
}
