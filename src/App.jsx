import { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase/firebase";

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
      <div className="header">
        <div className="header-test"></div>
        <p>Mohammed Suhail Rahman</p>
      </div>
      <div className="nav">
        <ul>
          <li>
            <a href="#">A</a>
          </li>
          <li>
            <a href="#">A</a>
          </li>
          <li>
            <a href="#">A</a>
          </li>
          <li>
            <a href="#">A</a>
          </li>
        </ul>
      </div>
      <div className="window-frame">
        {/* Main scrollable content goes here */}
      </div>
      <div className="footer">
        <div className="header-test"></div>
        <p>FOOTER</p>
      </div>
    </div>
  );
}

export default App;
