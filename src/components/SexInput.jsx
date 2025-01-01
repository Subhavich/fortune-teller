import { FaChevronDown } from "react-icons/fa";

const SexInput = ({ value, onChange }) => {
  return (
    <label className="block">
      <span className="block font-semibold mb-2">เพศ</span>
      <div className="relative text-gray-600">
        <select
          name="sex"
          value={value}
          onChange={onChange}
          className="w-full p-3 border rounded-2xl appearance-none pr-8 bg-white"
        >
          <option value="">เลือกเพศ</option>
          <option value="ชาย">ชาย</option>
          <option value="หญิง">หญิง</option>
          <option value="ไม่ระบุ">ไม่ระบุ</option>
        </select>
        <FaChevronDown className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
      </div>
    </label>
  );
};

export default SexInput;
