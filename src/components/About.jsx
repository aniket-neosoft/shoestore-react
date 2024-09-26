import React from 'react';

const About = () => {
    return (
        <div className="bg-gray-100 h-screen">
            <div className="container mx-auto px-4 py-8">
                <section className="about text-center">
                    <h2 className="text-3xl font-semibold mb-4">About Us</h2>
                    <p className="mb-4 leading-relaxed text-gray-700">
                        Welcome to ShoeStore, your number one source for all things shoes. We're dedicated to giving you the very
                        best of footwear, with a focus on quality, customer service, and uniqueness.
                    </p>
                    <p className="mb-4 leading-relaxed text-gray-700">
                        Founded in 2024, ShoeStore has come a long way from its beginnings. When we first started out, our passion
                        for providing the best shoes drove us to do tons of research so that ShoeStore can offer you the world's most
                        advanced footwear. We now serve customers all over the world and are thrilled that we're able to turn our
                        passion into our own website.
                    </p>
                    <p className="mb-4 leading-relaxed text-gray-700">
                        We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or
                        comments, please don't hesitate to contact us.
                    </p>
                    <p className="leading-relaxed text-gray-700">
                        Sincerely, The ShoeStore Team
                    </p>
                </section>
            </div>
        </div>
    );
};

export default About;
