import React, { useEffect , useState } from "react";
import CardData from "./CardData";
import {Button,Card} from 'react-bootstrap';
import Emoji from 'a11y-react-emoji'
function Cards() {
  const [memeImage, setMemeImahe] = useState();

  const myRandomEmg = () => {
    const memesArray = CardData.data.card;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMemeImahe(url);
  };
  return (
    <div>
      {/* <button onClick={myRandomEmg}>Get a new image</button> */}
      {/* <Button variant="dark" onClick={myRandomEmg}>Get a new image</Button>
      <img src={memeImage} alt=''></img> */}
      <Card className="text-center">
        <Card.Header></Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
          <img src={memeImage} alt=''></img>
          </Card.Text>
          <Button variant="primary" onClick={myRandomEmg}>Get a new image</Button>
        </Card.Body>
        <Card.Footer className="text-muted"><Emoji symbol=" 🌼🌼🌼 " /></Card.Footer>
      </Card>
    </div>

  );
}

export default Cards;
