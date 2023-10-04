import { Route, Routes } from "react-router-dom";
import "./App.css";
import DashBoard from "./pages/DashBoard";
import StudentList from "./Pages/StudentList";
import TeachersList from "./Pages/TeachersList";
import InterviewNotes from "./pages/InterviewNotes";
import Profile from "./pages/Profile";
import Nopage from "./pages/Nopage";
import Students from "./Components/Students";
import EditStudents from "./components/EditStudents";
import Teachers from "./Components/Teachers";
import EditTeachers from "./components/EditTeachers";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<DashBoard />} />
        <Route path="/addStudents" element={<Students />} />
        <Route path="/editStudents/:id" element={<EditStudents />} />
        <Route path="/addTeachers" element={<Teachers />} />
        <Route path="/editTeachers/:id" element={<EditTeachers />} />
        <Route path="/students/all" element={<StudentList />} />
        <Route path="/teachers/all" element={<TeachersList />} />
        <Route path="/interview/notes" element={<InterviewNotes />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
    </div>
  );
}

export default App;