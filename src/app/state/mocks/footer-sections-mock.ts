import { FooterItem, FooterSection } from 'src/app/common/models';

export const footerSections: FooterSection[] = [
    new FooterSection(
        'Services',
        [
            new FooterItem('Market Research', '/market-awareness/market-research'),
            new FooterItem('Market Insight', '/market-awareness/market-insight'),
            new FooterItem('Brand Design', '/digital-design/brand-design'),
            new FooterItem('Web Development', '/digital-presence/web-development'),
            new FooterItem('Custom Email', '/digital-presence/custom-email'),
            new FooterItem('Reputation Management', '/customer-experience/reputation-management'),
            new FooterItem('View all services', '/services')
        ]
    ),
    new FooterSection(
        'Blogs & Socials',
        [
            new FooterItem('Interactive IndiVisuals Blog', '/blog')
        ]
    ),
    new FooterSection(
        'Support',
        [
            new FooterItem('Help Center', '/help-center'),
            new FooterItem('Frequently Asked Questions', '/faq')
        ]
    ),
    new FooterSection(
        'Contact Us',
        [
            new FooterItem('+27 65 434 3334', 'tel:+27 65 434 3334'),
            new FooterItem('hello@interactiveindivisuals.com', 'mailto:hello@interactiveindivisuals.com')
        ]
    )
];