const styles = (darkMode) => {
    const teal = {
        light: {
            background: '#e0f7f4',
            text: '#004d40',
            codeBackground: '#f1f8f7',
            codeText: '#00332f',
            placeholderBackground: '#f0fdfa',
            placeholderText: '#4f837b',
            boxShadow: 'rgba(0, 0, 0, 0.08)',
            linkColor: '#00796b',
            tableHead: '#d0f0ed',
            tableBorder: '#c8e6e5',
        },
        dark: {
            background: '#0f2b2e',
            text: '#a7ffeb',
            codeBackground: '#1d3c3b',
            codeText: '#e0f2f1',
            placeholderBackground: '#1c3a3a',
            placeholderText: '#81d8cf',
            boxShadow: 'rgba(255, 255, 255, 0.08)',
            linkColor: '#1de9b6',
            tableHead: '#244948',
            tableBorder: '#2c6461',
        }
    };

    const c = darkMode ? teal.dark : teal.light;

    return {
        placeholderBox: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            p: 3,
            textAlign: 'center',
            backgroundColor: darkMode ? 'black' : 'white',
            border: `2px solid ${darkMode ? '#1de9b6' : '#00897b'}`,
            color: c.placeholderText,
            boxShadow: `0 2px 4px ${c.boxShadow}`,
            transition: 'background-color 0.3s, color 0.3s',
        },
        previewBox: {
            height: '100%',
            overflowY: 'auto',
            backgroundColor: darkMode ? 'black' : 'white',
            color: c.text,
            paddingX: '16px',
            transition: 'background-color 0.3s, color 0.3s',
            '& h1, & h2, & h3, & h4, & h5, & h6': {
                color: c.text,
                marginTop: '24px',
                marginBottom: '16px',
                borderBottom: `1px solid ${darkMode ? '#2c6461' : '#b2dfdb'}`,
                paddingBottom: '8px',
            },
            '& p': {
                lineHeight: 1.6,
                marginBottom: '16px',
            },
            '& a': {
                color: c.linkColor,
                textDecoration: 'none',
                '&:hover': {
                    textDecoration: 'underline',
                },
            },
            '& blockquote': {
                borderLeft: `4px solid ${darkMode ? '#2c6461' : '#80cbc4'}`,
                paddingLeft: '16px',
                margin: '16px 0',
                color: c.text,
                backgroundColor: darkMode ? '#163534' : '#e0f7f4',
                borderRadius: '4px',
            },
            '& ul, & ol': {
                marginBottom: '16px',
                paddingLeft: '30px',
            },
            '& li': {
                marginBottom: '8px',
            },
            '& img': {
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: `0 2px 4px ${c.boxShadow}`,
                marginTop: '16px',
                marginBottom: '16px',
            },
            '& table': {
                width: '100%',
                borderCollapse: 'collapse',
                marginBottom: '16px',
                boxShadow: `0 1px 3px ${c.boxShadow}`,
            },
            '& th, & td': {
                border: `1px solid ${c.tableBorder}`,
                padding: '10px 12px',
                textAlign: 'left',
            },
            '& thead th': {
                backgroundColor: c.tableHead,
                fontWeight: 'bold',
            },
            '& tbody tr:nth-of-type(even)': {
                backgroundColor: darkMode ? '#163534' : '#f1fdfb',
            },
            '& pre.code-block': {
                backgroundColor: c.codeBackground,
                color: c.codeText,
                borderRadius: '8px',
                boxShadow: `0 1px 3px ${c.boxShadow}`,
                padding: '16px',
                whiteSpace: 'pre-wrap',
                wordWrap: 'break-word',
                fontFamily: '"Fira Code", Consolas, Monaco, monospace',
                fontSize: '0.9em',
                overflowX: 'auto',
                margin: '16px 0',
                transition: 'background-color 0.3s, color 0.3s',
            },
            '& :not(pre) > code': {
                backgroundColor: darkMode ? '#2a4f4e' : '#d0f0ed',
                color: darkMode ? '#b2dfdb' : '#004d40',
                padding: '3px 6px',
                borderRadius: '4px',
                fontFamily: '"Fira Code", Consolas, Monaco, monospace',
                fontSize: '0.85em',
            },
        },
    };
};

export default styles;
