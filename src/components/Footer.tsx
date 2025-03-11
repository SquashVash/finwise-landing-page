import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import { getPlatformIconByName } from '@/utils';

const Footer: React.FC = () => {
    return (
        <footer className="bg-hero-background text-foreground py-10">
            <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="flex flex-col items-center text-center">
                    <Link href="/" className="flex items-center gap-2">
                        <Image 
                            src="/favicon.ico" 
                            alt="Logo" 
                            width={28} 
                            height={28}
                            className="min-w-fit"
                        />
                        <h3 className="manrope text-xl font-semibold cursor-pointer">
                            {siteDetails.siteName}
                        </h3>
                    </Link>
                    <p className="mt-3.5 text-foreground-accent">
                        {footerDetails.subheading}
                    </p>
                </div>
                <div>
                    
                </div>
                <div className="flex flex-col items-center text-center">
                    <h4 className="text-lg font-semibold mb-4">Contact Us</h4>

                    {footerDetails.email && <a href={`mailto:${footerDetails.email}`}  className="block text-foreground-accent hover:text-foreground">Email: {footerDetails.email}</a>}


                    {footerDetails.socials && (
                        <div className="mt-5 flex items-center justify-center gap-5 flex-wrap">
                            {Object.keys(footerDetails.socials).map(platformName => {
                                if (platformName && footerDetails.socials[platformName]) {
                                    return (
                                        <Link
                                            href={footerDetails.socials[platformName]}
                                            key={platformName}
                                            aria-label={platformName}
                                        >
                                            {getPlatformIconByName(platformName)}
                                        </Link>
                                    )
                                }
                            })}
                        </div>
                    )}
                </div>
            </div>
            <div className="mt-8 md:text-center text-foreground-accent px-6">
                <p>Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.</p>
                <p className="text-sm mt-2 text-gray-500">Made with &hearts; by <a href="https://nexilaunch.com" target="_blank">Nexi Launch</a></p>
                <p className="text-sm mt-2 text-gray-500">UI kit by <a href="https://ui8.net/youthmind/products/fintech-finance-mobile-app-ui-kit" target="_blank">Youthmind</a></p>
            </div>
        </footer>
    );
};

export default Footer;
