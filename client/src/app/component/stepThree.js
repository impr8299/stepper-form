"use client"
import React, { useState, useEffect } from 'react';
import styles from '../../app/style/stepOne.module.css';
import axios from 'axios';
import HttpService from '../utils/httpServices';
import { useSelector, useDispatch } from 'react-redux';
import { stepFormFail, stepFormRequest, stepFormSuccess } from "../redux/Slice/stepformSlice";

const StepThree = ({ formData, setFormData, nextStep, previousStep, restaurantData }) => {
  const [dishes, setDishes] = useState([{ name: '', servings: 1 }]);
  const [error, setError] = useState({});

  const availableDishes = restaurantData?.data?.dishes.filter(
    (dish) => dish.restaurant === formData.restaurant
  );
  const { stepFormData } = useSelector(state => state.stepForm);
  const dispatch = useDispatch(); 
  const user_id = stepFormData?._id

  useEffect(() => {
    if (formData.dishes && formData.dishes.length > 0) {
      setDishes(formData.dishes);
    }
  }, [formData]);

  const handleDishChange = (index, e) => {
    const { value } = e.target;
    const newDishes = [...dishes];

    if (newDishes.some((dish, idx) => dish.name === value && idx !== index)) {
      setError((prev) => ({ ...prev, [`dishes_${index}`]: 'dish already selected.' }));
      return;
    }

    newDishes[index].name = value;
    setDishes(newDishes);
    setError((prev) => ({ ...prev, [`dishes_${index}`]: '' }));
    setFormData(prevData => ({ ...prevData, dishes: newDishes }));
  };

  const handleServingChange = (index, e) => {
    const { value } = e.target;
    const newDishes = [...dishes];
    newDishes[index].servings = Math.max(1, Number(value));  
    setDishes(newDishes);
    setError((prev) => ({ ...prev, [`servings_${index}`]: '' }));
    setFormData(prevData => ({ ...prevData, dishes: newDishes }));
  };

  const addDishField = () => {
    const newDishes = [...dishes, { name: '', servings: 1 }];
    setDishes(newDishes);
    setFormData(prevData => ({ ...prevData, dishes: newDishes }));
  };

  const deleteDishField = (index) => {
    const newDishes = dishes.filter((_, i) => i !== index);
    setDishes(newDishes);
    setFormData(prevData => ({ ...prevData, dishes: newDishes }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let newError = {};
    let isValid = true;

    dishes.forEach((dish, index) => {
      if (!dish.name) {
        newError[`dishes_${index}`] = 'select a dish.';
        isValid = false;
      }

      if (dish.servings < formData.numberOfPeople) {
        newError[`servings_${index}`] = `servings atleast ${formData.numberOfPeople}.`;
        isValid = false;
      }
    });

    if (!isValid) {
      setError(newError);
      return;
    }


    const newFormData = { ...formData, dishes };
    setFormData(newFormData);

    const payload = {
      dishes: newFormData.dishes, 
      step: 3,
      no_of_people:newFormData.numberOfPeople,
      _id : user_id
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
        dispatch(stepFormFail(response.data.errMsg));
        console.error("API error:", response.data);
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
    <div className="overflow-y-auto" style={{ maxHeight: '500px' }}>
      {dishes.map((dish, index) => (
        <div key={index} className="flex justify-space items-center">
          <div className="flex flex-col items-start space-y-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-8">
              Select a dish
            </label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={dish.name}
              onChange={(e) => handleDishChange(index, e)}
            >
              <option value="" disabled>Choose a dish</option>
              {availableDishes.map((availableDish) => (
                <option key={availableDish.id} value={availableDish.name}>
                  {availableDish.name}
                </option>
              ))}
            </select>
            <p
              className={`text-sm text-red-600 ${error[`dishes_${index}`] ? 'visible' : 'invisible'}`}
              style={{ minHeight: '20px' }}
            >
              {error[`dishes_${index}`] || ''}
            </p>
          </div>

          <div className="flex flex-col items-start space-y-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-8">
              servings
            </label>
            <input
              type="number"
              min="1"
              value={dish.servings}
              onChange={(e) => handleServingChange(index, e)}
              className="border rounded-md py-2 px-4 w-20"
            />
            <p
              className={`text-sm text-red-600 ${error[`servings_${index}`] ? 'visible' : 'invisible'}`}
              style={{ minHeight: '20px' }}
            >
              {error[`servings_${index}`] || ''}
            </p>
          </div>

          {index !== 0 && (
            <button
              type="button"
              onClick={() => deleteDishField(index)}
                className="bg-gray-300 p-3 rounded-full mt-8 ml-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-2 w-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
              </svg>
            </button>
          )}
        </div>
      ))}

      <div className="ml-4 mt-8">
        <button type="button" onClick={addDishField} className="bg-gray-300 p-3 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>

      <div className="flex space-x-36">
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
  </div>
   </form>
</div>
  );
};

export default StepThree;
