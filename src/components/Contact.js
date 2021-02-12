import React from "react";
import Image from "react-bootstrap/Image";
import { Card, CardDeck } from "react-bootstrap";
import "./Contact.css";

function Contact() {
  return (
    <div className="top-M">
      <div className="top-Img">
        <Image id="about_img" src="/images/banner3.jpg" fluid />
        <div className="centered">
          <h1>&#8610; OUR OFFICES &#8611;</h1>
        </div>
      </div>
      <div className="container">
        <h1
          style={{ textAlign: "center", color: "grey", marginBottom: "10px" }}
        >
          LOCATIONS
        </h1>
        <CardDeck>
          <Card>
            <iframe
              title="M. Saleh Port Harcourt Branch Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.7901461530405!2d7.006547014090289!3d4.8060576420748395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cd420e2e6893%3A0x69c015f9d4ef1544!2sM.SALEH%20%26%20COMPANY%20LIMITED!5e0!3m2!1sen!2sng!4v1609329628069!5m2!1sen!2sng"
              width="auto"
              height="250"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
            <Card.Body>
              <Card.Text
                style={{
                  color: "red",
                  fontWeight: "bold",
                  marginBottom: "5px",
                }}
              >
                HEAD OFFICE
              </Card.Text>
              <Card.Title>
                <strong>Port Harcourt Branch Office</strong>
              </Card.Title>
              <div className="l_content">
                <i className="material-icons">room</i>
                <Card.Text>
                  71, Aba Road, By Garrison junction, Port-Harcourt.
                </Card.Text>
              </div>
              <div className="l_content">
                <i className="material-icons">local_phone</i>
                <Card.Text>08033102102, 08155565556</Card.Text>
              </div>
              <div className="l_content">
                <i className="material-icons">local_post_office</i>
                <Card.Text>nabil@msalehgroup.com</Card.Text>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <iframe
              title="M. Saleh Abuja Branch Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1030620024308!2d7.472053314105188!3d9.054363291085899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b0eec6b1deb%3A0xf777545812da0ccd!2sM.Saleh%20And%20Company%20Limited!5e0!3m2!1sen!2sng!4v1609330914534!5m2!1sen!2sng"
              width="auto"
              height="250"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
            <Card.Body>
              <Card.Title>
                <strong>Abuja Branch Office</strong>
              </Card.Title>
              <div className="l_content">
                <i className="material-icons">room</i>
                <Card.Text>
                  Olu Obasanjo Street, Central Area Plot 989
                </Card.Text>
              </div>
              <div className="l_content">
                <i className="material-icons">local_phone</i>
                <Card.Text>08061193232, 07015843893</Card.Text>
              </div>
              <div className="l_content">
                <i className="material-icons">local_post_office</i>
                <Card.Text>abuja@msalehgroup.com</Card.Text>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <iframe
              title="M. Saleh Calabar Branch Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.868438552538!2d8.354899314090522!3d4.961530340723789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106787d79a333aab%3A0xf81c552d4f4328f7!2sM%20Saleh%20Group!5e0!3m2!1sen!2sng!4v1609331488128!5m2!1sen!2sng"
              width="auto"
              height="250"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
            <Card.Body>
              <Card.Title>
                <strong>Calabar Branch Office</strong>
              </Card.Title>
              <div className="l_content">
                <i className="material-icons">room</i>
                <Card.Text>Free Trade Zone Plot b32 - cftz</Card.Text>
              </div>
              <div className="l_content">
                <i className="material-icons">local_phone</i>
                <Card.Text>08054006527, 07015843888</Card.Text>
              </div>
              <div className="l_content">
                <i className="material-icons">local_post_office</i>
                <Card.Text>calabar@msalehgroup.com</Card.Text>
              </div>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
      <div className="container">
        <CardDeck>
          <Card>
            <iframe
              title="M. Saleh Lagos Branch Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4067773351835!2d3.5779206140939297!3d6.470045925579105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf73459782bc7%3A0x7bb71348f01a7dd1!2sM.%20Saleh%20%26%20Co%20Ltd!5e0!3m2!1sen!2sng!4v1609336999256!5m2!1sen!2sng"
              width="auto"
              height="250"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
            <Card.Body>
              <Card.Title>
                <strong>Lagos Branch Office</strong>
              </Card.Title>
              <div className="l_content">
                <i className="material-icons">room</i>
                <Card.Text>10/12 Warehouse Road, Apapa, Lagos</Card.Text>
              </div>
              <div className="l_content">
                <i className="material-icons">local_phone</i>
                <Card.Text>08037088948, 07055117777</Card.Text>
              </div>
              <div className="l_content">
                <i className="material-icons">local_post_office</i>
                <Card.Text>lagos@msalehgroup.com</Card.Text>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <iframe
              title="M. Saleh Kano Branch Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.5061518636458!2d8.545571314126368!3d12.00863523852516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae811570d0db5b%3A0xd592e77d4982f9fb!2sM.%20Saleh%20and%20Co.%20Ltd!5e0!3m2!1sen!2sng!4v1609341400837!5m2!1sen!2sng"
              width="auto"
              height="250"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
            <Card.Body>
              <Card.Title>
                <strong>Kano Branch Office</strong>
              </Card.Title>
              <div className="l_content">
                <i className="material-icons">room</i>
                <Card.Text>147B Muritala Mohammed Way, Kano</Card.Text>
              </div>
              <div className="l_content">
                <i className="material-icons">local_phone</i>
                <Card.Text>08037777796, 07015843856</Card.Text>
              </div>
              <div className="l_content">
                <i className="material-icons">local_post_office</i>
                <Card.Text>kano@msalehgroup.com</Card.Text>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <iframe
              title="M. Saleh Warri Branch Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.987351057773!2d5.772268714091647!3d5.568886535069906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1041ada9a1f2e3b7%3A0x5462bf7d7460f801!2skm%201%20Refinery%20Road%2C%20Effurun%2C%20Warri!5e0!3m2!1sen!2sng!4v1609341720318!5m2!1sen!2sng"
              width="auto"
              height="250"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
            <Card.Body>
              <Card.Title>
                <strong>Warri Branch Office</strong>
              </Card.Title>
              <div className="l_content">
                <i className="material-icons">room</i>
                <Card.Text>
                  KM 1, Refinery Road, After Casa De Pedro Hotel, Warri, Delta
                  State
                </Card.Text>
              </div>
              <div className="l_content">
                <i className="material-icons">local_phone</i>
                <Card.Text>08033102102, 08155565556</Card.Text>
              </div>
              <div className="l_content">
                <i className="material-icons">local_post_office</i>
                <Card.Text>nabil@msalehgroup.com</Card.Text>
              </div>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
      {/* <div className="container">
        <h1
          style={{ textAlign: "center", color: "grey", marginBottom: "10px" }}
        >
          CONTACT US
        </h1>
      </div> */}
    </div>
  );
}

export default Contact;
