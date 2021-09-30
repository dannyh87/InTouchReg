const Input = ({ type = "text", label, value, onChange, error = "" }) => {
  return (
    <>
      <label>{label}</label>
      <input type={type} onChange={onChange} value={value} />
      {error ? <p className="error">{error}</p> : null}
    </>
  );
};

export default Input;
