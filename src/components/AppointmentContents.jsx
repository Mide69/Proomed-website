import React from "react";

const AppointmentContents = () => {
  return (
    <>
      {/* Subpage Header Start */}
      <div className="subpage-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* Sub page Header start */}
              <div className="subpage-header-box">
                <h1 className="text-anime-style-3">Join The Waitlist</h1>
                <ol className="breadcrumb wow fadeInUp">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>Join Waitlist</li>
                </ol>
              </div>
              {/* Sub page Header End */}
            </div>
          </div>
        </div>
      </div>
      {/* Subpage Header End */}
      {/* Appointment Booking Section Start */}
      <div className="appointment-booking wow fadeInUp" data-wow-delay="0.25s">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-8">
              {/* Contact Form Start */}
              <div className="contact-form">
                <form
                  id="appointmentForm"
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
                        placeholder="Name of Facility"
                        required
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Contact person"
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
                        placeholder="Email"
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
                        placeholder="Phone number"
                        required
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="form-group col-md-12 mb-4">
                      <textarea
                        name="msg"
                        className="form-control"
                        id="msg"
                        rows={3}
                        placeholder="Address"
                        required
                        defaultValue={""}
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="col-md-12 form-group">
                      <button type="submit" className="btn-default">
                        Join
                      </button>
                      <div id="msgSubmit" className="h3 hidden" />
                    </div>
                  </div>
                </form>
              </div>
              {/* Contact Form End */}
            </div>
            <div className="col-lg-4">
              {/* Quick Contacts Start */}
              <div className="quick-contacts">
                {/* Quick Contacts Content Start */}
                <div className="quick-contacts-content">
                  <h3>Quick Contacts</h3>
                  <p>
                    To be among the first users of this awesome platform, 
                    sign up here to be on our waitlist. We are launching soon in the city of Abuja!
                  </p>
                </div>
                {/* Quick Contacts Content End */}
                {/* Quick Contacts Info Start */}
                <div className="quick-contact-info">
                  {/* Quick Contacts Box Start */}
                  <div className="quick-contact-box">
                    <div className="icon-box">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <p>No 5, kwaji close, Maitama Abuja</p>
                  </div>
                  {/* Quick Contacts Box End */}
                  {/* Quick Contacts Box Start */}
                  <div className="quick-contact-box">
                    <div className="icon-box">
                      <i className="fas fa-envelope-open-text" />
                    </div>
                    <p>johntoby007@gmail.com</p>
                  </div>
                  {/* Quick Contacts Box End */}
                  {/* Quick Contacts Box Start */}
                  <div className="quick-contact-box">
                    <div className="icon-box">
                      <i className="fa-solid fa-phone" />
                    </div>
                    <p>+234-810-373-4621</p>
                  </div>
                  {/* Quick Contacts Box End */}
                  {/* Quick Contacts Box Start */}
                  <div className="quick-contact-box">
                    <div className="icon-box">
                      <i className="fas fa-clock" />
                    </div>
                    <p>8 AM - 8 PM , Monday - Saturday</p>
                  </div>
                  {/* Quick Contacts Box End */}
                </div>
                {/* Quick Contacts Info End */}
              </div>
              {/* Quick Contacts End */}
            </div>
          </div>
        </div>
      </div>
      {/* Appointment Booking Section End */}
    </>
  );
};

export default AppointmentContents;
