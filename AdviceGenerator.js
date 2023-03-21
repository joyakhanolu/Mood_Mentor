/* import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [category, setCategory] = useState('health');
  const [advice, setAdvice] = useState([]);

  useEffect(() => {
    fetchAdvice(category);
  }, [category]);

  const fetchAdvice = async (category) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/advice/${category}`);
      setAdvice(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="container">
      <h1>Advice Generator</h1>
      <div className="form-group">
        <label htmlFor="category">Select a category:</label>
        <select className="form-control" id="category" onChange={handleCategoryChange} value={category}>
          <option value="health">Health</option>
          <option value="relationship">Relationship</option>
          <option value="lifestyle">Lifestyle</option>
          <option value="career">Career</option>
          <option value="religion">Religion</option>
        </select>
      </div>
      <div className="card-deck">
        {advice.map((item) => (
          <div key={item._id} className="card">
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App; */