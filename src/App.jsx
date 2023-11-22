
import "./App.css";
import {defaultGeneralInfos, defaultEdXP, defaultProXP} from "./Data"
import Ed from "./Ed";
import General from "./General";
import Pro from "./Pro";

function App() {
  return (
    <>
      <h1>Curriculum vitæ</h1>
      <General defaultInfos={defaultGeneralInfos} />
      <Ed defaultInfos={defaultEdXP} />
      <Pro defaultInfos={defaultProXP} />
    </>
  );
}
export default App;
