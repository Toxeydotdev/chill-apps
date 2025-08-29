import "./Contact.css";

const Contact = () => {
  const hours = [
    { day: "Monday", time: "12:00 PM - 9:00 PM" },
    { day: "Tuesday", time: "11:00 AM - 9:00 PM" },
    { day: "Wednesday", time: "11:00 AM - 9:00 PM" },
    { day: "Thursday", time: "11:00 AM - 9:00 PM" },
    { day: "Friday", time: "11:00 AM - 9:00 PM" },
    { day: "Saturday", time: "11:00 AM - 9:00 PM" },
    { day: "Sunday", time: "11:00 AM - 8:00 PM" },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Visit Us</h2>
        <p className="contact-intro">
          Come experience authentic Mexican cuisine in the heart of Renton
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card">
              <h3>📍 Location</h3>
              <p>
                14400 SE Petrovitsky Rd
                <br />
                Renton, WA 98058
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=14400+SE+Petrovitsky+Rd+Renton+WA+98058"
                target="_blank"
                rel="noopener noreferrer"
                className="maps-link"
              >
                📍 Get Directions
              </a>
            </div>

            <div className="info-card">
              <h3>📞 Contact</h3>
              <p>
                <strong>Phone:</strong>
                <br />
                <a href="tel:+14252351311">(425) 235-1311</a>
              </p>
              <p className="call-note">
                Call ahead for reservations or takeout orders
              </p>
            </div>
          </div>

          <div className="hours-and-features">
            <div className="hours-card">
              <h3>🕐 Hours</h3>
              <div className="hours-list">
                {hours.map((schedule, index) => {
                  const today = new Date().getDay();
                  const dayIndex = index === 6 ? 0 : index + 1; // Adjust for Sunday being 0
                  const isToday = dayIndex === today;

                  return (
                    <div
                      key={index}
                      className={`hour-row ${isToday ? "today" : ""}`}
                    >
                      <span className="day">{schedule.day}</span>
                      <span className="time">{schedule.time}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="visit-note">
          <h4>🎉 Experience La Fuente</h4>
          <p>
            Join us for an authentic Mexican dining experience! Whether you're
            looking for a family dinner, a casual meal with friends, or
            delicious takeout, La Fuente welcomes you with traditional flavors
            and warm hospitality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
