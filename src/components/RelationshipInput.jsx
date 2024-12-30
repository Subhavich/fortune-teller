const RelationshipInput = ({ value, onChange }) => {
  return (
    <label className="block">
      <span className="block font-semibold mb-2">สถานะความสัมพันธ์:</span>
      <select
        name="relationshipStatus"
        value={value}
        onChange={onChange}
        className="w-full p-3 border rounded-md"
      >
        <option value="">เลือกสถานะความสัมพันธ์</option>
        <option value="โสด">โสด</option>
        <option value="มีคนคุย">มีคนคุย</option>
        <option value="มีแฟน">มีแฟน</option>
        <option value="แต่งงานแล้ว">แต่งงานแล้ว</option>
      </select>
    </label>
  );
};

export default RelationshipInput;
