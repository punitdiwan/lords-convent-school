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


const ContactUsForm = () => {
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
        } else if (name.trim().length < 3) {
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
        } else if (mobile.trim().length !== 10) {
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






        </>
    );
};

export default ContactUsForm;