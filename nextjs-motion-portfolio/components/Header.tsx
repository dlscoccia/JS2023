import Link from 'next/link';
import { TransitionComponent } from './TransitionComponent';
import { socialNetworks } from '@/data';

export const Header = () => {
    return (
        <TransitionComponent
            position='bottom'
            className='absolute z-40 inline-block w-full top-5 md:top-10'>
            <header>
                <div className='container justify-between max-w-6xl mx-auto md:flex'>
                    <Link href={'/'}>
                        <h1 className='my-3 text-4xl font-bold text-center md:text-left'>
                            Fonzi<span className='text-secondary'>Lord</span>
                        </h1>
                    </Link>
                    <div className='flex items-center justify-center gap-7 '>
                        {socialNetworks.map(({ logo, src, id }) => (
                            <Link
                                href={src}
                                key={id}
                                target='_blank'
                                className='transition-all duration-300 hover:text-secondary'>
                                {logo}
                            </Link>
                        ))}
                    </div>
                </div>
            </header>
        </TransitionComponent>
    );
};