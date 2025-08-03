import React from "react";

function BookDetails() {
  const books = [
    { title: "Master React", price: 670 },
    { title: "Deep Dive into Angular 11", price: 800 },
    { title: "Mongo Essentials", price: 450 }
  ];

  return (
    <div className="section">
      <h1>Book Details</h1>
      {books.map((book, index) => (
        <div key={index}>
          <h3>{book.title}</h3>
          <h3>{book.price}</h3>
        </div>
      ))}
    </div>
  );
}

export default BookDetails;
