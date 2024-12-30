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
      <span className="block font-semibold mb-2">วันเกิด:</span>
      <div className="flex space-x-2">
        <input
          type="number"
          name="date"
          placeholder="วันที่"
          value={date}
          onChange={onChange}
          className="w-1/3 p-3 border rounded-md"
        />
        <select
          name="month"
          value={month}
          onChange={onChange}
          className="w-1/3 p-3 border rounded-md"
        >
          <option value="">เดือน</option>
          {THAI_MONTHS.map((monthName, index) => (
            <option key={index} value={index + 1}>
              {monthName}
            </option>
          ))}
        </select>
        <input
          type="number"
          name="year"
          placeholder="ปี ค.ศ."
          value={year}
          onChange={onChange}
          className="w-1/3 p-3 border rounded-md"
        />
      </div>
    </div>
  );
};

export default DOBInput;
