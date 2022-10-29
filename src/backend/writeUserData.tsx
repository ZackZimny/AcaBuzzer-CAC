
import {Timestamp, doc, setDoc, arrayUnion} from 'firebase/firestore'
import { db } from "./firebase";

export const writeUserData = async (name:string, id:string, buzzed:boolean) => {
  await setDoc(doc(db, 'sessions', id, 'users', name), {
    name: name,
    id: id,
    time: Timestamp.now(),
    buzzed: buzzed,
    admin: false
  })
}
