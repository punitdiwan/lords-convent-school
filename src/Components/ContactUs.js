import React from "react";
import "./css/ContactUs.css";
import ContactUsForm from "./ContactUsForm";

const ContactUs = () => {


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


            <ContactUsForm />

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
