import React from 'react';
import './HelpSection.scss';

const helpData = [
  {
    title: 'How to Pay',
    description: 'Learn the steps for making secure payments using our platform.',
  },
  {
    title: 'FAQ',
    description: 'Find answers to common questions about our services.',
  },
  {
    title: 'Delivery',
    description: 'Understand how and when your orders will be delivered.',
  },
];

const HelpSection = () => {
  return (
    <div className="help-container">
      <h2>Need Help?</h2>
      <div className="help-cards">
        {helpData.map((item) => (
          <div className='card-help'>
            <h3 className='card-help-title'>{item.title}</h3>
            <p className='card-help-title'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpSection;
