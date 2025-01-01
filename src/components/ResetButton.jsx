export const ResetButton = ({ sent, handleResetDraw }) => {
  return (
    <>
      {sent && (
        <button
          onClick={handleResetDraw}
          className="block mx-auto animate-pulse w-32 h-16 rounded-t-xl bg-gradient-to-br from-blue-200 via-pink-300 to-purple-400 shadow-xl hover:shadow-2xl transition-all duration-300 text-white font-bold text-sm"
        >
          จั่วใหม่
        </button>
      )}
    </>
  );
};
