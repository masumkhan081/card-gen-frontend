"use client";
import React, { useEffect } from 'react';
import { useAtom } from 'jotai';
import { playerNameAtom, playerImageAtom, overallAtom, rarityAtom, leagueAtom, countriesAtom, nationAtom } from '../../Atom/GlobalStates';
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


    // Base Url

    const BaseURL = process.env.NEXT_PUBLIC_BACKEND_URL;


    // Fetch country list
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${BaseURL}/countries/all`);
                const result = await response.json();
                // Access the nested data array
                setCountries(result.data.data); // Correctly set countries to the inner data array
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
                                <option value="">Select Rarity..</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
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
                                <option value=''>Select Country</option>
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
                                {League.map(league => (
                                    <option key={league.value} value={league.value}>
                                        {league.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PrimaryDetails;
