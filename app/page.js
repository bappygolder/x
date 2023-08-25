"use client";
import Head from 'next/head';
import { useState } from 'react';
import { callToActionPillars, generalPillars, contentTypes } from '../constants/content';

export default function Home() {
    const [showContentType, setShowContentType] = useState(true);
    const [showCTA, setShowCTA] = useState(true);
    const [suggestedContent, setSuggestedContent] = useState({
        nextTweet: '',
        contentType: '',
        possibleCTA: ''
    });
    const [startText, setStartText] = useState(false)

    const displayNext = () => {
        const shuffledGeneralIndex = Math.floor(Math.random() * generalPillars.length);
        const shuffledContentIndex = Math.floor(Math.random() * contentTypes.length);
        const shuffledCTAIndex = Math.floor(Math.random() * callToActionPillars.length);

        const nextGeneral = generalPillars[shuffledGeneralIndex];
        const nextContent = showContentType ? contentTypes[shuffledContentIndex] : '';
        const nextCTA = showCTA ? callToActionPillars[shuffledCTAIndex] : '';

        setSuggestedContent({
            nextTweet: nextGeneral,
            contentType: nextContent,
            possibleCTA: nextCTA
        });

        setStartText(!startText)
    };

    return (
        <>
            <Head>
                {/* ... Head content ... */}
            </Head>
            <div className="flex justify-center items-center h-screen">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md flex flex-col justify-center">
                    <h1 className="text-xl text-[#333333] font-sans mb-6 font-[600]">Your Next 𝕏 Post Suggestion</h1>
                    <div className="bg-gray-200 p-4 rounded-md mb-4">
                      {startText ?  
                        <div className="text-[#000000]" id="generatedContent">
                            <div className="flex items-center justify-between mb-2">
                                <div className="title text-[16px] w-[150px] font-[600]">Next Post:</div>
                                <div className="content text-[16px] w-[230px]" id="nextTweet">{suggestedContent.nextTweet}</div>
                            </div>
                            {showContentType && (
                                <div className="flex items-center justify-between mb-2">
                                    <div className="title text-[16px] w-[150px] font-[600]">Content Type:</div>
                                    <div className="content text-[16px] w-[230px]" id="contentType">{suggestedContent.contentType}</div>
                                </div>
                            )}
                            {showCTA && (
                                <div className="flex items-center justify-between">
                                    <div className="title text-[16px] w-[150px] font-[600]">Possible CTA:</div>
                                    <div className="content text-[16px] w-[230px]" id="possibleCTA">{suggestedContent.possibleCTA}</div>
                                </div>
                            )}
                        </div>:
                        <div className="">
                        <p className="placeholder-text">Click the blue button below to start getting topics for your next piece of content.</p>
                    </div>
                        }
                    </div>

                    <div className="mb-4">
                        <div className="flex mb-2">
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    id="contentTypeToggle"
                                    checked={showContentType}
                                    onChange={() => setShowContentType(!showContentType)}
                                />
                                <span className="slider"></span>
                            </label>
                            <label htmlFor="contentTypeToggle" className="ml-2 text-[#959596]">Show Content Type</label>
                        </div>
                        <div className="flex">
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    id="ctaToggle"
                                    checked={showCTA}
                                    onChange={() => setShowCTA(!showCTA)}
                                />
                                <span className="slider"></span>
                            </label>
                            <label htmlFor="ctaToggle" className="ml-2 text-[#959596]">Show Possible CTA</label>
                        </div>
                    </div>

                    <button className="bg-[#007bff] text-white py-4 rounded-md transition-colors w-full" onClick={displayNext}>Get Next Combination</button>
                </div>
            </div>
        </>
    );
}
