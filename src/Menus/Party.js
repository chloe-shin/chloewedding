import React from "react";
import Container from "react-bootstrap/Container";

const styles = {
  schedule: {
    width: "70%",
    minWidth: "350px",
    backgroundColor: "#FFF9E8",
    margin: "auto",
    marginBottom: "30px",
    paddingBottom: "30px",
  },
  header_4: {
    fontFamily: "Lora, italic",
    marginTop: "30px",
    fontWeight: "bold",
    marginBottom: "30px",
  },
  header_1: { fontFamily: "Lora, italic", marginTop: 30 },
};

function Party() {
  return (
    <Container className="container_center">
      <img
        className="party_flower"
        src="/images/flower.png"
        alt="party_flower"
        width="100%"
      />
      <h1 style={styles.header_1}>S C H E D U L E</h1>
      <p>
        Here's what to expect during our wedding weekend. <br></br> We can't
        wait to celebrate with you!
      </p>
      <div class="schedule" style={styles.schedule}>
        <h4 style={styles.header_4}>
          <br></br>
          <br></br>F R I D A Y ,&nbsp; M A R &nbsp;1 5
        </h4>
        <p>
          Morning: Chloe, Charles Arrive in Nha Trang <br></br>
          07:00PM: Cocktail Hour (Optional)
        </p>
        <h4 style={styles.header_4}>
          <br></br>S A T U R D A Y ,&nbsp; M A R &nbsp;1 6
        </h4>
        <p>
          10:00AM: Traditional Ceremony (Optional) <br></br>
          4:00PM: Official Wedding Ceremony <br></br>
          5:00PM: Happy Hour <br></br>
          7:00PM: Dinner Starts <br></br>
          10:00PM: After Party <br></br>
        </p>
      </div>
      {/* <h4
        style={{
          fontFamily: "Lora, italic",
          marginTop: 30,
          fontWeight: "bold",
          textDecoration: "underline",
        }}
      >
        F R I D A Y ,&nbsp; M A R &nbsp;1 5
      </h4>
      <h3> Welcome Drink </h3>
      <p> 19:00 </p> #F4D6C1
      <p> Villa, Mia Resort, Nha Trang </p>
      <h4
        style={{
          fontFamily: "Lora, italic",
          marginTop: 30,
          fontWeight: "bold",
          textDecoration: "underline",
        }}
      >
        S A T U R D A Y , &nbsp; M A R &nbsp;1 6
      </h4>
      <h3> Ceremony </h3>
      <p> 16:30 </p>
      <p> Garden, Mia Resort, Nha Trang </p>
      <h3> Reception </h3>
      <p> 17:00 </p>
      <p> La Baia, Mia Resort, Nha Trang </p>
      <h3> After Party </h3>
      <p> 21:00 </p>
      <p> TBC! </p> */}
    </Container>
  );
}

export default Party;
