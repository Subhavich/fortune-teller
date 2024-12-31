export const Button = ({ loading, handleClick, message }) => {
  return (
    <button
      onClick={handleClick}
      type="submit"
      className={`w-full p-3  rounded-2xl text-white ${
        loading
          ? "bg-fuchsia-200 cursor-not-allowed puls"
          : "bg-fuchsia-400 hover:bg-fushcia-500"
      }`}
      disabled={loading} // Disable the button while loading
    >
      {loading ? "กำลังทำนาย..." : message}
    </button>
  );
};
