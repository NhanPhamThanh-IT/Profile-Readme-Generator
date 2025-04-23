import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

export const Page = ({ title, children }) => {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <>
            <Helmet>
                <title>
                    {title}
                </title>
            </Helmet>
            {children}
        </>
    );
};

export default Page;