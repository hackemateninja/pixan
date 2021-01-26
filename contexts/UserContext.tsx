import { useEffect, useState, createContext, useContext } from 'react';
import {initSupabase} from "@/libs/index";

// @ts-ignore
export const UserContext = createContext();

export const UserContextProvider = (props) => {
	const [userLoaded, setUserLoaded] = useState(false);
	const [session, setSession] = useState(null);
	const [user, setUser] = useState(null);
	const [userDetails, setUserDetails] = useState(null);
	const [subscription, setSubscription] = useState(null);

	useEffect(() => {
		const session = initSupabase.auth.session();
		setSession(session);
		setUser(session?.user ?? null);
		const { data: authListener } = initSupabase.auth.onAuthStateChange(
			async (event, session) => {
				setSession(session);
				setUser(session?.user ?? null);
			}
		);

		return () => {
			authListener.unsubscribe();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Get the user details.
	const getUserDetails = () => initSupabase.from('users').select('*').single();

	// Get the user's trialing or active subscription.
	const getSubscription = () =>
		initSupabase
			.from('subscriptions')
			.select('*, prices(*, products(*))')
			.in('status', ['trialing', 'active'])
			.single();

	useEffect(() => {
		if (user) {
			Promise.allSettled([getUserDetails(), getSubscription()]).then(
				(results) => {
					setUserDetails(results[0]["value"].data);
					setSubscription(results[1]["value"].data);
					setUserLoaded(true);
				}
			);
		}
	}, [user]);

	const value = {
		session,
		user,
		userDetails,
		userLoaded,
		subscription,
		signIn: (options) => initSupabase.auth.signIn(options),
		signUp: (options) => initSupabase.auth.signUp(options),
		signOut: () => {
			setUserDetails(null);
			setSubscription(null);
			return initSupabase.auth.signOut();
		}
	};
	return <UserContext.Provider value={value} {...props} />;
};

export const useUser = () => {
	const context = useContext(UserContext);
	if (context === undefined) {
		throw new Error(`useUser must be used within a UserContextProvider.`);
	}
	return context;
};
