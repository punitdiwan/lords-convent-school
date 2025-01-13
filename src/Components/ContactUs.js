import React, { useState } from "react";
import "./css/ContactUs.css";
import { useToasts } from "react-toast-notifications";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faUser,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FaPhoneAlt } from "react-icons/fa";

const ContactUs = () => {
  const [disable, setDisable] = useState(false);

  const { addToast } = useToasts();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const [nameErr, setNameErr] = useState({});
  const [emailErr, setEmailErr] = useState({});
  const [mobileErr, setMobileErr] = useState({});
  const [messageErr, setMessageErr] = useState({});

  var pattern = new RegExp(/^[0-9\b]+$/);

  const submit = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      fetch(
        "https://cms.maitretech.com/lords-convent-school/items/contact_form?fields=*.*.*",
        {
          method: "POST",
          body: JSON.stringify({ full_name: name, email, mobile, message }),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      )
        .then((response) => {
          response.json();
          if (response.status === 200) {
            setName("");
            setEmail("");
            setMobile("");
            setMessage("");
          }
        })
        .then((json) =>
          addToast("form submitted Sucessfully", {
            appearance: "success",
            autoDismiss: true,
          })
        )
        .catch((err) => console.log(err));
    }
  };

  const formValidation = () => {
    const nameErr = {};
    const emailErr = {};
    const mobileErr = {};
    const messageErr = {};
    let isValid = true;

    if (name === "") {
      nameErr.firstNameEmpty = "Name is required";
      isValid = false;
    } else if (name.trim().length < 5) {
      nameErr.firstNameShort = "Full name is too short";
      isValid = false;
    }
    if (email === "") {
      emailErr.emailEmpty = "Email is required";
      isValid = false;
    } else if (!email.includes("@")) {
      emailErr.emailerror = "You have entered a wrong email";
      isValid = false;
    }
    if (mobile === "") {
      mobileErr.mobileEmpty = "Contact is required";
      isValid = false;
    } else if (!pattern.test(mobile)) {
      mobileErr.mobilenumbershort = "Mobile number should be numeric";
      isValid = false;
    } else if (mobile.trim().length != 10) {
      mobileErr.mobilenumbershort = "Mobile number should be of ten digit";
      isValid = false;
    }
    if (message === "") {
      messageErr.messageEmpty = "Message is required";
      isValid = false;
    } else if (message.trim().length < 5) {
      messageErr.mobilenumbershort = "Message length should be 5 words or more";
      isValid = false;
    }
    setNameErr(nameErr);
    setEmailErr(emailErr);
    setMobileErr(mobileErr);
    setMessageErr(messageErr);
    return isValid;
  };


  return (
    <>
      <div className="container-fluid p-4">

        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.1442205288554!2d77.36586567532139!3d23.274208778998197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c67dd69b6896d%3A0x373f6df6f1a1f64!2sLord&#39;s%20Convent%20School!5e0!3m2!1sen!2sin!4v1735627553130!5m2!1sen!2sin"
            style={{
              width: "100%",
              height: "200px",
              border: "5px solid black",
              borderRadius: "10px",
              marginTop: "25px"
            }} allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>
        <div className="container-fluid d-flex latest_card_box_ad p-0">
          <div className="contactleft map text-center">


            <div className="emailus">
              <h5>
                <span>|&nbsp;</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{ width: "25px", color: "white" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                &nbsp; Connect with us
              </h5>
              <div className="" id="contact-bottom">
                <div className="mb-2 input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                  </div>

                  <input
                    name="name"
                    type="text"
                    id="txtname1"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    className="form-control"
                    style={{
                      fontSize: "22px"
                    }}
                  />
                </div>
                {Object.keys(nameErr).map((key) => {
                  return (
                    <div
                      style={{
                        color: "red",
                        fontWeight: "700",
                        fontSize: "15px",
                      }}
                    >
                      {nameErr[key]}
                    </div>
                  );
                })}
              </div>
              <div className="" id="contact-bottom">
                <div className="mb-2 input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                  </div>

                  <input
                    name="email"
                    type="text"
                    id="txtname2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email@gmail.com"
                    className="form-control"
                  />
                </div>
                {Object.keys(emailErr).map((key) => {
                  return (
                    <div
                      style={{
                        color: "red",
                        fontWeight: "700",
                        fontSize: "15px",
                      }}
                    >
                      {emailErr[key]}
                    </div>
                  );
                })}
              </div>
              <div className="" id="contact-bottom">
                <div className="mb-2 input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <FaPhoneAlt />
                    </div>
                  </div>

                  <input
                    name="mobile"
                    type="text"
                    id="txtname3"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="Contact Number"
                    className="form-control"
                  />
                </div>
                {Object.keys(mobileErr).map((key) => {
                  return (
                    <div
                      style={{
                        color: "red",
                        fontWeight: "700",
                        fontSize: "15px",
                      }}
                    >
                      {mobileErr[key]}
                    </div>
                  );
                })}
              </div>
              <div className="" id="contact-bottom">
                <div className="mb-2 input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <FontAwesomeIcon icon={faComment} />
                    </div>
                  </div>

                  <input
                    name="message"
                    type="text"
                    id="txtname4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your Message"
                    className="form-control"
                  />
                </div>
                {Object.keys(messageErr).map((key) => {
                  return (
                    <div
                      style={{
                        color: "red",
                        fontWeight: "700",
                        fontSize: "15px",
                      }}
                    >
                      {messageErr[key]}
                    </div>
                  );
                })}
              </div>


              {/* <br /> */}
              <div className="text-center">
                <button
                  type="submit"
                  name="submit"
                  onClick={submit}
                  // disabled={!disable}
                  value="send"
                  id="btnsubmit1"
                  className="py-2 btn btn-info btn-block rounded-0"
                  style={{ backgroundColor: "#94d1f5", color: "black" }}
                >
                  send
                </button>
              </div>
            </div>

          </div>

          <div className="contactright text-left">
            <div className="titlecontact">
              <h4 className="ssss">School</h4>
              <hr />
              <p className="linkwrap"><b className="bbb">Phone:</b> <a className="linkwrap mnc" href="tel:+91 87704 07585">+91 87704 07585</a> , <a className="linkwrap mnc" href="tel:+91 89627 56297">+91 89627 56297</a></p>
              <p className="linkwrap"><b className="bbb">Address:</b> <a className="linkwrap mnc" >Near vijay nagar Vallabh nagar lalghati bhopal, (M.P) 462030</a> </p>
              <p className="linkwrap"><b className="bbb">Email:</b> <a className="linkwrap mnc" href="mailto:lords_school@rediffmail.com">lords_school@rediffmail.com</a> </p>
              {/* <p className="linkwrap"><b className="bbb">Website:</b> <a className="linkwrap mnc" href="">
            www.npsbhopal.com</a> </p> */}


            </div>

          </div>
        </div>
      </div>

    </>
  );
};

export default ContactUs;
