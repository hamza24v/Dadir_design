import React from 'react';

function Completion() {
  return (
    <div className="px-4 h-auto py-8 text-center mt-20 container text-large">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl mx-auto">
        <h1 className="text-4xl font-bold text-green-600 mb-4">Thank You for Your Payment! 🎉</h1>
        <p className="text-lg text-gray-700 mb-8">Your order has been successfully placed. We are excited to help with your furniture needs!</p>
       
        <p className="text-lg text-gray-700 mb-6">
          We will reach out shortly to confirm the service date and any additional details. If you have any urgent queries, feel free to contact us below.
        </p>

        <div className="mt-6">
          <a href="/shop" className="text-blue-600 underline hover:text-blue-800 text-lg">Continue Shopping</a>
        </div>
      </div>
    </div>
  );
}

export default Completion;
