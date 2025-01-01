import { FaChevronDown } from "react-icons/fa";

const RelationshipInput = ({ value, onChange }) => {
  return (
    <label className="block">
      <span className="block font-semibold pt-1 my-2">ชีวิตรัก</span>
      <div className="relative text-gray-600">
        <select
          name="relationshipStatus"
          value={value}
          onChange={onChange}
          className="w-full p-3 border rounded-2xl appearance-none pr-8 bg-white"
        >
          <option value="">เลือกสถานะความสัมพันธ์</option>
          <option value="โสด">โสด</option>
          <option value="มีคนคุย">มีคนคุย</option>
          <option value="มีแฟน">มีแฟน</option>
          <option value="แต่งงานแล้ว">แต่งงานแล้ว</option>
        </select>
        <FaChevronDown className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
      </div>
    </label>
  );
};

export default RelationshipInput;
