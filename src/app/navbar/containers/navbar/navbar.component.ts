import { Component } from '@angular/core';

import { NavbarItem, NavbarSection, HeroNavbarSectionItem, PrimaryLinkNavbarSectionItem, SecondaryLinkNavbarSectionItem } from 'src/app/common/models';
import { HeaderNavbarSectionItem } from 'src/app/common/models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  navbarItems: NavbarItem[] = navbarItems;

  constructor() { }
}

const navbarItems: NavbarItem[] = [
  {
    label: 'Market Awareness',
    sections: [
      new NavbarSection([
        new HeaderNavbarSectionItem('Market Awareness Bundle'),
        new HeroNavbarSectionItem(
          'Understand your target market, implement data-driven digital solutions, and increase reach.'
        ),
        new PrimaryLinkNavbarSectionItem(
          'View Bundle',
          '/market-awareness'
        )
      ]),
      new NavbarSection([
        new HeaderNavbarSectionItem('Featured Services'),
        new SecondaryLinkNavbarSectionItem(
          'Market Research',
          'Understand your target audience and its shopping behaviours and personality.',
          '/market-awareness/market-research'
        ),
        new SecondaryLinkNavbarSectionItem(
          'Market Insight',
          'Understand actionable insights from target market, listen to customer feedback, ' +
          'and adapt digital strategy.',
          '/market-awareness/market-insight'
        )
      ])
    ]
  },
  {
    label: 'Digital Design',
    sections: [
      new NavbarSection([
        new HeaderNavbarSectionItem('Digital Design Bundle'),
        new HeroNavbarSectionItem(
          'Design your brand image and develop a digital marketing solution to effectively communicate ' +
          'with your target market.'
        ),
        new PrimaryLinkNavbarSectionItem(
          'View Bundle',
          '/digital-design'
        )
      ]),
      new NavbarSection([
        new HeaderNavbarSectionItem('Featured Services'),
        new SecondaryLinkNavbarSectionItem(
          'Brand Design',
          'Create a cohesive and impactful message with the right logo, colours, ' +
          'typography, and everything in between.',
          '/digital-design/brand-design'
        ),
        new SecondaryLinkNavbarSectionItem(
          'Web Design',
          'Create the perfect message for your target audience and potentials with a ' +
          'brand-specific website.',
          '/digital-design/web-design'
        )
      ])
    ]
  },
  {
    label: 'Digital Presence',
    sections: [
      new NavbarSection([
        new HeaderNavbarSectionItem('Digital Presence Bundle'),
        new HeroNavbarSectionItem(
          'Develop and implement your digital channels and connect with your customers.'
        ),
        new PrimaryLinkNavbarSectionItem(
          'View Bundle',
          '/digital presence'
        )
      ]),
      new NavbarSection([
        new HeaderNavbarSectionItem('Featured Services'),
        new SecondaryLinkNavbarSectionItem(
          'Media Strategy',
          'Implement a data-driven social media strategy and know how, when, and where to ' +
          'reach and communicate with your target market.',
          '/digital-presence/media-strategy'
        ),
        new SecondaryLinkNavbarSectionItem(
          'Content Creation',
          'Implement the right content and ensure that it effectively speaks and connects ' +
          'with your target audience.',
          '/digital-presence/content-creation'
        ),
        new SecondaryLinkNavbarSectionItem(
          'Web Development',
          "Implement web technologies amd ensure that you are visible wherever you're " +
          'searched for by your target audience',
          '/digital-presence/web-development'
        ),
        new SecondaryLinkNavbarSectionItem(
          'Custom Email',
          "Implement a business-branded email and improve your retail's brand and credibility.",
          '/digital-presence/custom-email'
        )
      ])
    ]
  },
  {
    label: 'Digital Experience',
    sections: [
      new NavbarSection([
        new HeaderNavbarSectionItem('Digital Experience Bundle'),
        new HeroNavbarSectionItem(
          'Simplify and integrate all your retail channels to give your users a seamless experience.'
        ),
        new PrimaryLinkNavbarSectionItem(
          'View Bundle',
          '/digital-experience'
        )
      ]),
      new NavbarSection([
        new HeaderNavbarSectionItem('Featured Services'),
        new SecondaryLinkNavbarSectionItem(
          'Reputation Management',
          "Improve your retail business's reputation online with tools and strategies to discover " +
          'and rectify customer issues.',
          '/digital-experience/reputation-management'
        ),
        new SecondaryLinkNavbarSectionItem(
          'Omnichannel Retailing',
          "Improve your customer's buying and exploring experience by giving them whatever they want, " +
          'whenever and wherever.',
          '/digital-experience/omnichannel-retailing'
        ),
        new SecondaryLinkNavbarSectionItem(
          'Abandonment Reduction',
          "Implement web technologies amd ensure that you are visible wherever you're " +
          'searched for by your target audience',
          '/digital-experience/abandonment-reduction'
        )
      ])
    ]
  },
  {
    label: 'Digital Marketing',
    sections: [
      new NavbarSection([
        new HeaderNavbarSectionItem('Digital Marketing Bundle'),
        new HeroNavbarSectionItem(
          'Market and grow your retail business effectively through digital channels and improve ' +
          'your sales and ROI.'
        ),
        new PrimaryLinkNavbarSectionItem(
          'View Bundle',
          '/digital-marketing'
        )
      ]),
      new NavbarSection([
        new HeaderNavbarSectionItem('Featured Services'),
        new SecondaryLinkNavbarSectionItem(
          'Brand Awareness',
          'Market your retail business to increase brand exposure and brand equity within ' +
          'competitive markets.',
          '/digital-marketing/brand-awareness'
        ),
        new SecondaryLinkNavbarSectionItem(
          'Sales Generation',
          'Market your retail business to increase sales and improve top and bottom line growth.',
          '/digital-marketing/sales-generation'
        ),
        new SecondaryLinkNavbarSectionItem(
          'Lead Generation',
          'Market your retail business to attract new customers and capture information on ' +
          'potentials.',
          '/digital-marketing/lead-generation'
        ),
        new SecondaryLinkNavbarSectionItem(
          'Traffic Generation',
          'Market your retail business to entice strangers and increase the number of ' +
          'visitors to your business.',
          '/digital-marketing/traffic-generation'
        ),
        new SecondaryLinkNavbarSectionItem(
          'Customer Education',
          'Market your retail business to further inform a customer on your products or ' +
          'services.',
          '/digital-marketing/customer-education'
        )
      ])
    ]
  },
  {
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
  },
]
