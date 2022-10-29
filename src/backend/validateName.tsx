import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { BuzzData } from "../types/BuzzData";
import { db } from "./firebase";

export enum ErrorCode {
  Valid,
  IncorrectId,
  IncorrectName
}

export const validateNameAndID = async (name:string, id:string):Promise<ErrorCode> => {
  const data = await getDoc(doc(db, "sessions", id));
  console.log(data.data());
  if(!data.exists()){
    return ErrorCode.IncorrectId;
  }
  const user = await getDoc(doc(db, "sessions", id, "users", name));
  if(user.exists()){
    return ErrorCode.IncorrectName;
  }
  return ErrorCode.Valid;
}