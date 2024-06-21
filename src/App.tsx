import { Card } from "./components/Card"
import Thumb from "./assets/illustration-article.svg"
import { cards } from "./data/cards"

function App() {

  return (
    <>
    {cards.map((card) => (
        <Card.Root key={card.id}>
          <Card.Thumb
            src={Thumb}
            title="img thumb title"
            aria-describedby={`img-desc-${card.id}`}
            aria-label="img thumb label"
            alt="Placeholder Image"
          />
          <Card.Content>
            <Card.Badge>{card.badge}</Card.Badge>
            <Card.PubDate dateTime={card.pubDate}>{card.pubDate}</Card.PubDate>
            <Card.Title>{card.title}</Card.Title>
            <Card.Description>{card.description}</Card.Description>
            <Card.Footer>
              <Card.Avatar src={card.avatar} width={32} height={32} />
              <Card.Author>{card.name}</Card.Author>
            </Card.Footer>
          </Card.Content>
        </Card.Root>
      ))}
    </>
  )
}

export default App
