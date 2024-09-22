import React, { useState, useEffect } from 'react';
import styles from '../../app/style/stepOne.module.css';
import axios from 'axios';
import HttpService from "../utils/httpServices";
import { useSelector, useDispatch } from 'react-redux';
import { stepFormFail, stepFormRequest, stepFormSuccess } from "../redux/Slice/stepformSlice";

const StepTwo = ({ formData, setFormData, nextStep, previousStep, restaurantData }) => {
  const [error, setError] = useState({});
  const { stepFormData } = useSelector(state => state.stepForm);
  const [initialFormData, setInitialFormData] = useState({}); 
  const dispatch = useDispatch(); 
  const user_id = stepFormData?._id;

  const uniqueRestaurants = Array.from(
    new Set(
      restaurantData?.data?.dishes
        .filter((dish) => dish.availableMeals.includes(formData.mealCategory))
        .map((dish) => dish.restaurant)
    )
  );

  useEffect(() => {
    setInitialFormData({
      restaurant: formData.restaurant
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newError = {};
    if (!formData.restaurant) newError.restaurant = 'restaurant is required';
    
    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }

 
    if (initialFormData.restaurant === formData.restaurant) {
      nextStep();
      return;
    }

    const payload = {
      restaurant: formData.restaurant, 
      step: 2,
      _id: user_id
    };

    try {
      dispatch(stepFormRequest());
      const response = await axios.post(HttpService.StepFormData, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response?.status === 200) {
        dispatch(stepFormSuccess(response))
        nextStep(); 
      } else {
        console.error("API error:", response.data);
        dispatch(stepFormFail(response.data.errMsg));
      }
    } catch (err) {
      console.error("Request failed:", err);
      dispatch(stepFormFail(err?.response?.data?.errMsg));
    }
  };

  return (
    <div className={styles.container}> 
      <form onSubmit={handleSubmit}>
        <div className="ui form">
          <label htmlFor="restaurant" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Select a restaurant
          </label>
          <select 
            id="restaurant"
            name="restaurant"  
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            value={formData.restaurant}  
            onChange={handleChange}  
          >
            <option value="" disabled>Select a restaurant</option>
            {uniqueRestaurants.map((restaurant) => (
              <option key={restaurant} value={restaurant}>
                {restaurant}
              </option>
            ))} 
          </select>
          {error.restaurant && <p className="text-sm text-red-600">{error.restaurant}</p>}
          
          <div className='flex space-x-36'>
            <button 
              type="button" 
              className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded mt-10" 
              onClick={previousStep}
            >
              Previous
            </button>
            <button 
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10"
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StepTwo;
