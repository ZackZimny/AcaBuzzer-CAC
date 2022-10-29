import { doc, setDoc, updateDoc} from "firebase/firestore"
import { db } from "./firebase"

export const writeLock = async (id: string, locked:boolean) => await updateDoc(doc(db, 'sessions', id), 
{locked: locked});