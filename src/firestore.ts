import {
  collection,
  getDocs,
  query,
  orderBy,
  addDoc,
  serverTimestamp
} from "firebase/firestore";
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

export async function submitContribution({
  userId,
  projectId,
  amount,
}: {
  userId: string;
  projectId: string;
  amount: number;
}) {
  try {
    const docRef = await addDoc(collection(db, "contributions"), {
      userId,
      projectId,
      amount,
      createdAt: serverTimestamp(),
    });
    console.log("Contribution written with ID:", docRef.id);
    return true;
  } catch (error) {
    console.error("Error writing contribution:", error);
    return false;
  }
}