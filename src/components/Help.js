import React from 'react';

const Help = () => {
  return (
    <div className="container mx-auto  p-4  rounded  my-auto  items-center w-2/3  mt-28 bg-gray-200 ">
      <h1 className="text-3xl font-bold mb-4">Need Help?</h1>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Contact Information:</h2>
        <ul>
          
          <li >Email: prashantpatel1234@gmail.com</li>
          <li>Phone: xxxxxxxxxx</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Frequently Asked Questions (FAQ):</h2>
        <p>
          Check our FAQ section for answers to common questions. If you can't find the information
          you're looking for, don't hesitate to contact us.
        </p>
        {/* Add a link to your FAQ page */}
        <a href="/faq" className="text-blue-500 hover:underline">
          Visit FAQ
        </a>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Live Chat:</h2>
        <p>
          Our live chat support is available during business hours. Click the button below to
          start a chat with one of our representatives.
        </p>
        {/* Add a button to initiate live chat */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Start Live Chat
        </button>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Submit a Support Ticket:</h2>
        <p>
          If you prefer, you can submit a support ticket, and our team will get back to you as soon
          as possible.
        </p>
        {/* Add a link or button to the support ticket page */}
        <a href="/support-ticket" className="text-blue-500 hover:underline">
          Submit a Support Ticket
        </a>
      </div>
    </div>
  );
};

export default Help;
