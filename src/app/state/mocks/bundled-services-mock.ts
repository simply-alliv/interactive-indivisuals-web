import { BundledService } from 'src/app/common/models';
import { ServiceID } from 'src/app/common/enums';

export const bundledServicesMockData: BundledService[] = [
    {
        id: 'market-awareness',
        name: 'Market Awareness',
        description: 'Understand your target market, implement data-driven digital solutions, and increase reach.',
        featuredServicesIds: [
          ServiceID.marketResearch,
          ServiceID.marketInsight
        ]
      },
      {
        id: 'digital-design',
        name: 'Digital Design',
        description: 'Design your brand image and develop a digital marketing solution to effectively communicate ' +
          'with your target market.',
          featuredServicesIds: [
            ServiceID.brandDesign,
            ServiceID.webDesign
          ]
      }, 
      {
        id: 'digital-presence',
        name: 'Digital Presence',
        description: 'Develop and implement your digital channels and connect with your customers.',
        featuredServicesIds: [
          ServiceID.mediaStrategy,
          ServiceID.contentCreation,
          ServiceID.webDevelopment,
          ServiceID.customEmail
        ]
      },
      {
        id: 'customer-experience',
        name: 'Customer Experience',
        description: 'Simplify and integrate all your retail channels to give your customers a seamless experience.',
        featuredServicesIds: [
          ServiceID.reputationManagement,
          ServiceID.omnichannelRetailing,
          ServiceID.abandonmentReduction
        ]
      },
      {
        id: 'digital-marketing',
        name: 'Digital Marketing',
        description: 'Market and grow your retail business effectively through digital channels and improve ' +
          'your sales and ROI.',
          featuredServicesIds: [
            ServiceID.brandAwareness,
            ServiceID.salesGeneration,
            ServiceID.leadGeneration,
            ServiceID.trafficGeneration,
            ServiceID.customerEducation
          ]
      },
      {
        id: 'digital-care',
        name: 'Digital Care',
        description: 'Protect your retail business\' brand and future with on-going maintenance and enhancements ' +
          'on your digital investments.',
          featuredServicesIds: [
            ServiceID.marketCare,
            ServiceID.webCare
          ]
      }
];
