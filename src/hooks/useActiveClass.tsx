import { useMemo, useState} from "react";
import {useRouter} from "next/router";

interface useActiveClass {
	inactiveClass: string,
	activeClass: string,
	path: string
}

export default function useActiveClass({inactiveClass, activeClass, path}: useActiveClass): string{

	const router = useRouter();

	const [cssClass, setCssClass] = useState('');

	useMemo(()=>{
		router.pathname === path ? setCssClass(activeClass) : setCssClass(inactiveClass)
	},[path])


	return cssClass
}
