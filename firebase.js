import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAk_7fz4mtFJgapx_l1Clu0gaBVTD-NPgA",
  authDomain: "twitter-clone-yt-a1d52.firebaseapp.com",
  projectId: "twitter-clone-yt-a1d52",
  storageBucket: "twitter-clone-yt-a1d52.appspot.com",
  messagingSenderId: "782362741896",
  appId: "1:782362741896:web:ce2e40db0b5fdb2ced633d",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
