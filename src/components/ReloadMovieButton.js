import "./ReloadMovieButton.css";

const ReloadMovieButton = (props) => {
  return (
    <button className="reload-movie-button" onClick={props.reloadAllM}>
      Načíst
    </button>
  );
};

export default ReloadMovieButton;
