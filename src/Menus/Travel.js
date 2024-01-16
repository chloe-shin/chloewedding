import React from "react";

const styles = {
  header_1: { fontFamily: "Lora, italic", marginTop: 30 },
};

function Travel() {
  return (
    <div className="container_center">
      <h1 style={styles.header_1}>Travel</h1>
      <hr></hr>
      <h2 style={styles.header_1}>How to get Nha Trang from USA</h2>

      <p>
        The easiest way is to take direct flight from San Francisco to Ho Chi
        Minh city and then take domestic flight to Nha Trang.
      </p>
      <h2 style={styles.header_1}>How to get to the resort</h2>
      <p> Taxi </p>
    </div>
  );
}

export default Travel;
