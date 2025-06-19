import React from "react";

const ContactContents = () => {
  return (
    <>
      {/* Subpage Header Start */}
      <div className="subpage-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* Sub page Header start */}
              <div className="subpage-header-box">
                <h1 className="text-anime-style-3">Contact Us</h1>
                <ol className="breadcrumb wow fadeInUp">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>contact us</li>
                </ol>
              </div>
              {/* Sub page Header End */}
            </div>
          </div>
        </div>
      </div>
      {/* Subpage Header End */}
      {/* Google Map starts */}
      <div className="google-map">
        <div className="container-fluid">
          <div className="row no-gutters">
            <div className="col-md-12">
              {/* Google Map Iframe Start */}
              <div className="google-map-iframe">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96737.10562045308!2d-74.08535042841811!3d40.739265258395164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1703158537552!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              {/* Google Map Iframe End */}
            </div>
          </div>
        </div>
      </div>
      {/* Google Map Ends */}
      {/* Contact Infomation start */}
      <div className="contact-information wow fadeInUp" data-wow-delay="0.25s">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              {/* Item Box Start */}
              <div className="contact-item">
                {/* Icon Box Start */}
                <div className="icon-box">
                  <i className="fa-solid fa-phone" />
                </div>
                {/* Icon Box End */}
                {/* Box Content Start */}
                <div className="contact-info-content">
                  <h3>Help Line</h3>
                  <p>+234 810 3734 621</p>
                </div>
                {/* Box Content End */}
              </div>
              {/* Item Box End */}
            </div>
            <div className="col-md-4">
              {/* Item Box Start */}
              <div className="contact-item">
                {/* Icon Box Start */}
                <div className="icon-box">
                  <i className="fas fa-envelope-open-text" />
                </div>
                {/* Icon Box End */}
                {/* Box Content Start */}
                <div className="contact-info-content">
                  <h3>Location</h3>
                  <p>No 5, kwaji close, Maitama Abuja</p>
                </div>
                {/* Box Content End */}
              </div>
            </div>
            <div className="col-md-4">
              {/* Item Box Start */}
              <div className="contact-item">
                {/* Icon Box Start */}
                <div className="icon-box">
                  <i className="fas fa-map-marker-alt" />
                </div>
                {/* Icon Box End */}
                {/* Box Content Start */}
                <div className="contact-info-content">
                  <h3>Email Address</h3>
                  <p>johntoby@gmail.com</p>
                </div>
                {/* Box Content End */}
              </div>
              {/* Item Box End */}
            </div>
          </div>
        </div>
      </div>
      {/* Contact Infomation End */}
      {/* Contact Form start */}
      <div className="page-contact-form">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title">
                <h3 className="wow fadeInUp">fill the form</h3>
                <h2 className="text-anime-style-3">Contact Form</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {/* Contact Form start */}
              <div
                className="contact-us-form wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <form
                  id="contactForm"
                  action="#"
                  method="POST"
                  data-toggle="validator"
                >
                  <div className="row">
                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Enter Your Full Name"
                        required
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter Your Email"
                        required
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        id="phone"
                        placeholder="Enter Your Phone Number"
                        required
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        id="subject"
                        placeholder="Your Subject"
                        required
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="form-group col-md-12 mb-4">
                      <textarea
                        name="msg"
                        className="form-control"
                        id="msg"
                        rows={4}
                        placeholder="Typer Your Message"
                        required
                        defaultValue={""}
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="col-lg-12">
                      <div className="contact-form-btn">
                        <button type="submit" className="btn-default">
                          book now
                        </button>
                        <div id="msgSubmit" className="h3 hidden" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              {/* Contact Form end */}
            </div>
          </div>
        </div>
      </div>
      {/* Contact Form End */}
    </>
  );
};

export default ContactContents;
