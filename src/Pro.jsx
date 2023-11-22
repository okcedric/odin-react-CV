import dayjs from "dayjs";
import { useState } from "react";
import Button from "./Button";
import ProXP from "./ProXP";
import { v4 as uuid } from "uuid";



function Pro({defaultInfos}) {
  const [editMode, setEditMode] = useState(false);
  const [infos, setInfos] = useState(defaultInfos);
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
        setInfos(infosCopy);
    }

    function handleResponsabilityChange(infoId, respId, e) {
      // Find the index of the info object
      const infoIndex = infos.findIndex((info) => info.id === infoId);

      // Clone the info object
      const updatedInfo = { ...infos[infoIndex] };

      // Find the index of the responsibility to update
      const respIndex = updatedInfo.responsabilities.findIndex(
        (resp) => resp.id === respId
      );

      // Update the responsibility
      updatedInfo.responsabilities[respIndex] = {
        ...updatedInfo.responsabilities[respIndex],
        value: e.target.value,
      };

      // Create a new array with the updated info
      const newInfos = [
        ...infos.slice(0, infoIndex),
        updatedInfo,
        ...infos.slice(infoIndex + 1),
      ];

      // Update the state
      setInfos(newInfos);
    }
    const addEProXp = () => {
      const addedInfo = {
        id: uuid(),
        company: "Company Name",
        position: "Position",
        responsabilities: [
          {
            id: uuid(),
            value: "One responsibility",
          }
        ],
        dateFrom: dayjs(),
        dateTo: dayjs(),
      };
     
      const newInfos = infos.concat(addedInfo);
      


  setInfos(newInfos);
    };
    
    const deleteXP = (id) => {
      const newInfos = infos.filter((info) => info.id !== id);
      setInfos(newInfos);
    };
    
    const addResponsability = (id) => {
      const newInfos = infos.map((info) => {
        if (info.id === id) {
          // Create a new array for responsabilities and add the new responsability
          const newResponsabilities = [
            ...info.responsabilities,
            {
              id: uuid(),
              value:
                "Other responsability.",
            },
          ];

          // Return a new object for this info with the updated responsabilities array
          return { ...info, responsabilities: newResponsabilities };
        } else {
          // For other infos, return them as is
          return info;
        }
      });

      // Update the state with the new infos array
      setInfos(newInfos);
    };

  
    
  const deleteResponsability = (id, respId) => {
    // Create a new array by mapping over the existing infos array
    const newInfos = infos.map((info) => {
      // If the current info matches the given id, update its responsibilities
      if (info.id === id) {
        // Remove the specified responsibility by filtering it out
        const newResponsabilities = info.responsabilities.filter(
          (resp) => resp.id !== respId
        );

        // Return a new info object with the updated responsibilities
        return { ...info, responsabilities: newResponsabilities };
      }
      // For other infos, return them as is
      return info;
    });

    // Update the state with the newly formed infos array
    setInfos(newInfos);
  };


  const infoBlock = infos && (infos.map((info) => {
    return (
      <ProXP
        key={info.id}
        editMode={editMode}
        autoFocus={autoFocus}
        handleChange={handleChange}
        deleteXP={() => {
          deleteXP(info.id);
        }}
        handleResponsabilityChange={handleResponsabilityChange}
        addResponsability={() => {
          addResponsability(info.id);
        }}
        deleteResponsability={deleteResponsability}
        id={info.id}
        dateFrom={info.dateFrom}
        dateTo={info.dateTo}
        company={info.company}
        position={info.position}
        responsabilities={info.responsabilities}
      />
    );
  }));
 
  return (
    <section className="pro">
      <header>
        <h2>Professional Experiences</h2>
      </header>
      {infoBlock}
      <div className="buttons">
        {!editMode && (<Button className="edit" text="Edit" onClick={toggleEditMode} />)}
        {editMode && <Button className="add" text="+ Add" onClick={addEProXp} />}
        {editMode && (
          <Button className="submit" text="OK" onClick={toggleEditMode} />
        )}
      </div>
    </section>
  );
}
export default Pro;
