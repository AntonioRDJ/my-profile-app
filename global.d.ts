/* eslint-disable @typescript-eslint/no-empty-interface */
type Messages = typeof import('./src/dictionaries/en/index.json');
declare interface IntlMessages extends Messages {}