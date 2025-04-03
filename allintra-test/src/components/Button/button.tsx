export const Button = ({ onClick, title }) => {
  return (
    <button onClick={onClick} style={{ marginTop: "30px" }}>
      {title}
    </button>
  );
};
