import {useContext} from "react";
import {UserContext} from "../contexts/UserContext";

export default function useUser() {
	const context = useContext(UserContext);
	if (context === undefined) {
		throw new Error(`useUser must be used within a UserContextProvider.`);
	}
	return context;
};
