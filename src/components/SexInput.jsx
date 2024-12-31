const SexInput = ({ value, onChange }) => {
  return (
    <label className="block">
      <span className="block font-semibold mb-2">เพศ</span>
      <select
        name="sex"
        value={value}
        onChange={onChange}
        className="w-full p-3 border rounded-2xl"
      >
        <option value="">เลือกเพศ</option>
        <option value="ชาย">ชาย</option>
        <option value="หญิง">หญิง</option>
        <option value="ไม่ระบุ">ไม่ระบุ</option>
      </select>
    </label>
  );
};

export default SexInput;
