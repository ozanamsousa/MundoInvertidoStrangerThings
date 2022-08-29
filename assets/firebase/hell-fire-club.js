import app from "./firebase/app.js"
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'


export async function subscribeToHellfireClub(subscription){
    const db = getFirestore(app)
    const hellfireClubCollection = collection(db, 'hellfire-club')
    const hellfireCollectionSnapshot = await getDocs(hellfireClubCollection)
    const subscriptions = hellfireCollectionSnapshot.doc.map(doc => doc.data());
    return subscriptions;
}