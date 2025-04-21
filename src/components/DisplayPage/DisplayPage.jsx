import "./DisplayPage.css";

function DisplayPage({ planetName, setPlanetName }) {
  return (
    <div className="planets">
      <div className="planets__list">
        <ul className="planets__list-container">
          <li
            onClick={() => setPlanetName("sun")}
            className="planets__list-item"
          >
            <h3 className="planets__list-title">Sun</h3>
            <p className="planets__list-content">~ Au</p>
          </li>
          <li
            onClick={() => setPlanetName("Moon")}
            className="planets__list-item"
          >
            <h3 className="planets__list-title">Moon</h3>
            <p className="planets__list-content">~ Au</p>
          </li>{" "}
          <li
            onClick={() => setPlanetName("Mercury")}
            className="planets__list-item"
          >
            <h3 className="planets__list-title">Mercury</h3>
            <p className="planets__list-content">.39 Au</p>
          </li>
          <li
            onClick={() => setPlanetName("Venus")}
            className="planets__list-item"
          >
            <h3 className="planets__list-title">Venus</h3>
            <p className="planets__list-content">.72 Au</p>
          </li>
          <li
            onClick={() => setPlanetName("Earth")}
            className="planets__list-item"
          >
            <h3 className="planets__list-title">Earth</h3>
            <p className="planets__list-content">1 Au</p>
          </li>
          <li
            onClick={() => setPlanetName("Mars")}
            className="planets__list-item"
          >
            <h3 className="planets__list-title">Mars</h3>
            <p className="planets__list-content">1.52 Au</p>
          </li>
          <li
            onClick={() => setPlanetName("Jupiter")}
            className="planets__list-item"
          >
            <h3 className="planets__list-title">Jupiter</h3>
            <p className="planets__list-content">5.2 Au</p>
          </li>
          <li
            onClick={() => setPlanetName("Saturn")}
            className="planets__list-item"
          >
            <h3 className="planets__list-title">Saturn</h3>
            <p className="planets__list-content">9.54 Au</p>
          </li>
          <li
            onClick={() => setPlanetName("Uranus")}
            className="planets__list-item"
          >
            <h3 className="planets__list-title">Uranus</h3>
            <p className="planets__list-content">19.2 Au</p>
          </li>
          <li
            onClick={() => setPlanetName("Neptune")}
            className="planets__list-item"
          >
            <h3 className="planets__list-title">Neptune</h3>
            <p className="planets__list-content">30.06 Au</p>
          </li>
        </ul>
      </div>
      <div className="display">
        <div className="display__container">
          <h2 className="display__title">{planetName}</h2>
          <div className="display__info">planet Info</div>
        </div>
      </div>
    </div>
  );
}

export default DisplayPage;
