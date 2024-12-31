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

const DOBInput = ({ date, month, year, onChange }) => {
  return (
    <div className="block">
      <span className="block font-semibold mb-2">วันเกิด</span>
      <div className="flex space-x-2">
        <input
          type="number"
          name="date"
          placeholder="วันที่"
          value={date}
          onChange={onChange}
          className="w-1/3 p-3 border rounded-2xl"
          max={31}
        />
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
            <option key={i} value={2024 - Number(i)}>
              {2024 - Number(i)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DOBInput;
