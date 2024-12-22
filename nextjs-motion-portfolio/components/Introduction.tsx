'use client';
import Image from 'next/image';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export const Introduction = () => {
    return (
        <div className='z-20 w-full bg-darkBg/60'>
            <div className='z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2'>
                <Image
                    src={'/home-4.png'}
                    priority
                    width='800'
                    height='800'
                    alt='Profile'
                />
                <div className='flex flex-col justify-center max-w-md'>
                    <h1 className='mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10'>
                        Si puedes pensarlo,{' '}
                        <TypeAnimation
                            sequence={[
                                'puedes programarlo',
                                1000,
                                'puedes optimizarlo',
                                1000,
                                'puedes implementarlo',
                                1000,
                                'puedes desarrollarlo',
                                1000,
                            ]}
                            wrapper='span'
                            speed={50}
                            repeat={Infinity}
                            className='font-bold text-secondary'
                        />
                    </h1>
                </div>
            </div>
        </div>
    );
};
