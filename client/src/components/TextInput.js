const TextInput = ({ name, type = "text", onChange, value, children }) => {
  const styles = {
    fontSize: "12px",
  };

  const handleChange = (e) => {
    const text = e.target.value;
    onChange(name, text);
    console.log(text);
  };

  return (
    <>
      <input
        style={styles}
        placeholder={children}
        type={type}
        id={name}
        onChange={handleChange}
        value={value}
      />
    </>
  );
};
export default TextInput;
