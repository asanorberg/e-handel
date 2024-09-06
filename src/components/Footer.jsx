import React from "react";

const Footer = () => {
  return (
    <section className="bg-black text-center lg:text-left">
      <div className="container px-4 py-8 md:py-12 mx-auto ">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-1/3 mb-10 lg:mb-0 px-4">
            <p className="leading-6 mb-6 text-white opacity-70">
              We are your online store for exclusive clothing, jewelry, and
              shoes that will elevate your style to the next level. Our
              collection consists of carefully selected garments and
              accessories, each with a unique design and character. Whether
              you're a fashion enthusiast or simply looking for something new,
              our goal is to offer you products of the highest quality. We
              believe in creating a wardrobe that reflects your personality and
              enhances your everyday life. Explore our range and let yourself be
              inspired by the amazing world of fashion and accessories that we
              have to offer!
            </p>
          </div>
          <div className="w-full lg:w-1/3 lg:pl-24 px-4 mb-10 lg:mb-0">
            <h5 className="text-lg font-bold mb-5 text-white">Read more</h5>
            <ul className="opacity-70">
              <li className="mb-2">
                <a
                  href="#"
                  className="inline-block text-white hover:text-gray-200"
                >
                  Terms of purchase
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/contact"
                  className="inline-block text-white hover:text-gray-200"
                >
                  Contact
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="inline-block text-white hover:text-gray-200"
                >
                  About us{" "}
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="inline-block text-white hover:text-gray-200"
                >
                  Customer Reviews
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="inline-block text-white hover:text-gray-200"
                >
                  Customer Service
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/3 px-4">
            <h5 className="text-lg font-bold mb-5 text-white">
              Subscribe to our newsletter and get 15% off
            </h5>
            <form action="">
              <div className="flex items-center pl-3 pr-2 py-2 bg-white rounded-sm">
                <input
                  type="text"
                  className="w-full px-2 inline-block bg-transparent border-none text-base outline-none text-black"
                  placeholder="Enter your email
                  "
                />
                <button className="ml-auto inline-block px-3 py-2 bg-black hover:opacity-90 text-white font-bold transition duration-200 button-rounding">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Footer;
