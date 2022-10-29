import { Timestamp } from "firebase/firestore";

export type BuzzData = {
  name: string;
  time: Timestamp;
  id: string;
  buzzed: boolean;
  admin: boolean;
}