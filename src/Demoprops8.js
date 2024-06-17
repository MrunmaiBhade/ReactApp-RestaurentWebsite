import React from 'react';
import p1 from "./images/p1.jpeg"


export default function Demoprops8({ onClose, props }) {
    return (
        <div className="modal" id="myModal">
            <div className="modal-dialog modal-lg"> {/* Added modal-lg class for large size */}
                <div className="modal-content" style={{ overflow: 'hidden' }}> {/* Added overflow: hidden */}
                    {/* <!-- Modal Header --> */}
                    <div className="modal-header">
                        <img src={p1} style={{ height: "60px", width: "60px", marginLeft: "-10px", borderRadius: "20px" }} />
                        <h4 className="modal-title" style={{ marginLeft: "20px" }}>Kadhai Panner</h4>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <div className="modal-body">
                        This is Kadhai Panner receipe.
                    </div>
                    {/* <!-- Modal footer --> */}
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" onClick={onClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
