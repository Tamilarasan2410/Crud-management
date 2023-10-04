import CrumBar from "../Components/crumbar";
import NavSideBar from "../Components/Navsidebar";
import StudentCard from "../components/StudentCards";
import { Appstate } from "../context/AppProvider";

export default function StudentList() {
  const { studentData } = Appstate();

  return (
    <NavSideBar>
      <div>
        <div>
          <CrumBar />
        </div>
        <div className="flex flex-row flex-wrap place-content-evenly gap-5 m-5">
          {studentData.map((stud, ind) => (
            <StudentCard student={stud} key={stud.id} />
          ))}
        </div>
      </div>
    </NavSideBar>
  );
}