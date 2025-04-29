import "./Preloader.css";

function Preloader({ enablePreloader }) {
  return (
    <div
      className={`circle-preloader-container ${
        enablePreloader ? "circle-preloader-container_visible" : ""
      }`}
    >
      <div className="circle-preloader"></div>
      <p className="preloader__text">searching for planet information...</p>
    </div>
  );
}

export default Preloader;
