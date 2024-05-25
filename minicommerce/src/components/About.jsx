// AboutPage.js

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg">
            Welcome to our ecommerce store! We aim to provide the best shopping
            experience for our customers.
          </p>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg">
            Our mission is to offer high-quality products at affordable prices,
            delivered with exceptional customer service.
          </p>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team member cards */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <img
                src="team-member1.jpg"
                alt="Team Member 1"
                className="rounded-full mx-auto w-32 h-32 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Ashish</h3>
              <p className="text-gray-700">Product Manager</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <img
                src="team-member2.jpg"
                alt="Team Member 2"
                className="rounded-full mx-auto w-32 h-32 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Singh</h3>
              <p className="text-gray-700">Marketing Specialist</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <img
                src="team-member3.jpg"
                alt="Team Member 3"
                className="rounded-full mx-auto w-32 h-32 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Ashish Kumar</h3>
              <p className="text-gray-700">Customer Support</p>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg">
            If you have any questions, feedback, or concerns, feel free to reach
            out to us. We&apos;d love to hear from you!
          </p>
          {/* You can add a contact form or contact information here */}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
