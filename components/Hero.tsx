"use client";

import React from 'react'
import Image from 'next/image';
import { CustomButton } from '.'

export default function Hero() {
    const handleScroll = () => {

    }
    return (
        <div className='hero'>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='hero__title'>
                    Find, book or rent a car - qucikly and easily!
                </h1>

                <p className='hero__subtitle'>
                    Streamline your car rental and expericence with effortless booking process.
                </p>

                <CustomButton
                    title="Explore Cars"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll}
                    btnType='submit'

                />

                <div className='hero__image-container'>
                    <div className='hero_image'>
                        <Image src="/hero.png" alt="hero" fill className="object-contain" />

                        <div className='hero__image-overlay' />
                    </div>
                </div>
            </div>
        </div>
    )
}
