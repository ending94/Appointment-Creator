import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Contact Name"
          required
        />
      </label>
      <label>
        <input
          type="tel"
          value={phone}
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="XXX-XXX-XXXX"
          pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
          required
        />
      </label>
      <label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Contact Email"
          required
        />
      </label>
      <input type="submit" value="Add Contact" />
    </form>
  );
};