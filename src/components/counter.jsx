import React, { Component } from 'react';


class Counter extends Component {
  state = [
    {
      userid: "user1",
      marks:{prob1: 1 ,prob2:2 ,prob3:3 ,prob4:4 ,prob5:5},
      total: 50,
    },
    {
      userid: "user2",
      marks:{prob1:5 ,prob2:4 ,prob3:3 ,prob4: 2,prob5:1},
      total: 60,
    },
    {
      userid: "user3",
      marks:{prob1:3 ,prob2:1 ,prob3:2 ,prob4:5 ,prob5:4},
      total: 70,
    },
    {
      userid: "user4",
      marks:{prob1:3 ,prob2:5 ,prob3:4 ,prob4:2 ,prob5:1},
      total: 80,
    },
    {
      userid: "user5",
      marks:{prob1:2 ,prob2:4 ,prob3:5 ,prob4:3 ,prob5:1},
      total: 90,
    }
  ];
  render() {
    return (
      <React.Fragment>
        <h1> LeaderBoard</h1>
        {this.state.map((items) => (
          <div>
            <span>  {items.userid}  </span>
            <span>  SCORES:</span>
            <span>  {items.marks.prob1} </span>
            <span>  {items.marks.prob2} </span>
            <span>  {items.marks.prob3} </span>
            <span>  {items.marks.prob4} </span>
            <span>  {items.marks.prob5} </span>
            <span>  TOTAL:</span>
            <span>{items.total}</span>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
 
export default Counter;