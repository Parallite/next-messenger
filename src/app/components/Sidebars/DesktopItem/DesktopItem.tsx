import React, { FC } from 'react'
import clsx from 'clsx'
import Link from 'next/link'

interface DesktopItemProps {
    href: string;
    label: string;
    icon: any;
    active?: boolean;
    onClick?: () => void;
}

export const DesktopItem: FC<DesktopItemProps> = ({
    href,
    label,
    icon: Icon,
    active,
    onClick
}) => {
    const handleClick = () => {
        if (onClick) {
            return onClick();
        }
    }

    return (
        <li onClick={handleClick}>
            <Link
                href={href}
                className={clsx(`
                    group 
                    flex
                    m-2 
                    gap-x-3 
                    rounded-md 
                    p-3 
                    text-sm 
                    leading-6 
                    font-semibold 
                    text-white-primary
                    shadow-2xl
                    hover:bg-white-primary
                    hover:text-blue-dark
                `,
                active && 'bg-blue-middle text-blue-dark w-full rounded-r-none'
            )}>
                <Icon className="h-6 w-6 shrink-0" />
                <span className='sr-only'>
                    {label}
                </span>
            </Link>
        </li>
    )
}
