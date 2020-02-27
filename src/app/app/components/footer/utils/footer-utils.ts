import { FooterItem, FooterSection, Service } from 'src/app/common/models';

export const addServicesSectionToFooterSections = (services: Service[]) => [
    new FooterSection(
        'Services',
        [
            ...services.map(service => new FooterItem(service.name, '/' + service.bundleId + '/' + service.id)),
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