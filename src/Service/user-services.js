import { db } from "../Firebase/Firebase-config";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

const userCollection = collection(db, "members");
class membersDataServices {
  getMember = async (id) => {
    let user = await getDocs(query(userCollection, where("mobile", "==", id)));
    return user.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  };
}
export default new membersDataServices();
