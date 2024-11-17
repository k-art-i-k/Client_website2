import { useState } from 'react';
import Banner from '../assets/ServicesBanner.jpg';

import Image1 from '../assets/International.jpg';
import Image2 from '../assets/Domestic.jpg';
import Image3 from '../assets/Banner3n.jpg';
import Image4 from '../assets/Banner4n.jpg';
import Image5 from '../assets/Pune.jpg';
import Image6 from '../assets/Import.jpg';

const services = [
  {
    id: 1,
    name: "Domestic Services",
    description: "For deliveries within the India, we offer a full list of domestic delivery services to cater to the varying needs of modern businesses. All our domestic services are handled with acumen , and professionalism.We cater to the every ending need of the esteemed customers, to reach their valued shipments within the shortest possible time.We also offer reverse pick ups and ferry the same to the shipper with flexible options with greater convenience with trustworthy and reliable work force at place. This effective service will give a competitive edge , and gain prominence for you in the market.",
    image: Image1,

  },
  {
    id: 2,
    name: "International Services",
    description: <div>
      <p>Our International operations takes your business to the next level with an array of products viz - export service of documents, packages , commercial exports and more.

        We cater to the demands of growing businesses which often require documents and packages to be delivered within the shortest possible time frames. We guarantee the fastest onforward connections from BOM gateway, with every single shipment being subject to thorough physical check of contents and paper works to pave way for a swift and secure delivery at the destination.

        With guaranteed on-time deliveries for time-critical international shipments that need immediate pick-up and door delivery, our export process can be customized to suit your requirement. We carry anything from documents to parcels of 500 grams with no upper limit on the weight / volume of the cargo.</p>
      <p>We employ the fastest modes of transportation to any global destination within the shortest time possible and here comes our own linehaul to major gateways and hubs in strategic stations offering our deliveries with no compromise on the quality. The direct linehaul shortens the transit time, therefore providing the shortest reach…</p>
      <br />
      <p>Our strategic partnership with leading express companies span over every corner of the globe. Whatever your requirement may be , we are there to take care of the expectations with our star service with no compromise on quality.</p>
    </div>,
    image: Image2,
  },
  {
    id: 3,
    name: "Freight / Dangerous / Critical Cargo Handling / Road Transport",
    description: <div>
      <p>Our Road Transport services extend across the length and breadth of the nation and are the most economical mode of logistics with the assurance of on-times deliveries.</p>
      <p>With the fleet of vehicle , you can be assured of safe, secure , smooth and dependable logistical experience with us. This includes handling of DGR shipments on FTL movements.</p>
    </div>,
    image: Image3,
  },
  {
    id: 4,
    name: "International Stations With Safe Line Haul",
    description: <div>
      <p>We have our own direct line haul of express / courier shipments being flown to Qatar ( DOHA ) , UAE ( DUBAI ) , Singapore , Iran , & Iraq.</p>
      <p>By doing so, we are able to cater to the needs of our esteemed clients with a short transit time , customs clearance & Deliveries.</p>
    </div>,
    image: Image4,
  },
  {
    id: 5,
    name: "Pune - Mumbai - Pune Direct Trucking",
    description: <div>
      <p>We offer express trucking services between PUNE and Mumbai, thus opening a lot of access to the entire Maharastra , Vidharba region.</p>
      <p>We are able to cater to the express / courier needs of our clients located in these areas with a 24 – 48 transit time .</p>
      <p>We will be able to provide Warehouse to warehouse transportation services, and at the same time provide door deliveries to the consignee.</p>
    </div>,
    image: Image5,
  },
  {
    id: 6,
    name: "Import Operations",
    description: <div>
      <p>With our ever expanding network of agents, we are providing import services to our esteemed clientele.</p>
      <p>We are able to provide import services from Bangladesh , Nepal , Taiwan , Thailand , Vietnam , China , Indonesia , Singapore and Sri Lanka.</p>
      <p>We also align with other major players and import from world-wide stations. Attachments area</p>
    </div>,
    image: Image6,
  },
];

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="font-roboto mt-20 md:mt-36">
      {/* Top Image Section */}
      <div className="relative mb-12">
        <img
          src={Banner} // Replace with the actual path to the top image
          alt="Our Services"
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 text-white">
          <h1 className="text-5xl font-bold">Our Services</h1>
          <p className="text-lg mt-2">With more than 20 years of experience</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col p-4 md:p-8 lg:flex-row gap-8 mb-12">
        {/* Service List */}
        <div className="flex-shrink-0 w-full lg:w-5/12">
          <ul className="space-y-4">
            {services.map((service) => (
              <li key={service.id}>
                <button
                  onClick={() => setSelectedService(service)}
                  className={`w-full text-left px-6 py-3 rounded-md shadow-lg ${selectedService.id === service.id
                      ? "bg-red-500 text-white"
                      : "bg-red-200 text-red-500"
                    } hover:bg-red-500 hover:text-white transition-colors duration-200`}
                >
                  {service.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Content */}
        <div className="flex-1">
          <div className="mb-6">
            <img
              src={selectedService.image}
              alt={selectedService.name}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <h2 className="text-3xl font-semibold mb-4">{selectedService.name}</h2>
          <p className="text-black">{selectedService.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;