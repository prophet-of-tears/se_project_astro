import "./Main.css";

function Main({ handleSearch, displayError, handleReturn }) {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);

    const search = e.target.search.value;
    const lat = e.target.latitude.value;
    const long = e.target.longitude.value;
    const from = e.target.from_date.value;
    const to = e.target.to_date.value;
    const time = e.target.time.value;
    const elevation = e.target.elevation.value;
    handleSearch({ search, lat, long, from, to, time, elevation });
  };

  return (
    <div className="main">
      {displayError ? (
        <p className="error">
          the data inputed into your search could not be processed. please try
          <span className="error__span" onClick={handleReturn}>
            again.
          </span>
        </p>
      ) : (
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
              <label htmlFor="elevation" className="searchbar__label">
                elevation
              </label>
              <input
                type="text"
                name="elevation"
                id="elevation"
                default="0"
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
                defaultValue="11:59:59"
                step="1"
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
      )}
    </div>
  );
}

export default Main;
