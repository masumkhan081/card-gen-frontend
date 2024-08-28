import { useAtom } from 'jotai'
import React, { useEffect } from 'react'
import {
    atackingAtom, defAtom, defensiveAtom, driAtom, footAtom, pacAtom, pasAtom, phyAtom, selectedItemsAtom, shoAtom,
    skillmovesAtom, weakAtom
} from '../../Atom/GlobalStates'

const PhysicalFitness = () => {

    const [selectedItems, setSelectedItems] = useAtom(selectedItemsAtom);

    const [pac, setPac] = useAtom(pacAtom);
    const [sho, setSho] = useAtom(shoAtom);
    const [pas, setPas] = useAtom(pasAtom);
    const [dri, setDri] = useAtom(driAtom);
    const [def, setDef] = useAtom(defAtom);
    const [phy, setPhy] = useAtom(phyAtom);
    const [foot, setFoot] = useAtom(footAtom);
    const [weakfoot, setWeakfoot] = useAtom(weakAtom);
    const [skillmoves, setSkillmoves] = useAtom(skillmovesAtom);
    const [attackig, setAttackig] = useAtom(atackingAtom);
    const [defensive, setDefensive] = useAtom(defensiveAtom);

    const handleInputChange = (setter) => (event) => {
        const value = event.target.value;

        if (value === '' || (value.length <= 2 && Number(value) <= 99)) {
            setter(value);
        }
    };


    const handleButtonClick = (setter, value) => () => {
        setter(value);
    };

    const buttonStyles = (isSelected) => ({
        backgroundColor: isSelected ? '#1E73BE' : 'transparent',
        color: isSelected ? '#ffffff' : '#000000',
        border: '1px solid rgb(175, 175, 175)'
    });

    useEffect(() => {
        if (selectedItems) {
            setPac(selectedItems.pace);
            setSho(selectedItems.shot);
            setPas(selectedItems.pass);
            setDri(selectedItems.dribbling);
            setDef(selectedItems.defense);
            setPhy(selectedItems.physical);

            setFoot(selectedItems.foot);
            setWeakfoot(selectedItems.weakFoot);
            setSkillmoves(selectedItems.skillMoves);
            setDefensive(selectedItems.defWorkrate);
            setAttackig(selectedItems.atkWorkrate);
        }
    }, [selectedItems]);

    return (
        <>
            <div className='border pb-5 rounded-[8px] border-selection-color mt-6'>
                <div className='h-12 bg-transparent text-selection-color border-b border-selection-color flex items-center p-4'>
                    <b>Physical Fitness and Skills</b>
                </div>

                <div className='pl-4 pr-4 pt-4'>
                    <div className="form-row flex flex-col md:flex-row lg:flex-row xl:flex-row gap-5 pb-2 justify-between">
                        <div className="w-full lg:w-1/2 md:w-1/2 xl:w-1/2 form-row flex flex-row gap-2 lg:gap-1 pb-5 justify-between">
                            <div className="form-group w-full">
                                <label htmlFor="pac" className="form-label">PAC</label>
                                <input
                                    id="pac"
                                    type="number"
                                    placeholder="PAC"
                                    className="form-input mt-3 text-center"
                                    min="0"
                                    max="99"
                                    value={pac}
                                    onChange={handleInputChange(setPac)}
                                />
                            </div>

                            <div className="form-group w-full">
                                <label htmlFor="sho" className="form-label">SHO</label>
                                <input
                                    id="sho"
                                    type="number"
                                    placeholder="SHO"
                                    className="form-input mt-3 text-center"
                                    min="0"
                                    max="99"
                                    value={sho}
                                    onChange={handleInputChange(setSho)}
                                />
                            </div>

                            <div className="form-group w-full">
                                <label htmlFor="pas" className="form-label">PAS</label>
                                <input
                                    id="pas"
                                    type="number"
                                    placeholder="PAS"
                                    className="form-input mt-3 text-center"
                                    min="0"
                                    max="99"
                                    value={pas}
                                    onChange={handleInputChange(setPas)}
                                />
                            </div>

                            <div className="form-group w-full">
                                <label htmlFor="dri" className="form-label">DRI</label>
                                <input
                                    id="dri"
                                    type="number"
                                    placeholder="DRI"
                                    className="form-input mt-3 text-center"
                                    min="0"
                                    max="99"
                                    value={dri}
                                    onChange={handleInputChange(setDri)}
                                />
                            </div>

                            <div className="form-group w-full">
                                <label htmlFor="def" className="form-label">DEF</label>
                                <input
                                    id="def"
                                    type="number"
                                    placeholder="DEF"
                                    className="form-input mt-3 text-center"
                                    min="0"
                                    max="99"
                                    value={def}
                                    onChange={handleInputChange(setDef)}
                                />
                            </div>

                            <div className="form-group w-full">
                                <label htmlFor="phy" className="form-label">PHY</label>
                                <input
                                    id="phy"
                                    type="number"
                                    placeholder="PHY"
                                    className="form-input mt-3 text-center"
                                    min="0"
                                    max="99"
                                    value={phy}
                                    onChange={handleInputChange(setPhy)}
                                />
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 md:w-1/2 xl:w-1/2 form-row flex flex-row md:flex-row lg:flex-row xl:flex-row gap-2 pb-5 justify-between">
                            <div className="form-group w-full">
                                <label htmlFor="foot" className="form-label">Foot</label>
                                <button
                                    className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]"
                                    style={buttonStyles(foot === 'L')}
                                    onClick={handleButtonClick(setFoot, 'L')}
                                >
                                    Left
                                </button>
                            </div>

                            <div className="form-group w-full">
                                <br />
                                <button
                                    className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]"
                                    style={buttonStyles(foot === 'R')}
                                    onClick={handleButtonClick(setFoot, 'R')}
                                >
                                    Right
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="form-row flex flex-col md:flex-row lg:flex-row xl:flex-row gap-5 pb-0">
                        <label className="form-label w-1/2">Skill Moves</label>
                        <label className="form-label w-1/2 hidden lg:block md:block">Weak Foot</label>
                    </div>
                    <div className="form-row flex flex-col md:flex-row lg:flex-row xl:flex-row gap-0 pb-2 md:gap-5 lg:gap-5 xl:gap-5 justify-between">
                        <div className="w-full lg:w-1/2 md:w-1/2 xl:w-1/2 form-row flex flex-row gap-2 lg:gap-1 pb-5 justify-between">
                            {[1, 2, 3, 4, 5].map((number) => (
                                <div className="form-group w-full" key={number}>
                                    <button
                                        className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]"
                                        style={buttonStyles(skillmoves === number)}
                                        onClick={handleButtonClick(setSkillmoves, number)}
                                    >
                                        {number}
                                    </button>
                                </div>
                            ))}
                        </div>

                        <label className="form-label w-1/2 block lg:hidden md:hidden pb-0">Weak Foot</label>

                        <div className="w-full lg:w-1/2 md:w-1/2 xl:w-1/2 form-row flex flex-row gap-2 lg:gap-1 pb-5 justify-between">
                            {[1, 2, 3, 4, 5].map((number) => (
                                <div className="form-group w-full" key={number}>
                                    <button
                                        className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]"
                                        style={buttonStyles(weakfoot === number)}
                                        onClick={handleButtonClick(setWeakfoot, number)}
                                    >
                                        {number}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="form-row flex flex-col md:flex-row lg:flex-row xl:flex-row gap-5 pb-0">
                        <label className="form-label w-1/2">Attacking Workrate</label>
                        <label className="form-label w-1/2 hidden lg:block md:block">Defensive Workrate</label>
                    </div>
                    <div className="form-row flex flex-col md:flex-row lg:flex-row xl:flex-row gap-0 pb-5 md:gap-5 lg:gap-5 xl:gap-5 justify-between">
                        <div className="w-full lg:w-1/2 md:w-1/2 xl:w-1/2 form-row flex flex-row gap-2 lg:gap-1 pb-5 justify-between">
                            {['H', 'M', 'L'].map((rate) => (
                                <div className="form-group w-full" key={rate}>
                                    <button
                                        className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]"
                                        style={buttonStyles(attackig === rate)}
                                        onClick={handleButtonClick(setAttackig, rate)}
                                    >
                                        {rate}
                                    </button>
                                </div>
                            ))}
                        </div>

                        <label className="form-label w-1/2 block lg:hidden md:hidden pb-0">Defensive Workrate</label>

                        <div className="w-full lg:w-1/2 md:w-1/2 xl:w-1/2 form-row flex flex-row gap-2 lg:gap-1 pb-5 justify-between">
                            {['H', 'M', 'L'].map((rate) => (
                                <div className="form-group w-full" key={rate}>
                                    <button
                                        className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]"
                                        style={buttonStyles(defensive === rate)}
                                        onClick={handleButtonClick(setDefensive, rate)}
                                    >
                                        {rate}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PhysicalFitness
