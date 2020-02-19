import { BundledService, BundleSquares } from 'src/app/common/models';

export const bundledServicesMockData: BundledService[] = [
    {
        id: 'market-awareness',
        name: 'Market Awareness',
        description: 'Understand your target market, implement data-driven digital solutions, and increase reach.',
        bundleSquares: new BundleSquares(1)
      },
      {
        id: 'digital-design',
        name: 'Digital Design',
        description: 'Design your brand image and develop a digital marketing solution to effectively communicate ' +
          'with your target market.',
        bundleSquares: new BundleSquares(2)
      },
      {
        id: 'digital-presence',
        name: 'Digital Presence',
        description: 'Develop and implement your digital channels and connect with your customers.',
        bundleSquares: new BundleSquares(3)
      },
      {
        id: 'customer-experience',
        name: 'Customer Experience',
        description: 'Simplify and integrate all your retail channels to give your customers a seamless experience.',
        bundleSquares: new BundleSquares(4)
      },
      {
        id: 'digital-marketing',
        name: 'Digital Marketing',
        description: 'Market and grow your retail business effectively through digital channels and improve ' +
          'your sales and ROI.',
        bundleSquares: new BundleSquares(5)
      },
      {
        id: 'digital-care',
        name: 'Digital Care',
        description: 'Protect your retail business\' brand and future with on-going maintenance and enhancements ' +
          'on your digital investments.',
        bundleSquares: new BundleSquares(6)
      }
];
