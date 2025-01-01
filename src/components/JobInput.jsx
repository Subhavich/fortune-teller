import { FaChevronDown } from "react-icons/fa";

const JobStatusInput = ({ value, onChange }) => {
  return (
    <label className="block">
      <span className="block font-semibold mb-2">งานและอาชีพ</span>
      <div className="relative text-gray-600">
        <select
          name="jobStatus"
          value={value}
          onChange={onChange}
          className="w-full p-3 border rounded-2xl appearance-none pr-8  bg-white"
        >
          <option value="">เลือกสถานะการงาน</option>
          <option value="พนักงานประจำ">พนักงานประจำ</option>
          <option value="เจ้าของธุรกิจ">เจ้าของธุรกิจ</option>
          <option value="กำลังหางาน">กำลังหางาน</option>
          <option value="ยังเรียนอยู่">ยังเรียนอยู่</option>
          <option value="ฟรีแลนซ์">ฟรีแลนซ์</option>
        </select>
        <FaChevronDown className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
      </div>
    </label>
  );
};

export default JobStatusInput;
