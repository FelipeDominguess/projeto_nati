import React, { useState } from 'react';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  // const handleSignup = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const userCredential = await auth.createUserWithEmailAndPassword(email, password);
  //     const user = userCredential.user;
  //     await db.collection('users').doc(user.uid).set({
  //       name,
  //       email,
  //     });
  //     console.log('User signed up: ', user);
  //   } catch (error) {
  //     console.error('Error during signup: ', error);
  //   }
  // };

  return (
    <div>
      <h2>Signup</h2>
      <form>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
