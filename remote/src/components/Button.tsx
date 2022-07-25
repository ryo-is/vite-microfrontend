const Button = () => {
  const handleClick = () => {
    alert('remote button clicked');
  };

  return (
    <button type="button" onClick={handleClick} className="btn btn-success">
      remote button
    </button>
  );
};

export default Button;
