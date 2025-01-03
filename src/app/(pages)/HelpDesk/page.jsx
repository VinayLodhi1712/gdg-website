'use client';
import { useEffect } from 'react';
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaUserPlus, FaQuestionCircle, FaEnvelope, FaComments } from "react-icons/fa";

const HelpCenterPage = () => {
    useEffect(() => {
        const updateProgressBar = () => {
            const progressBar = document.getElementById('progress-bar');
            if (progressBar) {
                const scrollTop = window.scrollY;
                const docHeight = document.body.scrollHeight - window.innerHeight;
                const scrollPercent = (scrollTop / docHeight) * 100;
                progressBar.style.width = scrollPercent + '%';
            }
        };

        window.addEventListener('scroll', updateProgressBar);

        return () => {
            window.removeEventListener('scroll', updateProgressBar);
        };
    }, []);

    return (
        <div>
            <div id="progress-bar" className="h-1 bg-blue-500"></div>
            <div className="flex">
                <Sidebar />
                <MainContent />
            </div>
        </div>
    );
};

const Sidebar = () => (
    <aside className="sidebar w-1/4 bg-gradient-to-b from-blue-500 to-purple-600 text-white p-5 sticky top-0 h-screen">
        <ul className="list-none p-0">
            <li>
                <a
                    href="#introduction"
                    className="flex items-center py-2 text-white hover:text-gray-200"
                >
                    <AiOutlineInfoCircle className="mr-2" /> <span>Introduction</span>
                </a>
            </li>
            <li>
                <a
                    href="#getting-started"
                    className="flex items-center py-2 text-white hover:text-gray-200"
                >
                    <FaUserPlus className="mr-2" /> <span>Getting Started</span>
                </a>
            </li>
            <li>
                <a
                    href="#faq"
                    className="flex items-center py-2 text-white hover:text-gray-200"
                >
                    <FaQuestionCircle className="mr-2" /> <span>Frequently Asked Questions</span>
                </a>
            </li>
            <li>
                <a
                    href="#contact"
                    className="flex items-center py-2 text-white hover:text-gray-200"
                >
                    <FaEnvelope className="mr-2" /> <span>Contact Support</span>
                </a>
            </li>
            <li>
                <a
                    href="#feedback"
                    className="flex items-center py-2 text-white hover:text-gray-200"
                >
                    <FaComments className="mr-2" /> <span>Feedback</span>
                </a>
            </li>
        </ul>
    </aside>
);

const MainContent = () => (
    <main className="main-content flex-1 p-8 bg-white shadow-md">
        <TitleSection />
        <Section id="introduction" icon={<AiOutlineInfoCircle />} title="Introduction">
            <p>
                This Help Center provides resources to assist you with our services.
                Whether you have questions about our products or need assistance, you
                can find useful information here.
            </p>
        </Section>
        <Section
            id="getting-started"
            icon={<FaUserPlus />}
            title="Getting Started"
        >
            <p>
                New to our platform? Start by creating an account and exploring features
                designed to help you easily buy, sell, and find local products and
                services.
            </p>
            <p>
                Discover how to connect with your community through our ads and
                listings, and make the most of our guides to learn how to navigate each
                section effectively for a seamless experience.
            </p>
        </Section>
        <Section
            id="faq"
            icon={<FaQuestionCircle />}
            title="Frequently Asked Questions"
        >
            <FAQItem
                question="What is your return policy?"
                answer="Our return policy allows you to return products within 30 days of receipt for a full refund."
            />
            <FAQItem
                question="How can I contact customer support?"
                answer="You can contact customer support via email at support@example.com or call us at 1-800-555-0199."
            />
            <FAQItem
                question="Do you offer technical support?"
                answer="Yes, we offer technical support for all our products. Please visit our support page for more information."
            />
        </Section>
        <Section id="contact" icon={<FaEnvelope />} title="Contact Support">
            <p>
                If you have any questions or need further assistance, please reach out
                to our support team:
            </p>
            <ul className="list-disc ml-5">
                <li>
                    Email:{' '}
                    <a href="mailto:support@example.com" className="text-blue-500">
                        support@example.com
                    </a>
                </li>
                <li>Phone: 1-800-555-0199</li>
                <li>Chat: Available on our website from 9 AM to 5 PM EST</li>
            </ul>
        </Section>
        <Section id="feedback" icon={<FaComments />} title="Feedback">
            <p>
                Your feedback is important to us! Please let us know how we can improve
                our services:
            </p>
            <a
                href="/feedback-form"
                className="inline-block mt-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
                Give Feedback
            </a>
        </Section>
    </main>
);

const TitleSection = () => (
    <div className="title-section mb-8 text-center">
        <h1 className="text-4xl font-bold text-blue-600">Help Center</h1>
        <p className="text-lg text-gray-700 mt-2">
            Welcome to our Help Center! Here you can find answers to your questions
            and get support for our services.
        </p>
    </div>
);

const Section = ({ id, icon, title, children }) => (
    <section id={id} className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 flex items-center border-l-4 border-blue-600 pl-2 mb-4">
            {icon} <span className="ml-2">{title}</span>
        </h2>
        {children}
    </section>
);

const FAQItem = ({ question, answer }) => (
    <div className="faq-item mb-4">
        <div className="faq-question font-semibold">{question}</div>
        <div className="faq-answer text-gray-700">{answer}</div>
    </div>
);

export default HelpCenterPage;
