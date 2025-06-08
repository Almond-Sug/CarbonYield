import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "./firebase"; // we'll add db to firebase.ts in the next step

export async function getProjects() {
  try {
    const q = query(collection(db, "projects"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}
