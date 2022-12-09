import "./App.css";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home"
import QuizInfo from "./QuizInfo/QuizInfo"
import QuestionsPage from "./QuestionsPage/QuestionsPage"
import EndPage from "./EndPage/EndPage"
import Register from "./Form/Register"
import SignIn from "./Form/SignIn"
import ProtectedRoute from "./ProtectedRoute"
import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <div className="container">
      <Navbar />

      
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/QuizInfo" element={<QuizInfo />} />
          <Route path="/QuestionsPage" element={<QuestionsPage />} />
          <Route path="/EndPage" element={<EndPage />} />
        </Route>


        <Route path="/Register" element={<Register />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
