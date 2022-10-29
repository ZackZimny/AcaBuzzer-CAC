
import { addDoc, collection, doc, DocumentData, getDocs, query, Query, setDoc, Timestamp, where } from "firebase/firestore";
import { db } from "./firebase";

const generateKey = ():string => (Math.floor(Math.random() * 10000) + 10000).toString();

const addAdminData = async (id:string, name:string) => {
  await addDoc(collection(db, "sessions", id, "users"), {
    name: name, 
    time: Timestamp.now(), 
    isBuzzed: false, 
    admin: true
  });
}

export const createGameData = async (name: string):Promise<string> => {
  let id = generateKey();
  const sessionsRef = collection(db, "sessions") as Query;
  let q = query(sessionsRef, where("id", "==", id));
  let querySnapshot = await getDocs(q);
  while(querySnapshot.size > 0){
    let id = generateKey();
    q = query(sessionsRef, where("id", "==", id));
    querySnapshot = await getDocs(q);
  }
  await setDoc(doc(db, "sessions", id), {
    id: id
  });
  await setDoc(doc(db, "sessions", id), {locked: true});
  await addAdminData(id, name);
  return id;
}

