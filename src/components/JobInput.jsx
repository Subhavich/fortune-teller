const JobStatusInput = ({ value, onChange }) => {
  return (
    <label className="block">
      <span className="block font-semibold mb-2">งานและอาชีพ</span>
      <select
        name="jobStatus"
        value={value}
        onChange={onChange}
        className="w-full p-3 border  rounded-2xl"
      >
        <option value="">เลือกสถานะการงาน</option>
        <option value="พนักงานประจำ">พนักงานประจำ</option>
        <option value="เจ้าของธุรกิจ">เจ้าของธุรกิจ</option>
        <option value="กำลังหางาน">กำลังหางาน</option>
        <option value="ยังเรียนอยู่">ยังเรียนอยู่</option>
        <option value="ฟรีแลนซ์">ฟรีแลนซ์</option>
      </select>
    </label>
  );
};

export default JobStatusInput;
