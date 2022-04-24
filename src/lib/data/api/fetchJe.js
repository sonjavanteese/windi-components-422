import supabase from './supabase';

// { type: 'supabase' table: 'json_editor', keys: 'id,titel,info,created_at,startval,group,option,schema' }
export const fetchJe = async (filter) => {
	let filterSets = filter;
	let query = supabase.from('json_editor').select('*');
	if (filterSets) {
		query = query.eq('id', id).single();
	}
	query = query.order('group', { ascending: true }).order('id', { ascending: true });

	let { data, error } = await query;
	if (data) {
		return data;
	} else {
		throw new Error(error, data);
	}
};

export default fetchJe;
