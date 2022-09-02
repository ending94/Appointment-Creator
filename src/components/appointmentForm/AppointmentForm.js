import React from "react";
import {ContactPicker} from "../contactPicker/ContactPicker";
export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input 
          type="text"
          value={title}
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Appointment Title"
          required
        />
      </label>
      <label>
        <input 
          type="date"
          value={date}
          name="date"
          min={getTodayString()}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Appointment Date"
          required
        />
      </label>
      <label>
        <input 
          type="time"
          value={time}
          name="time"
          onChange={(e) => setTime(e.target.value)}
          placeholder="Appointment Time"
          required
        />
      </label>
      <label>
        <ContactPicker  
          contacts={contacts}
          name="contacts"
          
          onChange={(e) => setContact(e.target.value)}
          placeholder="Appointment with"
        />
      </label>
      <input type="submit" value="Add Appointment" />
    </form>
  );
};