import { registerPlugin } from '@capacitor/core';

import type { SqlPlugin } from './definitions';

const Sql = registerPlugin<SqlPlugin>('Sql', {
  web: () => import('./web').then(m => new m.SqlWeb()),
});

export * from './definitions';
export { Sql };
