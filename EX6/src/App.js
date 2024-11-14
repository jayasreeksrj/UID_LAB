import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([]); // To store the list of items
  const [formData, setFormData] = useState({ name: '', description: '', quantity: '' }); // To handle form input data

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new item to the items array
    setItems([...items, formData]);
    // Clear the form fields
    setFormData({ name: '', description: '', quantity: '' });
  };

  // Function to handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Quantity:
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">Add Item</button>
      </form>

      <h3>Item List</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <strong>Name:</strong> {item.name}, <strong>Description:</strong> {item.description}, <strong>Quantity:</strong> {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
 