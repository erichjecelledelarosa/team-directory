function Button({ label, onClick, variant, children }) {
  const color = variant === "danger" ? "bg-red-500" : "bg-violet-400";

  return (
    <button onClick={onClick} className={`${color} text-white px-3 py-1 rounded hover:bg-violet-500`}>
      {label} {children}
    </button>
  );
}
export default Button;