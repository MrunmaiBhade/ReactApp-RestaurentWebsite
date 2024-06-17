import React from 'react';
import "./style.css";
import ReactDOM from "react-dom";

const abc = () => {
    document.getElementsByClassName("cc1")[0].style.borderBottomColor = "orange";
    document.getElementsByClassName("cc1")[0].style.borderBottomStyle = "solid";
    document.getElementsByClassName("cc1")[0].style.borderBottomWidth = "3px";

    document.getElementsByClassName("cc2")[0].style.borderBottomColor = "white";
    document.getElementsByClassName("cc2")[0].style.borderBottomStyle = "solid";
    document.getElementsByClassName("cc2")[0].style.borderBottomWidth = "3px";

    document.getElementsByClassName("cc3")[0].style.borderBottomColor = "white";
    document.getElementsByClassName("cc3")[0].style.borderBottomStyle = "solid";
    document.getElementsByClassName("cc3")[0].style.borderBottomWidth = "3px";
}

const pqr = () => {
    document.getElementsByClassName("cc2")[0].style.borderBottomColor = "orange";
    document.getElementsByClassName("cc2")[0].style.borderBottomStyle = "solid";
    document.getElementsByClassName("cc2")[0].style.borderBottomWidth = "3px";

    document.getElementsByClassName("cc1")[0].style.borderBottomColor = "white";
    document.getElementsByClassName("cc1")[0].style.borderBottomStyle = "solid";
    document.getElementsByClassName("cc1")[0].style.borderBottomWidth = "3px";

    document.getElementsByClassName("cc3")[0].style.borderBottomColor = "white";
    document.getElementsByClassName("cc3")[0].style.borderBottomStyle = "solid";
    document.getElementsByClassName("cc3")[0].style.borderBottomWidth = "3px";
}

const lmn = () => {
    document.getElementsByClassName("cc3")[0].style.borderBottomColor = "orange";
    document.getElementsByClassName("cc3")[0].style.borderBottomStyle = "solid";
    document.getElementsByClassName("cc3")[0].style.borderBottomWidth = "3px";

    document.getElementsByClassName("cc2")[0].style.borderBottomColor = "white";
    document.getElementsByClassName("cc2")[0].style.borderBottomStyle = "solid";
    document.getElementsByClassName("cc2")[0].style.borderBottomWidth = "3px";

    document.getElementsByClassName("cc1")[0].style.borderBottomColor = "white";
    document.getElementsByClassName("cc1")[0].style.borderBottomStyle = "solid";
    document.getElementsByClassName("cc1")[0].style.borderBottomWidth = "3px";
}

const abc2 = () => {
    document.getElementsByClassName("cc1")[0].style.borderBottomColor = "white";
    document.getElementsByClassName("cc1")[0].style.borderBottomStyle = "solid";
    document.getElementsByClassName("cc1")[0].style.borderBottomWidth = "3px";
}
const pqr2 = () => {
    document.getElementsByClassName("cc2")[0].style.borderBottomColor = "white";
    document.getElementsByClassName("cc2")[0].style.borderBottomStyle = "solid";
    document.getElementsByClassName("cc2")[0].style.borderBottomWidth = "3px";
}
const lmn2 = () => {
    document.getElementsByClassName("cc3")[0].style.borderBottomColor = "white";
    document.getElementsByClassName("cc3")[0].style.borderBottomStyle = "solid";
    document.getElementsByClassName("cc3")[0].style.borderBottomWidth = "3px";
}

const xyz = () => {
    const c = document.getElementById("c");
    c.style.display = "block";
}

export { abc, pqr, lmn, abc2, xyz, pqr2, lmn2 };
