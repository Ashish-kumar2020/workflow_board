



const Input = ({ className = "", ...props }) => {
  return (
    <input
      className={`your-common-classes ${className}`}
      {...props}
    />
  );
};

export default Input;