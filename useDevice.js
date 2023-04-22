// React Device Detection Hook v2
// https://github.com/JulianStoev/ReactDeviceDetectionHook

import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function useDeviceHook() {

	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		function resize(): void {
			switch (true) {
				case (window.innerWidth >= 768 && window.innerWidth <= 1024):
					dispatch(setTablet());
					break;

				case (window.innerWidth >= 1024):
					dispatch(setDesktop());
					break;
	
				case (window.innerWidth < 768):
					dispatch(setMobile());
					break;
	
				default:
			}
		}

		let lock = false;
		const debounce = (): void => {
			if (lock === true) return;
			lock = true;
			resize();
			setTimeout(() => {
				lock = false;
			}, 500);
		}

		debounce();

		window.addEventListener('resize', debounce);

		return () => window.removeEventListener('resize', debounce);
	}, [ dispatch ]);

	return (
		<></>
	)
}
