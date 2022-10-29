
import { collection, query, onSnapshot, where, orderBy } from "firebase/firestore"
import { db } from "./firebase"
import React from "react";
import { BuzzData } from "../types/BuzzData";

export const onUserDataSnapshot = (sessionNumber: string, stateChanger: React.Dispatch<React.SetStateAction<BuzzData[]>>) => 
onSnapshot(query(collection(db, "sessions", sessionNumber, "users"), orderBy("time")), (snap) => {
  const data: BuzzData[] = [];
  snap.forEach((doc) => {
    if(!doc.data().admin) data.push(doc.data() as BuzzData);
  })
  stateChanger(data);
})
