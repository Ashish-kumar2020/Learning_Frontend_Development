// Footer.js

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Footer section 1 */}
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-4">About Us</h4>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              tincidunt justo a nisi malesuada aliquam.
            </p>
          </div>
          {/* Footer section 2 */}
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <p className="text-sm">123 Main Street, City, Country</p>
            <p className="text-sm">Email: info@example.com</p>
            <p className="text-sm">Phone: +123 456 7890</p>
          </div>
          {/* Footer section 3 */}
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* Add your social media icons here */}
                  <path d="M21.79 7.23a8.49 8.49 0 0 1-2.45.67 4.28 4.28 0 0 0 1.88-2.36 8.54 8.54 0 0 1-2.69 1.03A4.25 4.25 0 0 0 14.75 4a4.31 4.31 0 0 0-4.25 4.39c0 .34.05.67.11 1A12.13 12.13 0 0 1 2.29 5.46a4.17 4.17 0 0 0-.57 2.19 4.26 4.26 0 0 0 1.9 3.53 4.25 4.25 0 0 1-1.93-.54v.06a4.27 4.27 0 0 0 3.42 4.18 4.3 4.3 0 0 1-1.92.07 4.26 4.26 0 0 0 3.98 2.96A8.53 8.53 0 0 1 2 18.19 11.97 11.97 0 0 0 6.54 20c7.82 0 12.1-6.56 12.1-12.25 0-.19 0-.38-.01-.57A8.61 8.61 0 0 0 22 5.29a8.44 8.44 0 0 1-1.21 2.29z"></path>
                </svg>
              </a>
              {/* Add more social media icons as needed */}
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-8 text-sm text-center">
          <p>&copy; 2024 Your Ecommerce Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
