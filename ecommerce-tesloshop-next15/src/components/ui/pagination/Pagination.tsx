'use client';
import Link from 'next/link';
import { redirect, usePathname, useSearchParams } from 'next/navigation';
import clsx from 'clsx';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import { createPageUrl, generatePaginationNumbers } from '@/utils';

interface Props {
    totalPages: number;
}

const Pagination = ({ totalPages }: Props) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const pageString = searchParams.get('page') ?? 1;
    let currentPage = isNaN(+pageString) ? 1 : +pageString;

    if (currentPage < 1 || isNaN(+pageString)) {
        redirect(pathname);
    }

    const allPages = generatePaginationNumbers(currentPage, totalPages);

    return (
        <div className='flex text-center justify-center mt-10 mb-32'>
            <nav aria-label='Page navigation example'>
                <ul className='flex list-style-none'>
                    <li className='page-item'>
                        <Link
                            className='page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none'
                            href={createPageUrl(
                                currentPage - 1,
                                totalPages,
                                pathname,
                                searchParams.toString()
                            )}>
                            <IoChevronBackOutline size={30} />
                        </Link>
                    </li>

                    {allPages.map((page, index) => (
                        <li className='page-item' key={page + '-' + index}>
                            <Link
                                className={clsx(
                                    'page-link relative block py-1.5 px-3 rounded border-0 outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none',
                                    {
                                        'bg-indigo-700 text-white shadow-md hover:bg-indigo-600 hover:text-white':
                                            page === currentPage,
                                    }
                                )}
                                href={createPageUrl(
                                    page,
                                    totalPages,
                                    pathname,
                                    searchParams.toString()
                                )}>
                                {page}
                            </Link>
                        </li>
                    ))}

                    <li className='page-item'>
                        <Link
                            className='page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none'
                            href={createPageUrl(
                                currentPage + 1,
                                totalPages,
                                pathname,
                                searchParams.toString()
                            )}>
                            <IoChevronForwardOutline size={30} />
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
