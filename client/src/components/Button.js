const Button = ({ children, onClick }) => {
  const styles = {
    backgroundColor: "green",
  };
  return (
    <button onClick={onClick} style={styles}>
      {children}
    </button>
  );
};

export default Button;
