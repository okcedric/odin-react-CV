import EdXP from "./EdXP";
import dayjs from "dayjs";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import Button from "./Button";

function Ed({ defaultInfos }) {
  const [infos, setInfos] = useState(defaultInfos);
  const [editMode, setEditMode] = useState(false);
  const [autoFocus, setAutoFocus] = useState({});

  function toggleEditMode() {
    setEditMode(!editMode);
  }

  const handleChange = (id, field, e) => {
    let value = e.target.value;
    let isDateField = field === "dateFrom" || field === "dateTo";
    let isValidDate = dayjs(value).isValid();

    isDateField && isValidDate && (value = dayjs(value)); // when its a date convert input to date
    isDateField && !isValidDate && (value = dayjs()); //when empty date return todays date.

    const infosCopy = infos.map((info) =>
      info.id === id ? { ...info, [field]: value } : info
    );
    setAutoFocus({ id: id, field: field });
    return setInfos(infosCopy);
  };

  const addEdXp = () => {
    const newXp = {
      id: uuid(),
      school: "New  school",
      study: "New study",
      dateFrom: dayjs(),
      dateTo: dayjs(),
    };
    const infosCopy = infos.concat(newXp);
    setInfos(infosCopy);
  };


  const deleteXP = (id) => {
    let infosCopy =infos.filter((info)=> info.id !== id);
    setInfos(infosCopy);
  };

  const infoBlock = infos && (infos.map((info) => {
    return (
      <EdXP
        key={info.id}
        editMode={editMode}
        autoFocus={autoFocus}
        handleChange={handleChange}
        deleteXP={() => {deleteXP(info.id)}}
        id={info.id}
        dateFrom={info.dateFrom}
        dateTo={info.dateTo}
        school={info.school}
        study={info.study}
      />
    );
  }));

    return (
      <section className="ed">
        <header>
          <h2>Educational Experiences</h2>
        </header>
        {infoBlock}
        <div className="buttons">
          {!editMode && <Button className="edit" text="Edit" onClick={toggleEditMode} />}
        {editMode && <Button className="add" text="+ Add" onClick={addEdXp} />}
        {editMode && (
          <Button className="submit" text="OK" onClick={toggleEditMode} />
        )}
        </div>
      </section>
    );
}

export default Ed;