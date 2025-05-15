import { useState } from "react";

function UserState() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submit, setSubmit] = useState([]);

  const HandleSubmit = (e) => {
    e.preventDefault(); 
    setSubmit((prevSubmit) => [...prevSubmit,{ name: name, email: email } 
    ]);
    setName("");
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
          required
        />
        <br />
        <label htmlFor="email">Enter Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <button type="submit">Add</button>
      </form>

      <h3>Submitted Data:</h3>
      <ul>
        {submit.map((item, index) => (
          <li>
            {item.name} - {item.email}
          </li>
        ))}
      </ul>
    </>
  );
}

export default UserState;
