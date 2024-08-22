"use client"
import React from 'react'
import MainCardSettings from './form-sections/settings/MainCardSettings'
import LeagueSettings from './form-sections/settings/LeagueSettings'
import NationSettings from './form-sections/settings/NationSettings'

const CardSettings = () => {
    return (
        <div className="form-container">
            <div>


                <MainCardSettings/>

                <LeagueSettings/>

                <NationSettings/>



            </div>
        </div>
    )
}

export default CardSettings
