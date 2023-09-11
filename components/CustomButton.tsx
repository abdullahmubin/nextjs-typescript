"use client"; // set to render in client side

import React from 'react'
import { CustomButtonProps } from '@/types';

export default function CustomButton({ title, containerStyles, handleClick, btnType }: CustomButtonProps) {
    return (
        <button disabled={false}
            type={btnType || "button"}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span>
                {title}
            </span>
        </button>
    )
}
