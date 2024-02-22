import React, { useState } from 'react';

function NewBoxForm({ addBox }) {
  const initialState = { width: "", height: "", backgroundColor: "" };
  const [formData, setFormData] = useState(initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    addBox({ ...formData, id: Math.random().toString() });
    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="width">Width</label>
        <input
          id="width"
          type="text"
          name="width"
          value={formData.width}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="height">Height</label>
        <input
          id="height"
          type="text"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="backgroundColor">Background Color</label>
        <input
          id="backgroundColor"
          type="text"
          name="backgroundColor"
          value={formData.backgroundColor}
          onChange={handleChange}
        />
      </div>
      <button>Add Box</button>
    </form>
  );
}

export default NewBoxForm;
