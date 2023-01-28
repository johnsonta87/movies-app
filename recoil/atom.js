import { atom } from 'recoil';

export const listState = atom({
  key: 'list',
  default: {
    type: 'popular',
    isSecondaryQuery: false,
  },
});
