import { Routes, Route } from "react-router-dom";
import Counter from "./components/Counter/Counter";
import Greeting from "./components/Greeting/Greeting";
import Tasks from "./components/Task/TaskList";
import Login from "./components/Login/Login";

const RoutesApp = () => {
  return (
    <>
      <Routes>
        <Route path="/greeting" element={<Greeting />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/task" element={<Tasks />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default RoutesApp;
