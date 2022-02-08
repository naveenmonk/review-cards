import React, { useState, useEffect } from 'react';
import Review from './Review';

const url = 'https://jsonplaceholder.typicode.com/users';

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our reviews</h2>
          <div className="underline"></div>
        </div>
        <Review users={data} />
      </section>
    </main>
  );
}

export default App;
