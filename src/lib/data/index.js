// @index(['./api/**/*.js', './static/**/*.js'], f => ` export { default as ${f.name} } from '${f.path}';`)
export { default as fetchClass } from './api/fetchClass';
export { default as fetchJe } from './api/fetchJe';
export { default as fetchUser } from './api/fetchUser';
export { default as sleep } from './api/sleep';
export { default as supabase } from './api/supabase';
export { default as appData } from './static/appData';
export { default as navData } from './static/navData';
export { default as pageData } from './static/pageData';
// @endindex
// @index(['./stores/**/*.js'], f => ` export { ${f.name} } from '${f.path}';`)
export { _app } from './stores/_app';
export { _classDb } from './stores/_classDb';
export { _edit } from './stores/_edit';
export { _editop } from './stores/_editop';
export { _order } from './stores/_order';
export { _profil } from './stores/_profil';
export { user } from './stores/user';
// @endindex

