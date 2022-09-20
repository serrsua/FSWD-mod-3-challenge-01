
const Characters = ({ name, status, species, imageUrl, setImage }) => {
  return (
    <div
      className="color-square"
      onClick={() => {
        setImage(imageUrl)
      }}
    >
      <img src={imageUrl} alt="" />
      <p>{name}</p>
      <p>{status}</p>
      <p>{species}</p>
    </div>
  );
};

export default Characters;
