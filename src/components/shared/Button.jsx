export const Button = ({ loading, handleClick, message, disabled }) => {
  return (
    <button
      onClick={handleClick}
      type="submit"
      className={`w-full p-3  rounded-2xl text-white ${
        disabled
          ? "bg-zinc-300 cursor-not-allowed "
          : "bg-fuchsia-400 hover:bg-fushcia-500 animate-pulse"
      }`}
      disabled={disabled} // Disable the button while loading
    >
      {disabled ? "เลือกข้อมูลด้านบน" : message}
    </button>
  );
};
