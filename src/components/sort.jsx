import React, { useState, useEffect } from 'react';
const bands = [
  {
    userid: "USER-1",
    marks: { prob1: 1, prob2: 2, prob3: 3, prob4: 4, prob5: 5 },
    total: 80,
  },
  {
    userid: "USER-2",
    marks: { prob1: 5, prob2: 4, prob3: 3, prob4: 2, prob5: 1 },
    total: 90,
  },
  {
    userid: "USER-3",
    marks: { prob1: 3, prob2: 1, prob3: 2, prob4: 5, prob5: 4 },
    total: 70,
  },
  {
    userid: "USER-4",
    marks: { prob1: 3, prob2: 5, prob3: 4, prob4: 2, prob5: 1 },
    total: 10,
  },
  {
    userid: "USER-5",
    marks: { prob1: 2, prob2: 4, prob3: 5, prob4: 3, prob5: 1 },
    total: 45,
  },
];

function App() {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState('total');

  useEffect(() => {
    const sortArray = type => {
      const types = {
        total: 'total',
        userid:'userid',
      };
      const sortProperty = types[type];
      const sorted = [...bands].sort((a, b) => b[sortProperty] - a[sortProperty]);
      setData(sorted);
    };

    sortArray(sortType);
  }, [sortType]);

  return (
    <div className="App">
      <h1> LEADERBOARD </h1>
      <select onChange={(e) => setSortType(e.target.value)}>
        <option value="total">TOTAL</option>
        <option value="userid">USERS</option>

      </select>

      {data.map(band => (
        <div key={band.id} >
          <span>{` ${band.userid}`}   </span>
          <span>{`prob1: ${band.marks.prob1}`}   </span>
          <span>{`prob2: ${band.marks.prob2}`}   </span>
          <span>{`prob3: ${band.marks.prob3}`}   </span>
          <span>{`prob4: ${band.marks.prob4}`}   </span>
          <span>{`prob5: ${band.marks.prob5}`}   </span>
          <span>{`TOTAL: ${band.total}`}   </span>

        </div>
      ))}
    </div>
  );
}

export default App;
