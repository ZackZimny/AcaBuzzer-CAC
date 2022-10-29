import { collection, doc, updateDoc } from "firebase/firestore"
import { db } from "./firebase"

export const clearEntries = async (id:string, names: string[]) => {
  //extra async makes all changes happen at once before UI can render each individual user being removed
  const updateNames = async () => {
    names.forEach(async (name) => await updateDoc(doc(db, "sessions", id, "users", name), 
    {buzzed: false}));
    console.log("Entries are cleared.");
  }
  await updateNames();
}