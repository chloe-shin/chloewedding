import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Timeline from "./Timeline";

function Home() {
 return (
  <Container className="container_center">
   <Row>
    <Col>
     <img className="home_image" src="/images/engagement_1.JPG" />
    </Col>
   </Row>
   <Row>
    <Col>
     <div className="story_col">
      <br></br>
      <br></br>
      <p> We're pleased to invite you to our wedding on </p>
      <h2 style={{ fontFamily: "Lora, bold", marginTop: 20 }}>
       {" "}
       M A R &nbsp;1 6 , &nbsp;2 0 2 3{" "}
      </h2>
      <h6 style={{ fontFamily: "Lora", marginTop: 10, marginBottom: 30 }}>
       {" "}
       Mia Resort, Nha Trang, Vietnam
      </h6>
      <a href="https://tripetto.app/run/NLJFUQKIQY">
       <Button
        variant="outline-dark"
        style={{ fontFamily: "Lora", borderRadius: "10px" }}
       >
        RSVP
       </Button>
      </a>

      <br></br>
      <br></br>
      <img className="flower" src="/images/flower.png" />

      <h2 style={{ fontFamily: "Lora, italic", marginTop: 30 }}>
       {" "}
       O U R &nbsp; S T O R Y{" "}
      </h2>
      <br></br>
      <p>
       In the radiant ambiance of Glow Skybar, Charles stood out, impeccably
       dressed. Chloe was instantly drawn in, with their conversations awash
       with intrigue and hints of the adventures that awaited. Yet, on their
       very next date, Charles surprised her. Dressed in laid-back track pants
       and a casual t-shirt he'd gotten for free, he was a far cry from the
       dapper gentleman Chloe had first encountered. However, as they settled to
       watch "Fast and Furious," their bond swiftly deepened. Echoing the
       exhilarating pace of the movie, their connection accelerated, defying all
       limits.
      </p>
      <p>
       Enter Chuon Chuon, the enchanting poodle named after playful dragonflies.
       Through tales of this delightful creature, Chloe glimpsed past Charles'
       laid-back attire that day. Chuon Chuon wasn't merely a pet; she
       symbolized Charles' love for life's quirks and drew Chloe even closer.
       After all, what's more endearing than a man with such an adorable canine
       companion?
      </p>
      <p>
       Their shared journey unfurled a rich tapestry: from TV series marathons
       and spontaneous dance-offs to mouthwatering sessions of Korean barbecue
       and mala hotpot. Amidst peaceful strolls with the vibrant Chuon Chuon and
       cherished moments in ambient cafes, they revisited the sense of wonder
       from their first encounter. As for the track pants? They've since
       vanished under mysterious circumstances.
      </p>
      <p>
       In the wise words of Vin Diesel, "It's not how you stand by your car,
       it's how you race your car.” But, uh, thanks for standing by us anyway.
       Here’s to living a wonderful shared life, fastly, furiously, one
       quarter-mile at a time.
      </p>
      <br></br>
      <Row>
       <Col>
        <div className="story_col">{/* <Timeline /> */}</div>
       </Col>
      </Row>
     </div>
    </Col>
   </Row>
  </Container>
 );
}

export default Home;
