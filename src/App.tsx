import { Card } from "./components/Card"
import Thumb from "./assets/illustration-article.svg"
import Avatar from "./assets/image-avatar.webp"

function App() {

  return (
    <>
      <Card.Root>
        <Card.Thumb src={Thumb} title="img thumb title" aria-description="img thumb description" aria-label="img thumb label" alt="Placeholder Image"/>
        <Card.Content>
          <Card.Badge>Learning</Card.Badge>
          <Card.PubDate dateTime="12/12/2021">
            12/12/2021
          </Card.PubDate>
          <Card.Title>
            Title Card
          </Card.Title>
          <Card.Description>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam corrupti quasi repellendus, illum magnam, autem quos, cumque nostrum optio sapiente labore non dicta facere.
          </Card.Description>
          <Card.Footer>
            <Card.Avatar src={Avatar} width={32} height={32} />
            <Card.Author>
              Chrono cross
            </Card.Author>
          </Card.Footer>
        </Card.Content>
      </Card.Root>
    </>
  )
}

export default App
