import { faEnvelope, faMapMarkerAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import TeamCard from '../shared/components/TeamCard';

const fetchTeamData = async () => {
    return [
        {
            name: "John Doe",
            job: "Frontend Developer",
            image: '../assets/avatar-2.png',
        },
        {
            name: "Jane Doe",
            job: "Backend Developer",
            image: '../assets/avatar-7.png',
        },
        {
            name: "John Smith",
            job: "Full Stack Developer",
            image: '../assets/avatar-9.png',
        },
    ];
};

const About: React.FC = () => {
    const [teamData, setTeamData] = useState<any>([]);

    useEffect(() => {
        // Fetch the quiz data when the component mounts
        fetchTeamData().then(data => setTeamData(data));
    }, []);
    return (
        <div>
            {/* Hero Section */}
            <section className="py-12">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
                    {/* Left Content */}
                    <div className="md:w-1/2 text-center md:text-left">
                        <div className="flex items-center space-x-2">
                            <img src='../assets/logo.ico' alt="Logo" className="h-8 w-8" />
                            <h3 className="text-lg text-black font-bold">Quizzes</h3>
                        </div>
                        <p className="text-lg text-gray-600 mb-6">
                            Text here for testing
                        </p>
                        <div className="space-y-1 text-gray-600">
                            <p>
                                <strong>Contact</strong>
                            </p>
                            <p><FontAwesomeIcon icon={faEnvelope} /> hoangducpro001@gmail.com</p>
                            <p><FontAwesomeIcon icon={faMobileAlt} /> 9999999999</p>
                            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 10 PVB, Cau Giay, Ha Noi, Viet Nam</p>
                        </div>
                    </div>
                    {/* Right Image */}
                    <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                        <img
                            src='../assets/quiz-bg-01.jpeg' // Replace with your actual image path
                            alt="Quiz Hero"
                            className="rounded-lg max-w-full"
                        />
                    </div>
                </div>
            </section>
            <section className="py-12">
                <h2 className="text-center text-3xl font-bold mb-6">QUIZZES</h2>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {teamData?.map((quiz: any, index: any) => (
                        <TeamCard
                            key={index}
                            name={quiz.name}
                            job={quiz.job}
                            image={quiz.image}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;