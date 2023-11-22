function EdXP({ editMode, autoFocus,handleChange,deleteXP, id, dateFrom, dateTo, school, study }) {
  
  return editMode ? (
    <div className="border">
      <div className="line">
        <div className="dates">
          <input
            autoFocus={autoFocus.id === id && autoFocus.field === "date-from"}
            type="month"
            className="date-from"
            value={dateFrom.format("YYYY-MM")}
            onChange={(e) => handleChange(id, "dateFrom", e)}
          />
          <input
            autoFocus={autoFocus.id === id && autoFocus.field === "date-to"}
            type="month"
            className="date-to"
            value={dateTo.format("YYYY-MM")}
            onChange={(e) => handleChange(id, "dateTo", e)}
          />
        </div>
        <input
          autoFocus={autoFocus.id === id && autoFocus.field === "study"}
          className="study"
          value={study}
          onChange={(e) => handleChange(id, "study", e)}
        />
        <input
          autoFocus={autoFocus.id === id && autoFocus.field === "school"}
          className="school"
          value={school}
          onChange={(e) => handleChange(id, "school", e)}
        />
        <button className="delete" onClick={deleteXP}>
          Delete
        </button>
      </div>
    </div>
  ) : (
    <div>
      <div className="line">
          <div className="dates">
            <p className="date">{dateFrom.format("MMM. YYYY")}</p>
            <p className="tiret"> - </p>
            <p className="date"> {dateTo.format("MMM. YYYY")}</p>
        </div>
          <p className="study">{study}</p>
          <p className="school">{school}</p>
      </div>
    </div>
  );
}

export default EdXP ;