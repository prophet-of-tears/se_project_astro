import "./Main.css";
import About from "../About/About";

function Main({ handleSearch }) {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);

    const search = e.target.search.value;
    const lat = e.target.lat;
    const long = e.target.long;
    const from = e.target.from;
    const to = e.target.search;
    const time = e.target.search;
    handleSearch({ search, lat, long, from, to, time });
  };

  return (
    <div className="main">
      <div className="searchbar">
        <search className="searchbar__inputs">
          <form onSubmit={handleFormSubmit} className="searchbar__form">
            <h3 className="searchbar__form-title">where is your sky!</h3>
            <label htmlFor="longitude" className="searchbar__label">
              longitude
            </label>
            <input
              type="text"
              name="longitude"
              id="longitude"
              placeholder="East & West"
              className="searchbar__input"
            />
            <label htmlFor="latitude" className="searchbar__label">
              latitude
            </label>
            <input
              type="text"
              name="latitude"
              id="latitude"
              placeholder="North & South"
              className="searchbar__input"
            />
            <label htmlFor="from_date" className="searchbar__label">
              From Date
            </label>
            <input
              type="date"
              name="from_date"
              id="from_date"
              className="searchbar__input"
            />
            <label htmlFor="to_date" className="searchbar__label">
              to Date
            </label>
            <input
              type="date"
              name="to_date"
              id="to_date"
              className="searchbar__input"
            />
            <label htmlFor="time" className="searchbar__label">
              Time
            </label>
            <input
              type="time"
              name="time"
              id="time"
              className="searchbar__input"
            />
            <label htmlFor="search" className="searchbar__label">
              Search Planet
            </label>
            <input
              type="text"
              name="search"
              id="search"
              className="searchbar__input"
            />
            <button type="submit" className="searchbar__submit-btn">
              Search
            </button>
          </form>
        </search>
      </div>
      <About />
    </div>
  );
}

export default Main;
