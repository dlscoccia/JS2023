export const createPageUrl = (
    pageNumber: number | string,
    totalPages: number,
    pathname: string,
    searchParams: string
) => {
    const params = new URLSearchParams(searchParams);

    if (pageNumber === '...') {
        return `${pathname}?${params}`;
    }

    if (Number(pageNumber) <= 0) {
        return `${pathname}`;
    }

    if (Number(pageNumber) > totalPages) {
        return `${pathname}?${params}`;
    }

    params.set('page', pageNumber.toString());
    return `${pathname}?${params}`;
};
