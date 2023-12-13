import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithCustomToken, signOut } from 'firebase/auth';
import { collection, getDocs, query, where,addDoc, onSnapshot } from 'firebase/firestore';
import db, { auth } from '@/lib/firebase/firebase';
import { SignInInputs } from '@/lib/validation/sign-in.validation';
import { PriceType, ProductFrontType, ProductType, SubscriptionUserType } from '@/types/types.ts';

export async function signUpFirebase(data: SignInInputs) {
	return createUserWithEmailAndPassword(auth, data.email, data.password).then(res => res.user);
}

export async function signInFirebase(data: SignInInputs) {
	return signInWithEmailAndPassword(auth, data.email, data.password);
}

export async function signInTokenFirebase(token: string) {
	return signInWithCustomToken(auth, token);
}

export async function signOutFirebase() {
	return signOut(auth);
}

export async function getProductsFromFirebase(): Promise<ProductFrontType[]> {
	const q = query(collection(db, 'products'), where("active", "==", true));
	const querySnapshot = await getDocs(q);

	const products: Promise<ProductFrontType>[] = querySnapshot.docs.map(async (productDoc) => {
		const pricesCollection = collection(productDoc.ref, 'prices');
		const pricesQuerySnapshot = await getDocs(pricesCollection);

		const priceDoc = pricesQuerySnapshot.docs;
		const prices: PriceType[] = priceDoc.map(priceDoc => ({id: priceDoc.id, ...priceDoc.data()} as PriceType));
		const activePrice = prices.find(pr => pr.active);
		return {
			id: productDoc.id,
			price: activePrice || null,
			...productDoc.data() as ProductType
		}
	});

	return Promise.all(products);
}


export async function getSessionToStripe(userUid: string, data: {
	price: string,
	success_url: string,
	cansel_url: string
}) {
	const checkoutSessionRef = await addDoc(
		collection(db, `customers/${userUid}/checkout_sessions`),
		data
	);
	onSnapshot(checkoutSessionRef, (snap) => {
		const { error, url } = snap.data() as {error?: string; url?: string};
		if (error) {
			console.log(error);
		}
		if (url) {
			window.location.assign(url);
		}
	});
}

export async function getActiveSubscription(uidUser: string) {
	const q = query(
		collection(db, 'customers', uidUser, 'subscriptions'),
		where('status', 'in', ['trialing', 'active'])
	);
	const querySnapshot = await getDocs(q);
	if (querySnapshot.empty) {
		return null;
	}
	return querySnapshot.docs.map(s => ({id: s.id, ...s.data()})) as SubscriptionUserType[]
}
