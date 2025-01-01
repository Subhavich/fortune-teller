import { FaChevronDown } from "react-icons/fa";

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
        {/* Date Select */}
        <div className="relative w-1/3">
          <select
            name="date"
            value={date}
            onChange={onChange}
            className="w-full p-3 border rounded-2xl appearance-none pr-8"
          >
            <option value="">วันที่</option>
            {Array.from({ length: daysInMonth }).map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <FaChevronDown className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
        </div>

        {/* Month Select */}
        <div className="relative w-1/3">
          <select
            name="month"
            value={month}
            onChange={onChange}
            className="w-full p-3 border rounded-2xl appearance-none pr-8"
          >
            <option value="">เดือน</option>
            {THAI_MONTHS.map((monthName, index) => (
              <option key={index} value={index + 1}>
                {monthName}
              </option>
            ))}
          </select>
          <FaChevronDown className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
        </div>

        {/* Year Select */}
        <div className="relative w-1/3">
          <select
            name="year"
            value={year}
            onChange={onChange}
            className="w-full p-3 border rounded-2xl appearance-none pr-8"
          >
            <option value="">ปี</option>
            {Array.from({ length: 100 }).map((_, i) => (
              <option key={i} value={2008 - Number(i)}>
                {2008 - Number(i)}
              </option>
            ))}
          </select>
          <FaChevronDown className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default DOBInput;
