"use client"
import Image from 'next/image'
import React from 'react'

import PrimaryDetails from './form-sections/PrimaryDetails'
import PhysicalFitness from './form-sections/PhysicalFitness'
import Tactics from './form-sections/Tactics'

const MainForm = () => {
    return (
        <div className="form-container">
            <div>


                <PrimaryDetails />

                <PhysicalFitness/>

                <Tactics/>


            </div>
        </div>
    )
}

export default MainForm
