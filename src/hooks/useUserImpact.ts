import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { auth } from "../firebase";

export function useUserImpact(refreshTrigger?: boolean) {
  const [impact, setImpact] = useState({
    totalAmount: 0,
    totalOffset: 0,
    projectCount: 0,
    events: [] as {
      projectName: string;
      amount: number;
      tonsEstimated: number;
      createdAt: string;
    }[],
    redemptions: [] as {
      amount: number;
      project: string;
      createdAt: any;
    }[],
    loading: true,
  });

  useEffect(() => {
    async function fetchData() {
      const user = auth.currentUser;
      if (!user) return;

      const contributionsQuery = query(
        collection(db, "contributions"),
        where("userId", "==", user.uid)
      );
      const contributionSnapshot = await getDocs(contributionsQuery);
      const contributions = contributionSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as any[];

      const projectSnapshot = await getDocs(collection(db, "projects"));
      const projectMap = Object.fromEntries(
        projectSnapshot.docs.map((doc) => [doc.id, doc.data()])
      );

      let totalAmount = 0;
      let totalOffset = 0;
      const seenProjects = new Set();
      const events = [];

      for (const c of contributions) {
        const p = projectMap[c.projectId];
        if (!p) continue;

        if (c.isSymbolic) {
          totalAmount -= c.amount;
        } else {
          totalAmount += c.amount;
        }

        const estimated = p.tonsEstimated * (c.amount / 25);
        totalOffset += estimated;
        seenProjects.add(c.projectId);

        events.push({
          projectName: p.name,
          amount: c.amount,
          tonsEstimated: estimated,
          createdAt: c.createdAt?.toDate().toLocaleDateString() ?? "Unknown",
        });
      }

      events.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

      const redemptionsSnapshot = await getDocs(
        query(collection(db, "redemptions"), where("userId", "==", user.uid))
      );
      const redemptions = redemptionsSnapshot.docs.map((doc) => doc.data()) as any[];

      setImpact({
        totalAmount,
        totalOffset: Number(totalOffset.toFixed(2)),
        projectCount: seenProjects.size,
        events,
        redemptions,
        loading: false,
      });
    }

    fetchData();
  }, [refreshTrigger]);

  return impact;
}
