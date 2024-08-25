"use client";
import React, { useEffect } from 'react';
import { useAtom } from 'jotai';
import { playerNameAtom, playerImageAtom, overallAtom, rarityAtom, leagueAtom, countriesAtom, nationAtom, raritiesAtom, leaguesAtom } from '../../Atom/GlobalStates';
import League from '@/app/components/json/league.json';
import Nation from '@/app/components/json/nation.json';


const PrimaryDetails = () => {
    const [playerName, setPlayerName] = useAtom(playerNameAtom);
    const [playerImage, setPlayerImage] = useAtom(playerImageAtom);
    const [overall, setOverall] = useAtom(overallAtom);
    const [rarity, setRarity] = useAtom(rarityAtom);
    const [nation, setNation] = useAtom(nationAtom);
    const [league, setLeague] = useAtom(leagueAtom);

    const [countries, setCountries] = useAtom(countriesAtom);
    const [rarities, setRarities] = useAtom(raritiesAtom);
    const [leagues, setLeagues] = useAtom(leaguesAtom);


    // Base Url

    const BaseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

    // Fetch rarity list
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${BaseURL}/cards/all`);
                const result = await response.json();
                // Access the nested data array
                setRarities(result.data.data); // Correctly set countries to the inner data array



                setRarity((result.data.data)[0].image); // Set default value to the first item's value


                console.log('Success');

            } catch (error) {
                console.error('Error fetching the countries:', error);
            }
        };

        fetchData();
    }, []);


    // Fetch country list
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${BaseURL}/countries/all`);
                const result = await response.json();
                // Access the nested data array
                setCountries(result.data.data); // Correctly set countries to the inner data array
                setNation((result.data.data)[0].image);
            } catch (error) {
                console.error('Error fetching the countries:', error);
            }
        };

        fetchData();
    }, []);


    // Fetch leagues list
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${BaseURL}/leagues/all`);
                const result = await response.json();
                // Access the nested data array
                setLeagues(result.data.data); // Correctly set countries to the inner data array
                setLeague((result.data.data)[0].image);
            } catch (error) {
                console.error('Error fetching the countries:', error);
            }
        };

        fetchData();
    }, []);




    return (
        <>
            <div className='border pb-5 rounded-[8px] border-selection-color'>
                <div className='h-12 bg-transparent text-selection-color border-b border-selection-color flex items-center p-4'>
                    <b>Primary Details</b>
                </div>

                <div className='pl-4 pr-4 pt-4'>
                    <div className="form-row flex flex-col md:flex-row lg:flex-row xl:flex-row gap-5 pb-5 justify-between">
                        <div className="form-group w-full">
                            <label htmlFor="PlayerName" className="form-label">Name</label>
                            <input
                                id="PlayerName"
                                name='PlayerName'
                                type="text"
                                placeholder="Name.."
                                className="form-input mt-3"
                                value={playerName}
                                onChange={(e) => {
                                    if (e.target.value.length <= 15) {
                                        setPlayerName(e.target.value);
                                    }
                                }}
                            />
                        </div>

                        <div className="form-group w-full">
                            <label htmlFor="playerImage" className="form-label">Player Image</label>
                            <input
                                id="playerImage"
                                type="file"
                                className="form-input mt-3"
                                onChange={(e) => setPlayerImage(e.target.files[0])}
                            />
                        </div>
                    </div>

                    <div className="form-row flex flex-col md:flex-row lg:flex-row xl:flex-row gap-5 pb-5 justify-between">

                        <div className="form-group w-full">
                            <label htmlFor="overall" className="form-label">Overall</label>
                            <input
                                id="overall"
                                type="text"
                                placeholder="Overall.."
                                className="form-input mt-3"
                                value={overall}
                                onChange={(e) => setOverall(e.target.value)}
                                min="0"
                                max="99"
                                maxLength="2"
                            />
                        </div>

                        <div className="form-group w-full">
                            <label htmlFor="rarity" className="form-label">Rarity</label>
                            <label htmlFor="rarity" className="form-label float-right text-blue-500 cursor-pointer">View Rarities</label>
                            <select
                                id="rarity"
                                className="form-input mt-3"
                                value={rarity}
                                onChange={(e) => setRarity(e.target.value)}

                            >

                                {rarities && rarities.length > 0 ? (
                                    rarities.map(rarity => (
                                        <option key={rarity.id} value={rarity.image}>
                                            {rarity.cardName}
                                        </option>
                                    ))
                                ) : (
                                    <option value="">No Options Available</option>
                                )}
                            </select>
                        </div>
                    </div>

                    <div className="form-row flex flex-col md:flex-row lg:flex-row xl:flex-row gap-5 pb-5 justify-between">
                        <div className="form-group w-full">
                            <label htmlFor="nation" className="form-label">Nation</label>
                            <select
                                id="nation"
                                className="form-input mt-3"
                                value={nation}
                                onChange={(e) => setNation(e.target.value)}
                            >

                                {countries && countries.length > 0 ? (
                                    countries.map(country => (
                                        <option key={country.id} value={country.image}>
                                            {country.countryName}
                                        </option>
                                    ))
                                ) : (
                                    <option value="">No Options Available</option>
                                )}

                            </select>
                        </div>

                        <div className="form-group w-full">
                            <label htmlFor="league" className="form-label">League</label>
                            <select
                                id="league"
                                className="form-input mt-3"
                                value={league}
                                onChange={(e) => setLeague(e.target.value)}
                            >
                                {leagues && leagues.length > 0 ? (
                                    leagues.map(league => (
                                        <option key={league.id} value={league.image}>
                                            {league.leagueName}
                                        </option>
                                    ))
                                ) : (
                                    <option value="">No Options Available</option>
                                )}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PrimaryDetails;
