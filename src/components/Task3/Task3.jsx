import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./Task3.css";

const style = {
  height: 45,
  alignItems: "center",
  border: "1px solid green",
  margin: 6,
  padding: 8
};

const App = () => {
  const [items, setItems] = useState(Array.from({ length: 200 }));

  const fetchMoreData = () => {
    // a fake async api call like which sends
    // 50 more records in 0.5 secs
    setTimeout(() => {
      setItems(items.concat(Array.from({ length: 50 })));
    }, 500);
  };

  return (
    <div className="container">
      <h1 className="heading">Problem 3 - Infinite scroll</h1>
      <div className="box">
        <InfiniteScroll
          key={items.length}
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          className="scroll-container"
        >
          {items.map((i, index) => (
            <div style={style} key={index}>
              <div>{index+1}. This is Sample Text</div>
              <div>You can modify this content</div>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default App;
