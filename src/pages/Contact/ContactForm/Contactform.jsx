import React, { useState } from "react";
import "./Contactform.css";
import emailjs from "emailjs-com";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function Contactform() {
  const [formData, setFormData] = useState({
    agencyName: "",
    agentName: "",
    email: "",
    phone: "",
    travelDate: null,
    nights: "",
    hotelType: "",
    preferredHotel: "",
    rooms: "",
    adults: "",
    kids: "",
    kidsAge: "",
    requirement: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w611k03",
        "template_5j92daa",
        e.target,
        "H8ycHLmBCtL0E7bwt",
      )
      .then(() => alert("Request submitted successfully!"))
      .catch(() => alert("Failed to send request"));
  };

  return (
    <div className="contact-form-wrapper">
      <h3 className="contact-title">Custom Itinerary Request</h3>

      <form className="contact-form mt-4" onSubmit={sendEmail}>
        {/* Agency Name */}
        <TextField
          label="Agency Name"
          name="agencyName"
          fullWidth
          required
          value={formData.agencyName}
          onChange={handleChange}
        />
        <div className="form-row mt-4">
          {/* Agent Name */}
          <TextField
            label="Agent Name"
            name="agentName"
            fullWidth
            required
            value={formData.agentName}
            onChange={handleChange}
          />
        </div>
        {/* Email & Phone */}
        <div className="form-row mt-4">
          <TextField
            label="Email ID"
            type="email"
            name="email"
            fullWidth
            required
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            label="Phone No."
            name="phone"
            fullWidth
            required
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        {/* Travel Date */}
        <div className="form-group mt-4">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Preferred Travel Date"
              value={formData.travelDate}
              onChange={(newValue) =>
                setFormData({ ...formData, travelDate: newValue })
              }
              slotProps={{
                textField: {
                  fullWidth: true,
                  name: "travelDate",
                },
              }}
            />
          </LocalizationProvider>
        </div>
        <div className="form-group mt-4">
          {/* Nights */}
          <TextField
            label="Duration (Nights)"
            type="number"
            name="nights"
            fullWidth
            required
            value={formData.nights}
            onChange={handleChange}
          />
        </div>
        {/* Hotel Type */}
        <FormControl>
          <FormLabel>Type of Hotel</FormLabel>
          <RadioGroup
            row
            name="hotelType"
            value={formData.hotelType}
            onChange={handleChange}
          >
            <FormControlLabel
              value="3 Star"
              control={<Radio />}
              label="3 Star"
            />
            <FormControlLabel
              value="4 Star"
              control={<Radio />}
              label="4 Star"
            />
            <FormControlLabel
              value="5 Star"
              control={<Radio />}
              label="5 Star"
            />
          </RadioGroup>
        </FormControl>

        {/* Preferred Hotel */}
        <TextField
          label="Preferred Hotel (if any)"
          name="preferredHotel"
          fullWidth
          value={formData.preferredHotel}
          onChange={handleChange}
        />

        {/* Rooms / Adults */}
        <div className="form-row mt-4">
          <TextField
            label="No. of Rooms"
            type="number"
            name="rooms"
            fullWidth
            value={formData.rooms}
            onChange={handleChange}
          />
          <TextField
            label="Adults"
            type="number"
            name="adults"
            fullWidth
            value={formData.adults}
            onChange={handleChange}
          />
        </div>

        {/* Kids */}
        <div className="form-row mt-4">
          <TextField
            label="Kids"
            type="number"
            name="kids"
            fullWidth
            value={formData.kids}
            onChange={handleChange}
          />
          <TextField
            label="Kids Age"
            name="kidsAge"
            fullWidth
            placeholder="Eg: 5, 8"
            value={formData.kidsAge}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-4">
          {/* Requirement */}
          <TextField
            label="Requirement"
            name="requirement"
            multiline
            rows={5}
            fullWidth
            required
            value={formData.requirement}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="contact-submit-btn">
          Submit Request
        </button>
      </form>
    </div>
  );
}
