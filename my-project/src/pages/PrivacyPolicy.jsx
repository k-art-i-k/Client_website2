import React from "react";
import Banner from "../assets/Banner_about.jpg";
import SkillsSection from "../components/SkillSection"; // Importing the SkillsSection component

const PrivacyPolicy = () => {
  return (
    <div className="font-roboto mt-20 md:mt-36">
      <div className="relative">
        <img
          alt="Yellow truck with company logo"
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
          src={Banner}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 font-bold">
            Privacy Policy
          </h1>
        </div>
      </div>

      {/* Responsive container for the Privacy Policy content */}
      <div className="bg-white py-8 sm:py-12 md:py-16 px-4">
        <div className="max-w-3xl mx-auto p-6 bg-white border-2 shadow-2xl rounded-lg lg:max-w-[85%] lg:px-10">
          <div className="flex flex-col text-gray-800 text-base md:text-lg leading-relaxed">
            <h2 className="text-lg md:text-xl font-semibold mb-3">
              SECTION 1 - What do we do with your information?
            </h2>
            <p className="mb-6 text-sm">
             1. When you purchase something from our store, as part of the buying and selling process, we collect personal information you give us, such as your name, address, and email address. When you browse our store, we also automatically receive your computer's internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system.
              <br />
              Email marketing (if applicable): With your permission, we may send you emails about our store, new products, and other updates.
            </p>

            <h2 className="text-lg md:text-xl font-semibold mb-3">SECTION 2 - Consent</h2>
            <p className="mb-6 text-sm">
            1. How do you get my consent ? <br />

2. When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery or return a purchase, we imply that you consent to our collecting it and using it for that specific reason only. <br />

3. If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no. <br />

4. How do I withdraw my consent ?
              <br />
              If after you opt-in, you change your mind, you may withdraw your consent for us to contact you by contacting us at info@v-winexpress.com.
            </p>

            <h2 className="text-lg md:text-xl font-semibold mb-3">SECTION 3 - Disclosure</h2>
            <p className="mb-6 text-sm">
            1. We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.
            </p>

            <h2 className="text-lg md:text-xl font-semibold mb-3">SECTION 4 - Payment</h2>
            <p className="mb-6 text-sm">
            1. We use Razorpay for processing payments. We/Razorpay do not store your card data on their servers. The data is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS) when processing payment. Your purchase transaction data is only used as long as is necessary to complete your purchase transaction. After that is complete, your purchase transaction information is not saved. <br />

2. Our payment gateway adheres to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover. <br />

3. PCI-DSS requirements help ensure the secure handling of credit card information by our store and its service providers. <br />

4. For more insight, you may also want to read terms and conditions of razorpay on https://razorpay.com 
            </p>

            <h2 className="text-lg md:text-xl font-semibold mb-3">SECTION 5 - Third-party services</h2>
            <p className="mb-6 text-sm">
            1. In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us. <br />
2. However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions. <br />

3. For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers. <br />

4. In particular, remember that certain providers may be located in or have facilities that are located a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.  <br />

5. Once you leave our store's website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website's Terms of Service.  <br />

6. Links. <br />

7. When you click on links on our store, they may direct you away from our site. We are not responsible for the privacy practices of other sites and encourage you to read their privacy statements.
            </p>

            <h2 className="text-lg md:text-xl font-semibold mb-3">SECTION 6 - Security</h2>
            <p className="mb-6 text-sm">
            1.  To protect your personal information, we take reasonable precautions and follow industry best practices to ensure it is not lost, misused, accessed, disclosed, altered, or destroyed.
            </p>

            <h2 className="text-lg md:text-xl font-semibold mb-3">SECTION 7 - Cookies</h2>
            <p className="mb-6 text-sm">
            1. We use cookies to maintain your user session. They are not used to personally identify you on other websites.
            </p>

            <h2 className="text-lg md:text-xl font-semibold mb-3">SECTION 8 - Age of Consent</h2>
            <p className="mb-6 text-sm">
            1. By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
            </p>

            <h2 className="text-lg md:text-xl font-semibold mb-3">
            SECTION 9 - Changes to this Privacy Policy
            </h2>
            <p className="mb-6 text-sm">
            1. We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it. <br />
2. If our store is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell products to you.
            </p>

            <h2 className="text-lg md:text-xl font-semibold mb-3">
            SECTION 10 - Questions and Contact Information
            </h2>
            <p className="mb-6 text-sm">
            1. If you would like to: access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information contact our Privacy Compliance Officer at info@v-winexpress.com
            </p>
          </div>
        </div>
      </div>

      {/* SkillsSection component */}
      <SkillsSection />
    </div>
  );
};

export default PrivacyPolicy;
