export default function Button({ children, onClick, type = "button" }) {
    return (
      <button
        onClick={onClick}
        type={type}
        className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
      >
        {children}
      </button>
    );
  }
  