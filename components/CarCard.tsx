"use client"
import { CarProps } from '@/types';
import Image from 'next/image';
import React, { useState } from 'react'
import CarDetails from './CarDetails';

interface CarPropsProps {
    car: CarProps
}

const CarCard = ({ car }: CarPropsProps) => {
    const { city_mpg, year, make, model, transmission, drive } = car;

    const [Open, setIsOpen] = useState(true);
    return (
        <div className='car-card-group'>
            {make} {model}
            <Image src="/hero.png" alt='hero ' width={50} height={50} />

            <CarDetails isOpen={true} closeModal={() => setIsOpen(false)} car={car} />
        </div>

    )
}

export default CarCard
