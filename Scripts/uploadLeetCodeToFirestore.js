// import fetch from "node-fetch";
// import { initializeApp } from "firebase/app";
// import {
//   getFirestore,
//   collection,
//   addDoc,
//   serverTimestamp,
// } from "firebase/firestore";

// // Firebase config
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGE_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
//   measurementId: import.meta.env.VITE_MEASUREMENT_ID,
// };
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// const username = "MoSu1248";
// const repo = "LeetCode";

// async function fetchAndUpload() {
//   const res = await fetch(
//     `https://api.github.com/repos/${username}/${repo}/commits?per_page=50`
//   );
//   const commits = await res.json();

//   const jsFilesSet = new Set();
//   const files = [];

//   for (const commit of commits) {
//     const commitDetailsRes = await fetch(commit.url);
//     const commitDetails = await commitDetailsRes.json();

//     for (const f of commitDetails.files || []) {
//       if (f.filename.endsWith(".js") && !jsFilesSet.has(f.filename)) {
//         jsFilesSet.add(f.filename);
//         files.push({
//           name: f.filename.split("/").pop(),
//           folder: f.filename.includes("/") ? f.filename.split("/")[0] : "",
//           code: await fetch(f.raw_url).then((r) => r.text()),
//         });
//         if (files.length >= 8) break;
//       }
//     }
//     if (files.length >= 8) break;
//   }

//   for (const f of files) {
//     await addDoc(collection(db, "leetcodeProblems"), {
//       ...f,
//       timestamp: serverTimestamp(),
//     });
//     console.log(`Uploaded: ${f.name}`);
//   }

//   console.log("Done uploading files!");
// }

// fetchAndUpload();
