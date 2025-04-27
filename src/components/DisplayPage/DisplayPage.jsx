import "./DisplayPage.css";

function DisplayPage({
  planetName,
  setPlanetName,
  planetInfo,
  handleAzimuth,
  handleAstronomicalUnit,
  handleHorizontalLocation,
}) {
  return (
    <div className="planets">
      <div className="planets__list">
        <ul className="planets__list-container">
          <li
            onClick={() => setPlanetName("sun")}
            className="planets__list-item"
          >
            <h3 className="planets__list-title">Sun</h3>
            <p className="planets__list-content">~ Au from Sun</p>
          </li>
          <li
            onClick={() => setPlanetName("Moon")}
            className="planets__list-item"
          >
            <h3 className="planets__list-title">Moon</h3>
            <p className="planets__list-content">~ Au from Sun</p>
          </li>{" "}
          <li
            onClick={() => setPlanetName("Mercury")}
            className="planets__list-item"
          >
            <h3 className="planets__list-title">Mercury</h3>
            <p className="planets__list-content">.39 Au from Sun</p>
          </li>
          <li
            onClick={() => setPlanetName("Venus")}
            className="planets__list-item"
          >
            <h3 className="planets__list-title">Venus</h3>
            <p className="planets__list-content">.72 Au from Sun</p>
          </li>
          <li
            onClick={() => setPlanetName("Earth")}
            className="planets__list-item"
          >
            <h3 className="planets__list-title">Earth</h3>
            <p className="planets__list-content">1 Au from Sun</p>
          </li>
          <li
            onClick={() => setPlanetName("Mars")}
            className="planets__list-item"
          >
            <h3 className="planets__list-title">Mars</h3>
            <p className="planets__list-content">1.52 Au from Sun</p>
          </li>
          <li
            onClick={() => setPlanetName("Jupiter")}
            className="planets__list-item"
          >
            <h3 className="planets__list-title">Jupiter</h3>
            <p className="planets__list-content">5.2 Au from Sun</p>
          </li>
          <li
            onClick={() => setPlanetName("Saturn")}
            className="planets__list-item"
          >
            <h3 className="planets__list-title">Saturn</h3>
            <p className="planets__list-content">9.54 Au from Sun</p>
          </li>
          <li
            onClick={() => setPlanetName("Uranus")}
            className="planets__list-item"
          >
            <h3 className="planets__list-title">Uranus</h3>
            <p className="planets__list-content">19.2 Au from Sun</p>
          </li>
          <li
            onClick={() => setPlanetName("Neptune")}
            className="planets__list-item"
          >
            <h3 className="planets__list-title">Neptune</h3>
            <p className="planets__list-content">30.06 Au from Sun</p>
          </li>
        </ul>
      </div>
      <div className="display">
        <div className="display__container">
          <h2 className="display__title">{planetName}</h2>
          <div className="display__info">{planetInfo.timeStamp}</div>
          <div
            onClick={handleAstronomicalUnit}
            className="display__info display__au"
          >
            {planetInfo.distance}Au from Earth
          </div>
          <div
            onClick={handleHorizontalLocation}
            className="display__info display__horizontal"
          >
            Horizontal location: {planetInfo.position}&deg;
          </div>
          <div
            onClick={handleAzimuth}
            className="display__info display__azimuth"
          >
            {" "}
            Azimuth: {planetInfo.azimuth}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayPage;
