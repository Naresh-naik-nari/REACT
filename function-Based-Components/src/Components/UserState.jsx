import { useState } from "react";

function Practice() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submit, setSubmit] = useState([]);

  const HandleSubmit = (e) => {
    e.preventDefault(); //  prevent form refresh
    setSubmit((prevSubmit) => [
      ...prevSubmit,
      { name: name, email: email } //  add new entry
    ]);
    setName(""); //  clear input fields
    setEmail("");
  };

  return (
    <>
      <form onSubmit={HandleSubmit}>
        <label htmlFor="name">User Name</label>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="email">Enter Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button type="submit">Add</button>
      </form>

      <h3>Submitted Data:</h3>
      <ul>
        {submit.map((item, index) => (
          <li key={index}>
            {item.name} - {item.email}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Practice;
