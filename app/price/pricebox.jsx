import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle,faUserGroup } from '@fortawesome/free-solid-svg-icons'

const Pricebox = ({ title, price, features, buttonText,people }) => {
    const featuresList = features.split(',').map((features) => features.trim());
  return (
      <div
          className="flex flex-col rounded-lg shadow-md overflow-hidden min-h-75 max-h-75"> {/* Set min & max height */}
          <div className="px-4 py-2 bg-blue-600 text-white flex items-center justify-center font-bold w-auto">
              <div className="w-30 h-15">
                  <FontAwesomeIcon icon={faUserGroup} size="2x" className="text-white"/>
              </div>

              {/* {title} */}
          </div>
          <div className="flex-grow px-4 py-2 flex flex-col items-center justify-center">
              <span className="text-5xl text-blue-800 font-bold mb-3">{people}</span>
              <span className="text-blue-800">{title}</span>

          </div>
          <div className="w-full border-b-2 border-dashed border-gray-400 mb-5"></div>
          {/* Add dashed line */}

          <ul className="list-none px-4 pb-4 flex flex-col overflow-auto"> {/* Add overflow-auto */}
              {featuresList.map((feature) => (
                  <li key={feature} className="flex  space-x-2 text-gray-700 ml-10">
                      <div className="w-3 h-3">
                          <FontAwesomeIcon icon={faCheckCircle} size="xs" className="text-blue-600 mt-1"/>
                      </div>
                      <span className="ml-2">{feature}</span> {/* Add margin-left for spacing */}
                  </li>
              ))}
          </ul>
          <div className="flex-grow px-4 py-2 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold">{price}</span>
          </div>
          <div className="px-4 py-2 text-center">
              <button className="px-4 py-2 bg-blue-600 text-white font-bold rounded-md">
                  {buttonText}
              </button>
          </div>
      </div>
  )
}

export default Pricebox
