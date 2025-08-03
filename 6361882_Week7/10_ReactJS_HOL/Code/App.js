import React from 'react';
import './App.css';
import officeImg from './office.jpeg'; 

function App() {
  const officeList = [
    { name: "Office A", rent: 40000, address: "Chennai" },
    { name: "Office B", rent: 80000, address: "Kolkata" },
    { name: "Office C", rent: 56000, address: "Gurgaon" },
    { name: "Office D", rent: 98000, address: "Hyderabad" }
  ];

  return (
    <div className="App">
      <h1>Office Space Rental</h1>

      <img
        src={officeImg}
        alt="Office Space"
        className="office-image"
      />

      <div className="office-list">
        {officeList.map((office, index) => (
          <div key={index} className="office-card">
            <h2>{office.name}</h2>
            <p style={{ color: office.rent > 60000 ? 'green' : 'red' }}>
              Rent: ₹{office.rent}
            </p>
            <p>Address: {office.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
