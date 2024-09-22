"use client"      

import { useState, useEffect } from "react";
import StepOne from "./component/stepOne";
import StepTwo from "./component/stepTwo";
import StepThree from "./component/stepThree";
import Review from "./component/review";
import HttpService from "./utils/httpServices";
import axios from "axios";

export default function Home() {
  const steps = ['Meal Category', 'Restaurant', 'Dishes', 'Review'];
  const [activeStep, setActiveStep] = useState(0);
  const [error, setError] = useState({});
  const [restaurantData, setrestaurantData] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [formData, setFormData] = useState({
    mealCategory: '',
    numberOfPeople: 1,
    restaurant: '',
    dishes: [],
  });

  useEffect(() => {
    const fetchRestaurants = async () => {
      setLoading(true); 
      try {
        const response = await axios.get(HttpService.RestrurentData); 
        setrestaurantData(response?.data);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      } finally {
        setLoading(false);  
      }
    };
    fetchRestaurants();
  }, []);

  const nextStep = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const previousStep = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleStepClick = (index) => {
    if (index < activeStep || validateCurrentStep()) {
      setError({});
      setActiveStep(index);
    }
  };

  if (loading) {
    return (
      <main className="flex min-h-screen justify-center items-center p-5">
        <div className="text-center">
          <p>Loading...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-5">
      <div className="bg-white w-full max-w-xl p-10 rounded-md shadow-md">
        <div className="flex justify-between mb-8">
          {steps.map((label, index) => (
            <div key={label} className="flex-1">
              <div
                onClick={() => handleStepClick(index)}
                className={`w-10 h-10 mx-auto rounded-full text-center leading-10 cursor-pointer ${
                  activeStep >= index ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'
                }`}
              >
                {index + 1}
              </div>
              <p
                className={`text-center mt-2 ${
                  activeStep >= index ? 'text-green-600' : 'text-gray-500'
                }`}
              >
                {label}
              </p>
              {index < steps.length && (
                <div className="flex-auto border-t-2 transition-all duration-500 ease-in-out border-gray-300 mx-2"
                  style={{
                    borderColor: activeStep > index ? 'green' : '#D1D5DB'
                  }}
                ></div>
              )}
            </div>
          ))}
        </div>
        <div>
          {activeStep === 0 && (
            <StepOne formData={formData} setFormData={setFormData} error={error} nextStep={nextStep} restaurantData={restaurantData} />
          )}
          {activeStep === 1 && (
            <StepTwo formData={formData} setFormData={setFormData} error={error} nextStep={nextStep} previousStep={previousStep} restaurantData={restaurantData} />
          )}
          {activeStep === 2 && (
            <StepThree formData={formData} setFormData={setFormData} error={error} nextStep={nextStep} previousStep={previousStep} restaurantData={restaurantData} />
          )}
          {activeStep === 3 && <Review formData={formData} nextStep={nextStep} previousStep={previousStep} setActiveStep={setActiveStep} />}
        </div>
      </div>
    </main>
  );
}

