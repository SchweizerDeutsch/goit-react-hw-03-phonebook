// import React, { useState } from 'react';

// const ContactForm = ({ onAddContact }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     number: '',
//   });

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     const { name, number } = formData;

//     onAddContact(name, number);
//     setFormData({ name: '', number: '' });
//   };

//   const { name, number } = formData;

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" name="name" value={name} onChange={handleChange} />
//       </label>
//       <label>
//         Number:
//         <input
//           type="tel"
//           name="number"
//           value={number}
//           onChange={handleChange}
//         />
//       </label>
//       <button type="submit">Add contact</button>
//     </form>
//   );
// };

// export default ContactForm;
