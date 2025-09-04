import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase/firebase";
import Home from "./pages/Home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProjectsView from "./pages/ProjectView/ProjectView";
import AppStateProvider from "./components/AppStateProvider/AppStateProvider";
import Layout from "./components/Layout/Layout";
function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const projectData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(projectData);
    };
    fetchProjects();
  }, []);

  return (
    <BrowserRouter>
      <AppStateProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/projects" element={<ProjectsView />} />
          </Route>
        </Routes>
      </AppStateProvider>
    </BrowserRouter>
  );
}

export default App;
