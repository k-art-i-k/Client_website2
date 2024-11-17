import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import tracking from '../assets/Banner_tracking.jpg';
import location from '../assets/TrackingBanner.jpg';

const hasDeliveryInfo = (data) => {
  return data && Array.isArray(data.docket_events) && data.docket_events.length > 0;
};


const TrackingPage = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [forwardingNumber, setForwardingNumber] = useState('');
  const [trackingData, setTrackingData] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const trackingNo = searchParams.get('trackingNo');
    const forwardingNo = searchParams.get('forwardingNo');

    setTrackingNumber(trackingNo || '');
    setForwardingNumber(forwardingNo || '');

    if (trackingNo || forwardingNo) {
      handleTrackOrder(trackingNo, forwardingNo);
    }
  }, [searchParams]);

  const handleTrackOrder = async (trackingNo = trackingNumber, forwardingNo = forwardingNumber) => {
    setError('');
    setTrackingData(null);
    setIsLoading(true);

    const apiUrl = `https://admin.v-winexpress.com/api/tracking_api/get_tracking_data?api_company_id=3&customer_code=superadmin${trackingNo ? `&tracking_no=${trackingNo}` : ''
      }${forwardingNo ? `&forwarding_no=${forwardingNo}` : ''}`;

    console.log(apiUrl)

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data && Array.isArray(data) && data.length > 0) {
        setTrackingData(data[0]);
      } else {
        setError('No tracking information found.');
      }
    } catch (err) {
      setError('Failed to fetch tracking information. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 font-roboto mt-16 md:mt-24">
      {/* Banner Section */}
      <div className="relative">
        <img
          alt="Illustration of a delivery truck with a map and location pins indicating tracking"
          className="w-full h-[250px] sm:h-[250px] md:h-[350px] lg:h-[450px] opacity-60"
          src={location}
          width={1920}
          height={600}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Track
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg">
            Track Your Shipment
          </p>
        </div>
      </div>

      {/* Tracking Section */}
      <div className="flex items-center justify-center w-full md:py-12">
        <div className="bg-gray-100 p-10 rounded-lg flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-10 w-full max-w-7xl">
          <div className="flex-shrink-0 transition-transform transform hover:scale-105 shadow-md shadow-neutral-300">
            <img
              alt="Delivery person holding a package with a logistics background"
              className="rounded-lg w-full md:max-w-2xl h-auto"
              src={tracking}
            />
          </div>
          <div className="flex-grow p-4 md:p-6 rounded-xl shadow-xl shadow-neutral-300">
            <h1 className="md:text-5xl text-3xl font-bold text-gray-800 text-center">
              Track <span className="text-red-500">Your Shipment</span>
            </h1>
            <div className="mt-8 p-8 border border-gray-300 rounded-lg">
              <div className="flex items-center border border-yellow-500 rounded-full px-6 py-2">
                <input
                  className="flex-grow outline-none text-gray-600 text-base px-2"
                  placeholder="Enter Tracking Number"
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                />
              </div>
              <div className="mt-4 flex items-center border border-yellow-500 rounded-full px-6 py-2">
                <input
                  className="flex-grow outline-none text-gray-600 text-base px-2"
                  placeholder="Enter Forwarding Number"
                  type="text"
                  value={forwardingNumber}
                  onChange={(e) => setForwardingNumber(e.target.value)}
                />
              </div>
              <div className="flex justify-center mt-4">
                <button
                  className="w-1/2 md:w-1/3 bg-red-900 hover:bg-red-600 text-white py-2 rounded-full text-sm md:text-sm font-semibold"
                  onClick={() => handleTrackOrder()}
                >
                  {isLoading ? 'Loading...' : 'TRACK ORDER'}
                </button>
              </div>
              {error && <p className="text-red-600 text-center mt-4">{error}</p>}
            </div>
          </div>
        </div>
      </div>

      {/* Display Tracking Information */}
      {trackingData && (
        <div className="max-w-7xl mx-auto bg-white p-6 mt-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">AWB: {trackingData.tracking_no}</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-700 border-collapse">
              <thead className="bg-gray-700 text-white">
                <tr>
                  <th className="px-4 py-2 min-w-[100px]">AWB No.</th>
                  <th className="px-4 py-2 min-w-[120px]">Booking Date</th>
                  <th className="px-4 py-2 min-w-[150px]">Consignee Name</th>
                  <th className="px-4 py-2 min-w-[150px]">Destination</th>
                  <th className="px-4 py-2 min-w-[100px]">No. of Pieces</th>
                  <th className="px-4 py-2 min-w-[120px]">Status</th>
                  <th className="px-4 py-2 min-w-[180px]">Date & Time</th>
                  <th className="px-4 py-2 min-w-[150px]">Receiver Name</th>
                  <th className="px-4 py-2 min-w-[150px]">Forwarding No.</th>
                  <th className="px-4 py-2 min-w-[120px]">View POD</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(trackingData.docket_info) && trackingData.docket_info.length > 0 ? (
                  <tr>
                    {[
                      { label: "AWB No.", jsonKey: "AWB No." },
                      { label: "Booking Date", jsonKey: "Booking Date" },
                      { label: "Consignee Name", jsonKey: "Consignee Name" },
                      { label: "Destination", jsonKey: "Destination" },
                      { label: "No. of Pieces", jsonKey: "pcs", fromRoot: true },
                      { label: "Status", jsonKey: "Status" },
                      { label: "Date & Time", jsonKey: "Delivery Date and Time" },
                      { label: "Receiver Name", jsonKey: "Receiver Name" },
                      { label: "Forwarding No.", jsonKey: "Forwarding No." },
                      { label: "View POD", jsonKey: "pod_image" },
                    ].map(({ label, jsonKey, fromRoot }) => {
                      const value = fromRoot
                        ? trackingData[jsonKey] || "N/A"
                        : trackingData.docket_info.find(([key]) => key === jsonKey)?.[1] || "N/A";

                      return (
                        <td key={label} className="px-4 py-2">{value}</td>
                      );
                    })}
                  </tr>
                ) : (
                  <tr>
                    <td colSpan="11" className="px-4 py-2 text-center">No docket info available.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {hasDeliveryInfo(trackingData) ? (
            <div>
              <h3 className="text-xl font-bold mt-6">Delivery Information</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-700 border-collapse">
                  <thead className="bg-gray-700 text-white">
                    <tr>
                      <th className="px-4 py-2 min-w-[100px]">Date</th>
                      <th className="px-4 py-2 min-w-[150px]">Location</th>
                      <th className="px-4 py-2 min-w-[200px]">Event</th>
                      <th className="px-4 py-2 min-w-[200px]">Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trackingData.docket_events.map((event, index) => (
                      <tr key={index} className="border-b">
                        <td className="px-4 py-2">{event.event_at}</td>
                        <td className="px-4 py-2">{event.event_location}</td>
                        <td className="px-4 py-2">{event.event_description}</td>
                        <td className="px-4 py-2">{event.event_remarks || "N/A"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <p className="text-gray-700 mt-4">No delivery information available.</p>
          )}
        </div>
      )}

    </div>
  );
};

export default TrackingPage;
