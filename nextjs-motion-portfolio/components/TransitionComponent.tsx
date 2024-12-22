'use client';
import { fadeIn } from '@/utils/motion-transition';
import { motion } from 'motion/react';

interface Props {
    children: React.ReactNode;
    position: 'right' | 'bottom';
    className?: string;
}

export const TransitionComponent = ({
    children,
    position,
    className,
}: Props) => {
    return (
        <motion.div
            variants={fadeIn(position)}
            initial='hidden'
            animate='visible'
            exit='hidden'
            className={className}>
            {children}
        </motion.div>
    );
};
