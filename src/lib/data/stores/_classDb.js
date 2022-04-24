import { writable } from 'svelte/store';

import fetchClass from '../api/fetchClass';

function createSessionList() {
	const {subscribe, set, update} = writable([]);
	return {
		subscribe,
		fetchAll: () => {
			const fetchData = fetchClass();
			set(fetchData);
		}
	}
}
export const _classDb = createSessionList();