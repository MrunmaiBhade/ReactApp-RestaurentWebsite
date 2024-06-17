import React from "react"
import ReactDOM from "react-dom"
import "./style.css"
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
import n from "./images/first-hotel.jpeg"
import o from "./images/second-hotel.jpeg"
import p from "./images/third-hotel.jpeg"
import q from "./images/forth-hotel.jpeg"
import r from "./images/hori.png"
import s from "./images/verti.png"
import t from "./images/tea-cup.png"
import u from "./images/burger.png"
import v from "./images/right-arrow.png"
import w from "./images/pin.png"
import x from "./images/phone-call.png"
import y from "./images/email.png"
import z from "./images/youtube.png"
import { abc, pqr, lmn, abc2, pqr2, lmn2 } from "./Main"
import DemoProps1 from "./DemoProps1"
import DemoProps2 from "./DemoProps2"
import Cardarray1 from "./Cardarray1"
import Cardarray2 from "./Cardarray2"
import DemoProps3 from "./DemoProps3"
import Cardarray3 from "./Cardarray3"
import DemoProps4 from "./DemoProps4"
import Cardarray4 from "./Cardarray4"
import DemoProps5 from "./DemoProps5"
import LikeDislikeOnclick from "./LikeDislikeOnclick"
import { abc1, abc3 } from "./Cardhover"
import { Image1 } from "./LikeDislikeOnclick"
import { count } from "./Main1"
import Demoprops6 from "./Demoprops6"
import Demoprops7 from "./Demoprops7"
import Form from "./Form"
import Navbar from "./Navbar"


ReactDOM.render(
  <>
    <div id="main">

      {/* first section of website */}
      <div id="first-page">

        <div id="navbar-area">
          {/*Navbar area website name */}
          <div className="navbar-heading">
            <h1 className="navbar-heading-h1">Restoran</h1>
            <span><img src={b} className="img2" /></span>
          </div>

          {/* navbar area list */}
          <div className="navbar-list">
            <Navbar />
          </div>
        </div>

        {/* actual home page area */}

        <div id="home-page">
          <div className="text1">
            <h1>Enjoy Our<br />Delicious<span> Meal</span></h1>
            <br />
            <p>Smallest directly families surprise honoured am an.<br /> Speaking replying mistress him numerous she returned feelings may day.<br />Evening way luckily son exposed get general greatly</p>
            <button >BOOK A TABLE</button>
          </div>


          <div className="image1">
            <img src={a} className="img1" />
          </div>

        </div>
      </div>



      {/* second actual page */}

      <div id="second-page">
        <div className="second-page-first">
          <DemoProps1 i11={c} h11="Master Chef" p11="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" i2={d} i3={e} i22={h} h22="Hello Master Chef" p22="Civility vicinity graceful is it at. Improve up at to on mention perhaps raising." i23={l} i24={m} />
        </div>


        <div className="second-page-second">
          <DemoProps1 i11={b} h11="Quality Food" p11="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" i2={d} i3={e} i22={i} h22="Hello Quality Food" p22="Civility vicinity graceful is it at. Improve up at to on mention perhaps raising." i23={l} i24={m} />
        </div>

        <div className="second-page-third">
          <DemoProps1 i11={f} h11="Online Store" p11="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" i2={d} i3={e} i22={j} h22="Hello Online Store" p22="Civility vicinity graceful is it at. Improve up at to on mention perhaps raising." i23={l} i24={m} />

        </div>

        <div className="second-page-forth">
          <DemoProps1 i11={g} h11="24/7 Service" p11="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" i2={d} i3={e} i22={k} h22="Hello customer " p22="Civility vicinity graceful is it at. Improve up at to on mention perhaps raising. " i23={l} i24={m} />

        </div>
      </div>



      {/* third page */}
      <div id="third-page">
        <div className="image2" >
          <img src={n} style={{ height: "240px", width: "260px", marginLeft: "30px", marginTop: "20px" }} />
          <img src={o} style={{ height: "180px", width: "180px", marginLeft: "305px", marginTop: "80px" }} />
          <img src={p} style={{ height: "180px", width: "180px", marginLeft: "110px", marginTop: "275px" }} />
          <img src={q} style={{ height: "240px", width: "260px", marginLeft: "305px", marginTop: "275px" }} />
        </div>


        <div className="text2">
          <h3>about Us<span><img src={r} style={{ width: "70px", marginLeft: "20px" }} /></span></h3>
          <h1 style={{ marginLeft: "25px" }}>Welcome to <span><img src={b} style={{ height: "50px", width: "60px" }} className="img5" /></span>Restoran</h1>
          <p styel={{ marginLeft: "25px" }}>Shewing met parties gravity husband sex pleased. On to no kind do next feel held walk. Last own loud and knew give gay four. Sentiments motionless<br /> or principles preference excellence am. Literature surrounded insensible at indulgence or to admiration remarkably. Matter future lovers desire marked boy use.</p>

          <div className="text2-main">
            <div className="text2-first">
              <img src={s} style={{ height: "80px", width: "60px" }} /><span className="num1"><Demoprops6 h11={15} /></span>
            </div>

            <div className="text2-second">
              <h5 style={{ color: "grey" }}>Years of <br />Experience</h5>
            </div>

            <div className="text2-third">
              <img src={s} style={{ height: "80px", width: "60px" }} /><span className="num2"><Demoprops7 h12={50} /></span>
            </div>

            <div className="text2-forth">
              <h5 style={{ color: "grey" }}>Popular <br />MASTER CHEFS</h5>
            </div>

          </div>

          <button className="btn">READ MORE</button>
        </div>
      </div>

      {/* forth page */}
      <div id="forth-page">
        {/* menu */}
        <div id="forth-page-first">
          <div id="a">
            <div className="aa" style={{ width: "33%", float: "left" }}><img src={r} style={{ width: "50px" }} /></div>
            <div className="aa" style={{ width: "33%", float: "left" }}><h6>Food Menu</h6></div>
            <div className="aa" style={{ width: "33%", float: "left" }}><img src={r} style={{ width: "50px" }} /></div>
          </div>

          <div id="b">
            <h1>Most Popular Items</h1>
          </div>

          <div id="c">
            <div className="cc1" style={{ display: "flex", justifyContent: "space-around", alignItems: "center", float: "left", margin: "20px" }} onClick={abc} onMouseOut={abc2}>
              <div className="ccc" style={{ display: "flex", justifyContent: "center" }} onClick={abc}><img src={t} style={{ width: "50px", height: "50px" }} /></div>
              <div className="ccc" style={{ display: "flex", alignItems: "center", flexDirection: "column" }}><p style={{ fontSize: "17px", color: "grey" }}>Popular</p><b>BreakFast</b></div>
            </div>

            <div className="cc2" style={{ display: "flex", justifyContent: "space-around", alignItems: "center", float: "left", margin: "20px" }} onClick={pqr} onMouseOut={pqr2}>
              <div className="ccc" style={{ display: "flex", justifyContent: "center" }}><img src={u} style={{ width: "50px", height: "50px" }} /></div>
              <div className="ccc" style={{ display: "flex", alignItems: "center", flexDirection: "column" }}><p style={{ fontSize: "17px", color: "grey" }}>Popular</p><b>BreakFast</b></div>
            </div>

            <div className="cc3" style={{ display: "flex", justifyContent: "space-around", alignItems: "center", float: "left", margin: "20px" }} onClick={lmn} onMouseOut={lmn2}>
              <div className="ccc" style={{ display: "flex", justifyContent: "center" }}><img src={b} style={{ width: "50px", height: "50px" }} /></div>
              <div className="ccc" style={{ display: "flex", alignItems: "center", flexDirection: "column" }}><p style={{ fontSize: "17px", color: "grey" }}>Popular</p><b>BreakFast</b></div>
            </div>

          </div>


        </div>
        <div id="forth-page-second">
          <div className="forth-page-second-first">
            {Cardarray1.slice(0, 6).map((v, index) => (
              <DemoProps2 key={index} i={v.logo} h={v.head} p={v.para} l={v.price} />
            ))}
          </div>
          <div className="forth-page-second-second">
            {Cardarray1.slice(6, 12).map((v, index) => (
              <DemoProps2 key={index} i={v.logo} h={v.head} p={v.para} l={v.price} />
            ))}
          </div>
        </div>



      </div >


      {/* fifth page */}
      <div id="fifth-page">
        <div className="fifth-page-first" style={{ paddingTop: "140px", paddingLeft: "80px" }}>
          <h2 id="one" style={{ color: "white" }}></h2><br /><br />
          <h2 id="two" style={{ color: "white" }}></h2><br /><br />
          <h2 id="three" style={{ color: "white" }}></h2><br /><br />
          <h2 id="four" style={{ color: "white" }}></h2><br /><br />
          <h2 id="five" style={{ color: "white" }}></h2><br /><br />
        </div>

        <div className="fifth-page-second">
          <h4>Reservation<span><img src={r} style={{ width: "60px", marginLeft: "10px" }} /></span></h4>
          <h1>Book A Table Online</h1>
          <Form />
        </div>

      </div>

      {/* sixth page */}
      <div id="sixth-page">
        <div id="sixth-page-first">
          <img src={r} style={{ width: "60px" }} />
          <h6>Team Members</h6>
          <img src={r} style={{ width: "60px" }} />
        </div>

        <div id="sixth-page-second">
          <h1>Our Master Chefs</h1>
        </div>

        <div id="sixth-page-third">
          {
            Cardarray2.map((v, index) => (
              <DemoProps3 key={index} i1={v.img} h={v.head} p={v.para} i2={v.img2} i3={v.img3} i4={v.img4}
              />
            ))
          }



        </div>




      </div>

      {/* seventh page */}
      <div id="seventh-page">
        <div id="seventh-page-first">
          <img src={r} style={{ width: "60px", marginLeft: "10px" }} />
          <h6 style={{ marginLeft: "10px", marginRight: "10px" }}>Testimonials</h6>
          <img src={r} style={{ width: "60px" }} />
        </div>

        <div id="seventh-page-second">
          <h1>Our Client Says</h1>
        </div>

        <div id="seventh-page-third">
          <DemoProps4 i1={Cardarray3[0].img1} i2={Cardarray3[0].img2} p1={Cardarray3[0].para1} p2={Cardarray3[0].para2} h={Cardarray3[0].head} />
          <DemoProps4 i1={Cardarray3[1].img1} i2={Cardarray3[1].img2} p1={Cardarray3[1].para1} p2={Cardarray3[1].para2} h={Cardarray3[1].head} />
          <DemoProps4 i1={Cardarray3[2].img1} i2={Cardarray3[2].img2} p1={Cardarray3[2].para1} p2={Cardarray3[2].para2} h={Cardarray3[2].head} />

        </div>
      </div>
      {/* eigth page */}

      <div id="eigth-page">
        <div className="eigth-page-first">
          <h6>Company<span><img src={r} style={{ width: "60px", marginLeft: "10px" }} /></span></h6>
          <p><span><img src={v} style={{ width: "17px", height: "17px" }} /></span>About Us</p>
          <p><span><img src={v} style={{ width: "17px", height: "17px" }} /></span>Contact Us</p>
          <p><span><img src={v} style={{ width: "17px", height: "17px" }} /></span>Reservation</p>
          <p><span><img src={v} style={{ width: "17px", height: "17px" }} /></span>Privacy Policy</p>
          <p><span><img src={v} style={{ width: "17px", height: "17px" }} /></span>Terms & Condition</p>
          <hr style={{ width: "340px", color: "white", marginTop: "50px" }} />
        </div>


        <div className="eigth-page-second">
          <h6>Contact<span><img src={r} style={{ width: "60px", marginLeft: "10px" }} /></span></h6>
          <p style={{ display: "inline-block" }}><span> <img src={w} style={{ width: "15px", height: "15px", marginLeft: "20px" }} /></span>123 Street, New York, USA</p>
          <p style={{ display: "inline-block" }}><span> <img src={x} style={{ width: "15px", height: "15px", marginLeft: "20px" }} /></span>+01234567890</p>
          <p style={{ display: "inline-block" }}><span> <img src={y} style={{ width: "15px", height: "15px", marginLeft: "20px" }} /></span>info @example.com</p>


          <div style={{ display: "flex", marginLeft: "20px" }}>
            <div style={{ height: "35px", width: "35px", float: "left", borderRadius: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginRight: "10px" }}>
              <img src={w} style={{ width: "25px", height: "25px" }} />
            </div>
            <div style={{ height: "35px", width: "35px", float: "left", borderRadius: "100% white", display: "flex", justifyContent: "center", alignItems: "center", marginRight: "10px" }}>
              <img src={x} style={{ width: "25px", height: "25px" }} />
            </div>

            <div style={{ height: "35px", width: "35px", float: "left", borderRadius: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginRight: "10px" }}>
              <img src={z} style={{ width: "25px", height: "25px" }} />
            </div>

            <div style={{ height: "35px", width: "35px", float: "left", borderRadius: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img src={y} style={{ width: "25px", height: "25px" }} />
            </div>

          </div>
          <hr style={{ width: "340px", color: "white", marginTop: "106px" }} />


        </div>





        <div className="eigth-page-third">
          <h6>Opening<span><img src={r} style={{ width: "60px", marginLeft: "10px" }} /></span></h6>
          <h5>Monday-Saturday</h5>
          <p style={{ fontSize: "18px" }}>09AM-09PM</p>
          <br />
          <h5>Sunday</h5>
          <p>10 AM- 08PM</p>
          <hr style={{ width: "340px", color: "white", marginTop: "122px" }} />
        </div>

        <div className="eigth-page-forth">
          <h6>Newsletter<span><img src={r} style={{ width: "60px", marginLeft: "10px" }} /></span></h6>
          <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <input type="email" placeholder="Your email" /><button className="btn">SIGN UP</button>
          <hr style={{ width: "340px", color: "white", marginTop: "120px" }} />
        </div>

      </div>

      {/* ninth page */}
      <div id="ninth-page">
        <div className="ninth-page-first">


          <p>&copy; <u>Your Site Name</u>,All Rights Reserved.Designed by<u>HTML Codex</u></p>
          <br /><br />
          <p>Distributed by<u>ThemeWagon</u></p>
        </div>

        <div className="ninth-page-second">
          <div><p>Home</p></div>
          <div><p>Cookies</p></div>
          <div><p>Help</p></div>
          <div><p>FQAs</p></div>
        </div>
      </div>

















    </div >
















































































  </>,
  document.getElementById("root")




















)
