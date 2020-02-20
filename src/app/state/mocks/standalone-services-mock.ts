import { StandaloneService } from 'src/app/common/models';
import { ServiceID } from 'src/app/common/enums';

export const standaloneServicesMockData: StandaloneService[] = [
    {
        id: ServiceID.marketResearch,
        name: 'Market Research',
        description: 'Understand your target audience and its shopping behaviours and personality.',
        bundleId: 'market-awareness'
      },
      {
        id: ServiceID.marketInsight,
        name: 'Market Insight',
        description: 'Understand actionable insights from target market, listen to customer feedback, ' +
          'and adapt digital strategy.',
        bundleId: 'market-awareness'
      },
      {
        id: ServiceID.brandDesign,
        name: 'Brand Design',
        description: 'Create a cohesive and impactful message with the right logo, colours, ' +
          'typography, and everything in between.',
        bundleId: 'digital-design'
      },
      {
        id: ServiceID.webDesign,
        name: 'Web Design',
        description: 'Create the perfect message for your target audience and potentials with a ' +
          'brand-specific website.',
        bundleId: 'digital-design'
      },
      {
        id: ServiceID.mediaStrategy,
        name: 'Media Strategy',
        description: 'Implement a data-driven social media strategy and know how, when, and where to ' +
          'reach and communicate with your target market.',
        bundleId: 'digital-presence'
      },
      {
        id: ServiceID.contentCreation,
        name: 'Content Creation',
        description: 'Implement the right content and ensure that it effectively speaks and connects ' +
          'with your target audience.',
        bundleId: 'digital-presence'
      },
      {
        id: ServiceID.webDevelopment,
        name: 'Web Development',
        description: "Implement web technologies amd ensure that you are visible wherever you're " +
          'searched for by your target audience',
        bundleId: 'digital-presence'
      },
      {
        id: ServiceID.customEmail,
        name: 'Custom Email',
        description: 'Implement a business-branded email and improve your retail\'s brand and credibility.',
        bundleId: 'digital-presence'
      },
      {
        id: ServiceID.reputationManagement,
        name: 'Reputation Management',
        description: 'Improve your retail business\'s reputation online with tools and strategies to discover ' +
          'and rectify customer issues.',
        bundleId: 'customer-experience'
      },
      {
        id: ServiceID.omnichannelRetailing,
        name: 'Omnichannel Retailing',
        description: 'Improve your customer\'s buying and exploring experience by giving them whatever they want, ' +
          'whenever and wherever.',
        bundleId: 'customer-experience'
      },
      {
        id: ServiceID.abandonmentReduction,
        name: 'Abandonment Reduction',
        description: 'Improve your retail business\' abandonment rate and increase sales through digital ' +
          'simplifications and transparency.',
        bundleId: 'customer-experience'
      },
      {
        id: ServiceID.brandAwareness,
        name: 'Brand Awareness',
        description: 'Market your retail business to increase brand exposure and brand equity within ' +
          'competitive markets.',
        bundleId: 'digital-marketing'
      },
      {
        id: ServiceID.salesGeneration,
        name: 'Sales Generation',
        description: 'Market your retail business to increase sales and improve top and bottom line growth.',
        bundleId: 'digital-marketing'
      },
      {
        id: ServiceID.leadGeneration,
        name: 'Lead Generation',
        description: 'Market your retail business to attract new customers and capture information on ' +
          'potentials.',
        bundleId: 'digital-marketing'
      },
      {
        id: ServiceID.trafficGeneration,
        name: 'Traffic Generation',
        description: 'Market your retail business to entice strangers and increase the number of ' +
          'visitors to your business.',
        bundleId: 'digital-marketing'
      },
      {
        id: ServiceID.customerEducation,
        name: 'Customer Education',
        description: 'Market your retail business to further inform a customer on your products or ' +
          'services.',
        bundleId: 'digital-marketing'
      },
      {
        id: ServiceID.marketCare,
        name: 'Market Care',
        description: 'Subscribe to on-going and in-depth analytics of your market and its valuable ' +
          'and actionable insights.',
        bundleId: 'digital-care'
      },
      {
        id: ServiceID.webCare,
        name: 'Web Care',
        description: 'Subscribe to on-going maintenance and enhancements of your website and its ' +
          'dependencies.',
        bundleId: 'digital-care'
      }
];
