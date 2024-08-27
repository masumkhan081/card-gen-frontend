import { atom } from 'jotai';

// States for Primary details
export const playerNameAtom = atom('');
export const playerImageAtom = atom(null);
export const overallAtom = atom(0);

export const rarityAtom = atom('');
export const raritiesAtom = atom([]);

export const leagueAtom = atom();
export const leaguesAtom = atom([]);

export const nationAtom = atom('');
export const countriesAtom = atom([]);

// States for physical details

export const pacAtom = atom('');
export const shoAtom = atom('');
export const pasAtom = atom('');
export const driAtom = atom('');
export const defAtom = atom('');
export const phyAtom = atom('');
export const footAtom = atom('');
export const weakAtom = atom('');
export const skillmovesAtom = atom('');
export const atackingAtom = atom('');
export const defensiveAtom = atom('');

// States for tacticks
export const positionsAtom = atom('');
export const alternatepositionAtom = atom([]);
export const playstylesAtom = atom([]);


// seearch

export const searchQ = atom("");
export const isSearchResultShowing = atom(false);


export const searchResult = atom([]);

export const selectedItemsAtom = atom('');

export const isCurrentActEdit = atom(false);