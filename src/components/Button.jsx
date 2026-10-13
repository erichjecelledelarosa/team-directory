function Button({ label, onClick, variant, children }) {
  const color = variant === "danger" ? "bg-red-500" : "bg-blue-600";

  return (
    <button onClick={onClick} className={`${color} text-white px-3 py-1 rounded`}>
      {label} {children}
    </button>
  );
}
export default Button;