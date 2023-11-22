
function ProXP({
  editMode,
  autoFocus,
  handleChange,
  deleteXP,
  handleResponsabilityChange, 
  addResponsability,
  deleteResponsability,
  id,
  dateFrom,
  dateTo,
  company,
  position,
  responsabilities,
}) {
  const responsabilitiesBlock = responsabilities.map((responsability) => {
    return editMode ? (
      <div key={responsability.id} className="dates">
        <input
          autoFocus={
            autoFocus.id === id && autoFocus.field === responsability.id
          }
          className="responsability"
          value={responsability.value}
          onChange={(e) => handleResponsabilityChange(id, responsability.id, e)}
        />

        <div className="buttons">
          <button
            className="delete"
            onClick={() => deleteResponsability(id, responsability.id)}
          >
            Delete
          </button>
        </div>
      </div>
    ) : (
      <li key={responsability.id}>{responsability.value}</li>
    );
  });
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
          autoFocus={autoFocus.id === id && autoFocus.field === "position"}
          className="position"
          value={position}
          onChange={(e) => handleChange(id, "position", e)}
        />
        <input
          autoFocus={autoFocus.id === id && autoFocus.field === "company"}
          className="company"
          value={company}
          onChange={(e) => handleChange(id, "company", e)}
        />
        <h3>Responsabilities :</h3>
        {responsabilitiesBlock}
        <div className="buttons">
          <button className="add" onClick={addResponsability}>
            Add a responsability
          </button>
        </div>
        <button className="delete" onClick={deleteXP}>
          Delete {position}
        </button>
      </div>
    </div>
  ) : (
    <div key={id}>
      <div className="line">
        <div className="dates">
          <p className="date">{dateFrom.format("MMM. YYYY")}</p>
          <p className="tiret"> - </p>
          <p className="date"> {dateTo.format("MMM. YYYY")}</p>
        </div>
        <p className="position">{position}</p>
        <p className="company">{company}</p>
        <ul className="responsabilities">{responsabilitiesBlock}</ul>
      </div>
    </div>
  );
}

export default ProXP;