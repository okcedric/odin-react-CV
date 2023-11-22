import { useState } from "react";
function General({ defaultInfos }) {
  const [infos, setInfos] = useState(defaultInfos);
  const [editMode, setEditMode] = useState(false);
  function toggleEditMode() {
    setEditMode(!editMode);
  }

  const handleChange = (prop, e) => {
    const infosCopy = { ...infos, [prop]: e.target.value };
    setInfos(infosCopy);
  };

  const infoBlock = editMode ? (
    
    <div className="line">
      <input
        id="name"
        value={infos.name}
        onChange={(e) => handleChange("name", e)}
      />
      <input
        id="email"
        value={infos.email}
        onChange={(e) => handleChange("email", e)}
      />
      <input
        id="tel"
        value={infos.tel}
        onChange={(e) => handleChange("tel", e)}
      />
    </div>
  ) : (
    <div className="line">
      <h4 id="name" >
        {infos.name}
      </h4>
      <h4 id="email" >
        {infos.email}
      </h4>
      <h4 id="tel" >
        {infos.tel}
      </h4>
    </div>
  );

  return (
    <section className="general">
      <header>
        <h2>General Informations</h2>
      </header>
      {infoBlock}
      <div className="buttons">
      <button className="edit" onClick={toggleEditMode}>
        {editMode ? "OK" : "Edit"}
      </button>

      </div>
    </section>
  );
}
export default General;