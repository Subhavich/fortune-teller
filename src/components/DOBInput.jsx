const THAI_MONTHS = [
  "ม.ค.",
  "ก.พ.",
  "มี.ค.",
  "เม.ย.",
  "พ.ค.",
  "มิ.ย.",
  "ก.ค.",
  "ส.ค.",
  "ก.ย.",
  "ต.ค.",
  "พ.ย.",
  "ธ.ค.",
];

const getDaysInMonth = (month, year) => {
  if (!month || !year) return 31; // Default to 31 days
  return new Date(year, month, 0).getDate(); // Get the last day of the month
};

const DOBInput = ({ date, month, year, onChange }) => {
  const daysInMonth = getDaysInMonth(Number(month), Number(year));

  return (
    <div className="block">
      <span className="block font-semibold mb-2">วันเกิด</span>
      <div className="flex space-x-2">
        <select
          name="date"
          value={date}
          onChange={onChange}
          className="w-1/3 p-3 border rounded-2xl"
        >
          <option value="">วันที่</option>
          {Array.from({ length: daysInMonth }).map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <select
          name="month"
          value={month}
          onChange={onChange}
          className="w-1/3 p-3 border rounded-2xl"
        >
          <option value="">เดือน</option>
          {THAI_MONTHS.map((monthName, index) => (
            <option key={index} value={index + 1}>
              {monthName}
            </option>
          ))}
        </select>

        <select
          name="year"
          value={year}
          onChange={onChange}
          className="w-1/3 p-3 border rounded-2xl"
        >
          <option value="">ปี</option>
          {Array.from({ length: 100 }).map((_, i) => (
            <option key={i} value={2008 - Number(i)}>
              {2008 - Number(i)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DOBInput;
