import React, { useState } from 'react';
import { CircularProgress } from '@mui/material';

const AssetFormiFrame = () => {
    const [iframeLoaded, setIframeLoaded] = useState(false);

    const handleIframeLoad = () => {
        setIframeLoaded(true);
    };

    const spinnerContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '750px', 
    };

    return (
        <div>
            {!iframeLoaded && (
                <div style={spinnerContainerStyle}>
                    <CircularProgress />
                </div>
            )}
            <div style={{ display: iframeLoaded ? 'block' : 'none', marginTop: 40}}>
                <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
                <iframe
                    className="airtable-embed airtable-dynamic-height"
                    src="https://airtable.com/embed/apphQBuS3DFnPYMFm/shrsO3SBO3YKOJRIX?backgroundColor=purple"
                    onLoad={handleIframeLoad}
                    width="100%"
                    height="1725px"
                    title="TCIG Asset Tracker"
                    style={{ background: 'transparent', border: '1px solid #ccc' }}
                ></iframe>
            </div>
        </div>
    );
};

export default AssetFormiFrame;