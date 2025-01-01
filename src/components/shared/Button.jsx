import { ResetButton } from "../ResetButton";

export const Button = ({
  handleClick,
  message,
  disabled,
  sent,
  handleResetDraw,
}) => {
  return (
    <>
      {sent && <ResetButton handleResetDraw={handleResetDraw} sent={sent} />}
      {!sent && (
        <button
          onClick={handleClick}
          type="submit"
          className={`w-full p-3 rounded-2xl text-white ${
            disabled
              ? "bg-zinc-300 cursor-not-allowed "
              : "bg-fuchsia-600 hover:bg-fushcia-500 animate-pulse"
          }`}
          disabled={disabled || sent} // Disable the button while loading
        >
          {disabled ? "เลือกข้อมูลด้านบน" : message}
        </button>
      )}
    </>
  );
};
