import { WebPlugin } from '@capacitor/core';

import type { SqlPlugin } from './definitions';

export class SqlWeb extends WebPlugin implements SqlPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
