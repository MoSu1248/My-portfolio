import { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase/firebase";
import Footer from "./components/footer/Footer";
import Navbar from "./components/nav/Navbar";
import Header from "./components/header/Header";
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
    <div className="layout">
      <Header />
      <Navbar />
      <section className="window-frame"></section>
      <Footer />
    </div>
  );
}

export default App;
