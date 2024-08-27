import React, { useEffect, useState, useRef } from 'react';
import { useAtom } from 'jotai';
import {
    playerNameAtom,
    playerImageAtom,
    overallAtom,
    rarityAtom,
    leagueAtom,
    countriesAtom,
    nationAtom,
    raritiesAtom,
    leaguesAtom,
    selectedItemsAtom
} from '../../Atom/GlobalStates';
import { IoMdArrowDropdown } from "react-icons/io";

const SearchableSelect = ({ id, value, onChange, options, placeholder, label }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const containerRef = useRef(null);

    const handleSelect = (option) => {
        onChange(option);
        setIsOpen(false);
        setSearchTerm('');
    };

    const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    const filteredOptions = options.filter(option =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div ref={containerRef} className="relative">
            <label htmlFor={id} className="form-label">{label}</label>

            <div
                className="form-input mt-3 cursor-pointer border p-[0.5rem] rounded-[0.375rem] border-gray-400 border-[1px] text-black"
                onClick={() => setIsOpen(!isOpen)}
            >
                {value ? options.find(option => option.value === value)?.label : placeholder}

                <span className="float-right"><IoMdArrowDropdown size={22}/></span>

            </div>

            {isOpen && (
                <div className="absolute border border-gray-300 mt-2 w-full bg-white z-10 text-black">
                    <input
                        type="search"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full mt-0 border-t-0 border-r-0 border-l-0 border-b border-gray-300 rounded-none"
                    />
                    <div className="max-h-40 overflow-y-auto">
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map(option => (
                                <div
                                    key={option.value}
                                    className="p-2 hover:bg-gray-200 cursor-pointer"
                                    onClick={() => handleSelect(option.value)}
                                >
                                    {option.label}
                                </div>
                            ))
                        ) : (
                            <div className="p-2">No options available</div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

const PrimaryDetails = () => {
    const [selectedItems, setSelectedItems] = useAtom(selectedItemsAtom);

    const [playerName, setPlayerName] = useAtom(playerNameAtom);
    const [playerImage, setPlayerImage] = useAtom(playerImageAtom);
    const [overall, setOverall] = useAtom(overallAtom);
    const [rarity, setRarity] = useAtom(rarityAtom);
    const [nation, setNation] = useAtom(nationAtom);
    const [league, setLeague] = useAtom(leagueAtom);
    const [countries, setCountries] = useAtom(countriesAtom);
    const [rarities, setRarities] = useAtom(raritiesAtom);
    const [leagues, setLeagues] = useAtom(leaguesAtom);

    const BaseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${BaseURL}/cards/all`);
                const result = await response.json();
                setRarities(result.data.data);
                if (selectedItems) {
                    setRarity(selectedItems.rarity);
                } else {
                    setRarity(result.data.data[0].image);
                }
            } catch (error) {
                console.error('Error fetching the rarities:', error);
            }
        };

        fetchData();
    }, [BaseURL, selectedItems]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${BaseURL}/countries/all`);
                const result = await response.json();
                setCountries(result.data.data);
                if (selectedItems) {
                    setNation(selectedItems.nationality);
                } else {
                    setNation(result.data.data[0].image);
                }
            } catch (error) {
                console.error('Error fetching the countries:', error);
            }
        };

        fetchData();
    }, [BaseURL, selectedItems]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${BaseURL}/leagues/all`);
                const result = await response.json();
                setLeagues(result.data.data);
                if (selectedItems) {
                    setLeague(selectedItems.league);
                } else {
                    setLeague(result.data.data[0].image);
                }
            } catch (error) {
                console.error('Error fetching the leagues:', error);
            }
        };

        fetchData();
    }, [BaseURL, selectedItems]);

    useEffect(() => {
        if (selectedItems) {
            setPlayerName(selectedItems.playerName);
            setOverall(selectedItems.overall);
            setPlayerImage(selectedItems.image);
        }
    }, [selectedItems]);

    const rarityOptions = rarities.map(rarity => ({
        value: rarity.image,
        label: rarity.cardName
    }));

    const countryOptions = countries.map(country => ({
        value: country.image,
        label: country.countryName
    }));

    const leagueOptions = leagues.map(league => ({
        value: league.image,
        label: league.leagueName
    }));

    return (
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
                        <SearchableSelect
                            id="rarity"
                            value={rarity}
                            onChange={setRarity}
                            options={rarityOptions}
                            placeholder="Select Rarity"
                            label="Rarity"
                        />
                    </div>
                </div>

                <div className="form-row flex flex-col md:flex-row lg:flex-row xl:flex-row gap-5 pb-5 justify-between">
                    <div className="form-group w-full">
                        <SearchableSelect
                            id="nation"
                            value={nation}
                            onChange={setNation}
                            options={countryOptions}
                            placeholder="Select Nation"
                            label="Nation"
                        />
                    </div>

                    <div className="form-group w-full">
                        <SearchableSelect
                            id="league"
                            value={league}
                            onChange={setLeague}
                            options={leagueOptions}
                            placeholder="Select League"
                            label="League"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrimaryDetails;
