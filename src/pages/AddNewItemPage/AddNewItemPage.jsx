import React, { useState } from 'react';
import axios from 'axios';

const AddItemForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    category: 'Plushies', // Default value set to 'Plushies'
    price: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the form data to the server using a POST request
      await axios.post('/api/items', formData);
      // Clear the form after successful submission
      setFormData({
        name: '',
        image: '',
        category: 'Plushies', // Reset the category back to 'Plushies'
        price: 0,
      });

      
      // doesnt work..
      alert('Item added successfully!');

      
    } catch (error) {
      // Handle any errors that occurred during the submission
      console.error('Error adding item:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Item Name"
        required
      />
      <input
        type="url"
        name="image"
        value={formData.image}
        onChange={handleChange}
        placeholder="Image URL"
        required
      />
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        required
      >
        <option value="Plushies">Plushies</option>
        <option value="Cards">Cards</option>
        <option value="Accessories">Accessories</option>
      </select>
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Price"
        required
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItemForm;
