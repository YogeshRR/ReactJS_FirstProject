
import imgSource from './assets/react-core-concepts.png'
import componetsImage from './assets/components.png'
import { CORE_CONCEPTS } from './data.js'

const reactDescription = ['Fundamental', 'Cruical', 'Core'];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

function Header() {
  const randomNames = reactDescription[getRandomInt(2)];
  return (
    <header>
      <img src={imgSource} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {randomNames} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>

  );
}

function CoreConcepts({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} ></img>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <section id='core-concepts'>
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts
              {...CORE_CONCEPTS[1]}
            />
            <CoreConcepts
              {...CORE_CONCEPTS[2]}
            />
            <CoreConcepts
              {...CORE_CONCEPTS[3]}
            />
          </ul>
        </section>


      </main>
    </div>
  );
}

export default App;
