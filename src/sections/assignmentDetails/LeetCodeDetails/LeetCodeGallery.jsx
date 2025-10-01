import React, {
  useEffect,
  useState,
  Suspense,
  Context,
  useContext,
} from "react";
import { collection, getDocs, query, limit } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { motion, AnimatePresence, animate, scale } from "framer-motion";

import "./LeetCodeGallery.scss";

const SyntaxHighlighter = React.lazy(() =>
  import("react-syntax-highlighter").then((mod) => ({
    default: mod.Prism,
  }))
);
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { AppState } from "../../../components/AppStateProvider/AppStateProvider";

export default function LeetCodeGallery() {
  const [problems, setProblems] = useState([]);
  const [selectedProblem, setSelectedProblem] = useState(null);
  const { setHover } = useContext(AppState);
  useEffect(() => {
    const fetchProblems = async () => {
      const q = query(collection(db, "leetcodeProblems"), limit(8));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => doc.data());
      setProblems(data);
    };
    fetchProblems();
  }, []);

  return (
    <div className="leetcode-gallery">
      {problems.map((p, i) => (
        <motion.div
          onMouseLeave={() => {
            setHover(false);
          }}
          onMouseEnter={() => {
            setHover(true);
          }}
          initial={{ opacity: 0, y: "20px" }}
          animate={{
            opacity: 1,

            y: 0,
          }}
          transition={{ delay: i * 0.18 + 1.2, ease: "easeOut" }}
          key={i}
          className={`leetcode-cards  card-${p.folder}`}
          onClick={() => setSelectedProblem(p)}
        >
          <div className={`leetcode-text-container `}>
            <h3>{p.name}</h3>
            <p>{p.lang}</p>
          </div>
          <span className={`circle circle-${p.folder}`}></span>
          <div className="date-container">
            <span className="date">{p.date}</span>
            <div className="click-hint">Click to view code</div>
          </div>
        </motion.div>
      ))}

      {/* Modal */}
      <AnimatePresence>
        {selectedProblem && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProblem(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h3>{selectedProblem.name}</h3>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="modal-close"
                  onClick={() => setSelectedProblem(null)}
                >
                  &times;
                </motion.button>
              </div>

              <div className="code-container">
                <Suspense
                  fallback={
                    <pre
                      style={{
                        maxHeight: 300,
                        overflow: "auto",
                        background: "#0b0b0b",
                        color: "#ddd",
                        padding: 12,
                      }}
                    >
                      Loading code…
                    </pre>
                  }
                >
                  <SyntaxHighlighter
                    language="javascript"
                    style={oneDark}
                    wrapLines
                    showLineNumbers
                  >
                    {selectedProblem.code || "No code available"}
                  </SyntaxHighlighter>
                </Suspense>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
