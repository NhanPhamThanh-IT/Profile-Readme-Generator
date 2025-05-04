import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Page is a layout wrapper component that sets the document title dynamically
 * and renders its child elements. It uses both `react-helmet-async` and `document.title`
 * to ensure compatibility across different rendering environments.
 *
 * This component is useful for wrapping pages in a React app where dynamic title updates
 * and consistent layout management are needed.
 *
 * @component
 *
 * @param {Object} props - Props passed to the component.
 * @param {string} props.title - The title to be set for the browser tab and document.
 * @param {React.ReactNode} props.children - The content to be rendered inside the page.
 *
 * @returns {JSX.Element} A layout component that sets the page title and renders its content.
 *
 * @example
 * <Page title="User Profile">
 *   <UserProfile />
 * </Page>
 */
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
