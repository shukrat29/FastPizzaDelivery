const Footer = () => {
  return (
    <footer className="bg-gray-500 text-gray-200 py-6">
      <div className="container mx-auto flex flex-col items-center space-y-4 text-center sm:space-y-0">
        {/* Left Section */}
        <div>
          <p>
            &copy; {new Date().getFullYear()} FastPizzaDelivery. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
