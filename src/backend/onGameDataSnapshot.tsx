import { doc, onSnapshot} from "firebase/firestore"
import { GameData } from "../types/GameData";
import { db } from "./firebase"


export const onGameDataSnapshot = (sessionNumber: string, stateChanger: React.Dispatch<React.SetStateAction<GameData>>) => 
onSnapshot(doc(db, "sessions", sessionNumber), (snap) => {
  stateChanger(snap.data() as GameData);
})