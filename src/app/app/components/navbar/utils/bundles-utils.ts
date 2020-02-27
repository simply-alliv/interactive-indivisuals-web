import {
    Bundle,
    Service,
    NavbarItem,
    NavbarSection,
    HeaderNavbarSectionItem,
    HeroNavbarSectionItem,
    PrimaryLinkNavbarSectionItem,
    SecondaryLinkNavbarSectionItem
} from "src/app/common/models";

export const convertBundleToNavbarItem = (bundle: Bundle, services: Service[]) => {
    return new NavbarItem(
        bundle.id,
        bundle.name,
        [
            new NavbarSection([
                new HeaderNavbarSectionItem(bundle.name + ' ' + 'Bundle'),
                new HeroNavbarSectionItem(bundle.description),
                new PrimaryLinkNavbarSectionItem('View Bundle', bundle.id)
            ]),
            new NavbarSection([
                new HeaderNavbarSectionItem('Featured Services'),
                ...services.map(service => {
                    return new SecondaryLinkNavbarSectionItem(
                        service.name,
                        service.description,
                        '/' + bundle.id + '/' + service.id
                    );
                })
            ])
        ]
    )
}

export const supportNavbarItem: NavbarItem = {
    id: 'support',
    label: 'Support',
    sections: [
        new NavbarSection([
            new HeaderNavbarSectionItem('Looking for Something'),
            new SecondaryLinkNavbarSectionItem(
                'Help Center',
                'Basic digital knowledge',
                '/help-center'
            ),
            new SecondaryLinkNavbarSectionItem(
                'Frequently Asked Questions',
                'The answers to your questions',
                '/faq'
            ),
            new PrimaryLinkNavbarSectionItem(
                'Contact Us',
                '/contact-us'
            )
        ])
    ]
};