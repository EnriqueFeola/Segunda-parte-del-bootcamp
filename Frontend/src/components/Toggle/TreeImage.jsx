import "./TreeImage.css";

const TreeImage = ({ showImage, showOrHideImage }) => {
  return (
    <div className="treeImageContainer">
      <button onClick={showOrHideImage} className="showHideButton">
        Show or hide
      </button>
      {showImage ? (
        <img
          src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
          alt="tree"
          className="treeImage"
        />
      ) : (
        <span>No image</span>
      )}
    </div>
  );
};

export default TreeImage;
