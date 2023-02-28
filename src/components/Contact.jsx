import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Button from "./ui/Button";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // latitude and longitude of Dhulikhel Hospital
  return (
    <section
      id="contact"
      className="w-full bg-gradient-to-r from-primary to-primaryDark relative -top-10"
    >
      <div className="md:flex xl:gap-x-10 max-w-[1200px] mx-auto">
        {/* form section */}
        <div className="w-full md:w-[45%] px-2 py-10 lg:py-16 xl:px-0">
          <h1 className="text-2xl lg:text-3xl font-semibold  text-white">
            Any Query ? Contact Us
          </h1>
          <p className="text-xl font-semibold text-white py-5">
            Get in Touch With Us.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name&#42;"
              aria-label="Your Full name"
              className="px-2 py-3 mb-4 w-full rounded text-gray-700 text-base outline-none focus:ring-2
              focus:ring-primaryDark
              focus:outline-primaryDark"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address&#42;"
              aria-label="Your Email Address"
              className="px-2 py-3 mb-4 w-full rounded text-gray-700 text-base outline-none focus:ring-2
              focus:ring-primaryDark
              focus:outline-primaryDark"
              required
            />
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject&#42;"
              aria-label="Subject of query"
              className="px-2 py-3 mb-4 w-full rounded text-gray-700 text-base outline-none focus:ring-2
              focus:ring-primaryDark
              focus:outline-primaryDark"
              required
            />

            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="message&#42;"
              aria-label="text message"
              className="px-2 py-3 w-full rounded text-gray-700 text-base outline-none focus:ring-2
              focus:ring-primaryDark
              focus:outline-primaryDark"
              required
            />
            <Button text="Submit" className="w-full" />
          </form>
        </div>

        {/* Leaflet Map */}
        <div className="w-full md:w-[55%]">
          <MapContainer
            center={[27.6168, 85.548]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[27.6168, 85.548]}>
              <Popup className="text-base font-medium">
                Dhulikhel Hospital. <br /> Call : 98..... for emergency
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default Contact;
