function Line({ title, value, editMode, handleChange }) {
  return editMode ? (
    <div className="line">
    
      <input id={title} value={value} onChange={handleChange} />
    </div>
  ) : (
    <div className="line">
      
      <h3 id={title}>{value}</h3>
    </div>
  );
}
export default Line;