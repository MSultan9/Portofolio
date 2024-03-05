"use client";

import { useState } from "react";

const Tabs = () => {
    const [active, setActive] = useState(1)

    const onTabClick = (clicked: number) => {
        setActive(clicked)
    }
    return (
        <>
            <div className="flex justify-center mb-10">
                <ul className="text-center text-white rounded-full flex bg-black p-2">
                    <li>
                        <button onClick={() => onTabClick(1)} className={`p-4 inline-block rounded-full transition-colors ${active === 1 ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-transparent'}`}>Professional Projects</button>
                    </li>
                    <li>
                        <button onClick={() => onTabClick(2)} className={`p-4 inline-block rounded-full transition-colors ${active === 2 ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-transparent'}`}>Personal Projects</button>
                    </li>
                </ul>
            </div>
            {active === 1 ?
                <div className="grid grid-cols-2 gap-5 lg:gap-10 container mx-auto">
                    <a href="https://easyesuite.com/" target="_blank" className="bg-secondary hover:bg-gradient-to-r from-primary to-secondary p-5 rounded-2xl text-white transition-colors">
                        <span className="text-3xl">Easy Esuite</span>
                        <br />
                        <br />
                        <span>An ERP solution to connect Business End-Points, one of my projects at Acksession LLC</span>
                    </a>
                    <a href="https://mobilisations-en-france.cgt.fr/" target="_blank" className="bg-secondary hover:bg-gradient-to-r from-primary to-secondary p-5 rounded-2xl text-white transition-colors">
                        <span className="text-3xl">CGT Carte</span>
                        <br />
                        <br />
                        <span>A Google maps component to add and search events in France, Bluedrop.fr</span>
                    </a>
                    <a href="https://www.conf-plus.com/" target="_blank" className="bg-secondary hover:bg-gradient-to-r from-primary to-secondary p-5 rounded-2xl text-white transition-colors">
                        <span className="text-3xl">Confplus</span>
                        <br />
                        <br />
                        <span>A Website for the preparation of EDN online, Bluedrop.fr</span>
                    </a>
                    <a href="https://www.lignesdazur.com/" target="_blank" className="bg-secondary hover:bg-gradient-to-r from-primary to-secondary p-5 rounded-2xl text-white transition-colors">
                        <span className="text-3xl">Lignes d'Azur</span>
                        <br />
                        <br />
                        <span>A Transportation website for the Lignes d'Azur network, Bluedrop.fr</span>
                    </a>
                    <a href="https://www.oce.global/" target="_blank" className="bg-secondary hover:bg-gradient-to-r from-primary to-secondary p-5 rounded-2xl text-white transition-colors">
                        <span className="text-3xl">OCE</span>
                        <br />
                        <br />
                        <span>A Website for the Office for Climate Education, Bluedrop.fr</span>
                    </a>
                    <a href="https://www.operagrandavignon.fr/" target="_blank" className="bg-secondary hover:bg-gradient-to-r from-primary to-secondary p-5 rounded-2xl text-white transition-colors">
                        <span className="text-3xl">Opera Grand Avignon</span>
                        <br />
                        <br />
                        <span>A Website for Opera Grand Avignon in France, Bluedrop.fr</span>
                    </a>
                    <a href="https://www.cdr.gov.lb/en-us" target="_blank" className="bg-secondary hover:bg-gradient-to-r from-primary to-secondary p-5 rounded-2xl text-white transition-colors">
                        <span className="text-3xl">CDR</span>
                        <br />
                        <br />
                        <span>A Website for the Council for Development & Reconstruction in Lebanon, Arabia GIS</span>
                    </a>
                    <a href="https://portal.cdr.gov.lb/" target="_blank" className="bg-secondary hover:bg-gradient-to-r from-primary to-secondary p-5 rounded-2xl text-white transition-colors">
                        <span className="text-3xl">CDR Reporting Tool</span>
                        <br />
                        <br />
                        <span>A web reporting tool for the Council for Development & Reconstruction in Lebanon, Arabia GIS</span>
                    </a>
                </div>
                :
                <div className="grid grid-cols-2 gap-5 lg:gap-10 container mx-auto">
                    <a href="https://frontend-mentor-challenges-17.vercel.app/" target="_blank" className="bg-secondary hover:bg-gradient-to-r from-primary to-secondary p-5 rounded-2xl text-white transition-colors">
                        <span className="text-3xl">Shortly</span>
                        <br />
                        <br />
                        <span>A url shortening api website, one of the challenges on frontend mentor</span>
                    </a>
                    <a href="https://frontend-mentor-challenges-18.vercel.app/" target="_blank" className="bg-secondary hover:bg-gradient-to-r from-primary to-secondary p-5 rounded-2xl text-white transition-colors">
                        <span className="text-3xl">Rock Paper Scissors</span>
                        <br />
                        <br />
                        <span>Rock Paper Scissors Lizard Spock game, one of the challenges on frontend mentor</span>
                    </a>
                    <a href="https://frontend-mentor-challenges-19.vercel.app/" target="_blank" className="bg-secondary hover:bg-gradient-to-r from-primary to-secondary p-5 rounded-2xl text-white transition-colors">
                        <span className="text-3xl">Easy Bank</span>
                        <br />
                        <br />
                        <span>Easy Bank landing page, one of the challenges on frontend mentor</span>
                    </a>
                    <a href="https://frontend-mentor-challenges-16.vercel.app/" target="_blank" className="bg-secondary hover:bg-gradient-to-r from-primary to-secondary p-5 rounded-2xl text-white transition-colors">
                        <span className="text-3xl">Bookmark</span>
                        <br />
                        <br />
                        <span>Bookmark landing page, one of the challenges on frontend mentor</span>
                    </a>
                    <a href="https://frontend-mentor-challenges-15.vercel.app/" target="_blank" className="bg-secondary hover:bg-gradient-to-r from-primary to-secondary p-5 rounded-2xl text-white transition-colors">
                        <span className="text-3xl">Manage</span>
                        <br />
                        <br />
                        <span>Manage landing page, one of the challenges on frontend mentor</span>
                    </a>
                    <a href="https://frontend-mentor-challenges-14.vercel.app/" target="_blank" className="bg-secondary hover:bg-gradient-to-r from-primary to-secondary p-5 rounded-2xl text-white transition-colors">
                        <span className="text-3xl">Insure</span>
                        <br />
                        <br />
                        <span>Insure landing page, one of the challenges on frontend mentor</span>
                    </a>
                    <a href="https://frontend-mentor-challenges-11.vercel.app/" target="_blank" className="bg-secondary hover:bg-gradient-to-r from-primary to-secondary p-5 rounded-2xl text-white transition-colors">
                        <span className="text-3xl">Clipboard</span>
                        <br />
                        <br />
                        <span>Clipboard landing page, one of the challenges on frontend mentor</span>
                    </a>
                    <a href="https://frontend-mentor-challenges-10.vercel.app/" target="_blank" className="bg-secondary hover:bg-gradient-to-r from-primary to-secondary p-5 rounded-2xl text-white transition-colors">
                        <span className="text-3xl">Fylo</span>
                        <br />
                        <br />
                        <span>Fylo landing page, one of the challenges on frontend mentor</span>
                    </a>
                    <a href="https://frontend-mentor-challenges-9.vercel.app/" target="_blank" className="bg-secondary hover:bg-gradient-to-r from-primary to-secondary p-5 rounded-2xl text-white transition-colors">
                        <span className="text-3xl">Huddle</span>
                        <br />
                        <br />
                        <span>Huddle landing page, one of the challenges on frontend mentor</span>
                    </a>
                    <a href="https://resilient-cat-301a44.netlify.app/" target="_blank" className="bg-secondary hover:bg-gradient-to-r from-primary to-secondary p-5 rounded-2xl text-white transition-colors">
                        <span className="text-3xl">Edie</span>
                        <br />
                        <br />
                        <span>Edie landing page, one of the challenges on devChallenges.io</span>
                    </a>
                    <a href="https://moonlit-puppy-95fab1.netlify.app/" target="_blank" className="bg-secondary hover:bg-gradient-to-r from-primary to-secondary p-5 rounded-2xl text-white transition-colors">
                        <span className="text-3xl">Country Quiz</span>
                        <br />
                        <br />
                        <span>Country Quiz app, one of the challenges on devChallenges.io</span>
                    </a>
                    <a href="https://gregarious-pika-998c74.netlify.app/" target="_blank" className="bg-secondary hover:bg-gradient-to-r from-primary to-secondary p-5 rounded-2xl text-white transition-colors">
                        <span className="text-3xl">Weather app</span>
                        <br />
                        <br />
                        <span>Weather app, one of the challenges on devChallenges.io</span>
                    </a>
                </div>
            }
        </>
    )
}

export default Tabs