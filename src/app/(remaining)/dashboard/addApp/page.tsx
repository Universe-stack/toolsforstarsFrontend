//@ts-nocheck
"use client"
import React, { useState } from 'react';
import { HiArrowSmRight } from "react-icons/hi";
import { WithContext as ReactTags } from "react-tag-input";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useBackdrop } from '@/context/BackdropContext';
import { HiOutlineXCircle } from "react-icons/hi";

interface FormData {
  name: string;
  description: string;
  features: string[];
  screenshots: File[];
  logo: File;
  pricing: number;
  productType: string;
  productLink: string;
  youtubeLink: string;
  categories: { id: string; name: string }[];
  targetAudience: { id: string; name: string }[];
  aiEnabled: boolean;
  isActive: boolean;
}

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const suggestions = [
  { id: "1", name: "audio" },
  { id: "2", name: "video" },
  { id: "3", name: "productivity" },
  { id: "4", name: "images" }
];

const audienceSuggestions = [
  { id: "1", name: "writers" },
  { id: "2", name: "video editors" },
  { id: "3", name: "musicians" },
  { id: "4", name: "content creators" }
];

const Page = () => {
  const token = localStorage.getItem('token');
  console.log(token)
  if (!token) {
    throw new Error('Access denied, Please log in first');
  }

  const [stage, setStage] = useState(1); // Current stage of the form
  const [formData, setFormData] = useState<FormData>({
    name: '',
    productLink:'',
    youtubeLink:'',
    description: '',
    features: [],
    pricing: 0,
    productType: 'app',
    categories: [],
    targetAudience: [],
    aiEnabled: false,
    isActive: true,
    screenshots: [],
    logo: null
  });

  const [loading, setLoading] = useState(false)
  const [res, setRes]=useState(false)
  const [reserror, setReserror] = useState(false)
  const [report, setReport] = useState('')

  const { state, dispatch } = useBackdrop();
  const setBackdrop = (value) => {
    dispatch({ type: 'SET_BACKDROP', payload: value });
  };

  const handleScreenshotsChange = (e) => {
    const files = Array.from(e.target.files) as File[];
    setFormData({ ...formData, screenshots: [...formData.screenshots, ...files] });
  };
  
  const handleLogoChange = (e) => {
    const file = e.target.files[0] as File;
    setFormData({ ...formData, logo: file });
  };
  

  const handleFeatureChange = (index, value) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData({ ...formData, features: newFeatures });
  };

  const handleAddFeature = () => {
    if (formData.features.length < 5) {
      setFormData({ ...formData, features: [...formData.features, ''] });
    }
  };

  const handleRemoveFeature = (index) => {
    const newFeatures = [...formData.features];
    newFeatures.splice(index, 1);
    setFormData({ ...formData, features: newFeatures });
  };

  const handleDelete = (i) => {
    setFormData({
      ...formData,
      categories: formData.categories.filter((item, index) => index !== i)
    });
  };

  const handleAddition = (category) => {
    setFormData({
      ...formData,
      categories: [...formData.categories, category]
    });
  };

  const handleDeleteAudience = (i) => {
    setFormData({
      ...formData,
      targetAudience: formData.targetAudience.filter((item, index) => index !== i)
    });
  };

  const handleAdditionAudience = (audience) => {
    setFormData({
      ...formData,
      targetAudience: [...formData.targetAudience, audience]
    });
  };

  const handleNext = () => {
    setStage(stage + 1); // Move to the next stage
  };

  const handlePrevious = () => {
    setStage(stage - 1); // Move to the previous stage
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    if (type === 'textarea') {
      setFormData({ ...formData, [name]: value.split('\n').map((feature) => feature.trim()) });
    } else if (type === 'file') {
      if (name === 'screenshots') {
        handleScreenshotsChange(e);
      } else if (name === 'logo') {
        handleLogoChange(e);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const shadowDrop = () => {
    dispatch({ type: 'SET_BACKDROP', payload: true});
    setLoading(true);
  };

  const shadowRemove = () => {
     dispatch({ type: 'SET_BACKDROP', payload: false});
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    shadowDrop();

    console.log(formData);
  
    let token = null;
    if (typeof window !== "undefined") {
      token = localStorage.getItem('token');
    }

  
    if (!token) {
      console.error('No token found');
      return;
    }
  
    try {
      console.log('fetching...');
  
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('productLink', formData.productLink);
      formDataToSend.append('youtubeLink', formData.youtubeLink);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('pricing', formData.pricing.toString());
      formDataToSend.append('productType', formData.productType);
      formDataToSend.append('aiEnabled', formData.aiEnabled.toString());
      formDataToSend.append('isActive', formData.isActive.toString());
      formDataToSend.append('features', JSON.stringify(formData.features))
      formDataToSend.append('categories', formData.categories.map(cat => cat.name).join(','));
      formDataToSend.append('targetAudience', formData.targetAudience.map(aud => aud.name).join(','));
  
      formData.screenshots.forEach((file, index) => {
        formDataToSend.append(`screenshots`, file);
      });
      
      if (formData.logo) {
      formDataToSend.append('logo', formData.logo);  // Append the logo file
    }
  
      const res = await fetch('https://createcamp.onrender.com/tools/createtool', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formDataToSend,
      });
  
      if (res.ok) {
        const data = await res.json();
        setRes(true);
        setReport('Succeded!')
        console.log("data", data);
      } else {
        const data = await res.json();
        setReserror(true)
        setReport('Failed, Try again please')
        console.log(data, "failed");
      }
    } catch (error) {
      setReserror(true)
      setReport('Failed, Try again please')
      console.error('create tool failed:', error);
    }finally {
      shadowRemove();
    }
  };
  

  const renderStage = () => {
    switch (stage) {
      case 1:
        return renderStage1();
      case 2:
        return renderStage2();
      default:
        return null;
    }
  };

  const renderStage1 = () => {
    return (
      <section className="py-3 sm:py-4 lg:py-12">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center flex flex-col">
            <h2 className="text-[12px] font-bold leading-tight text-starsBlack sm:text-[16px] lg:text-[16px] text-left mb-2">Product name</h2>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter name of app product"
              className="block w-full py-2 px-4 mb-4 text-gray-700 bg-gray-200 border border-gray-200 rounded"
            />
            <button onClick={handleNext} className="hover:bg-starspurpleDark text-starsBlack py-2 px-4 rounded border border-[#ccc] flex gap-2 self-end">
              Next
              <HiArrowSmRight className='mt-[0.1rem]' />
            </button>
          </div>
        </div>
      </section>
    );
  };

  const renderStage2 = () => {
    return (
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">

            <h2 className="mt-6 text-[12px] font-bold leading-tight text-starsBlack sm:text-[16px] lg:text-[16px] text-left mb-2">Product Link</h2>
            <input
              type="text"
              name="productLink"
              value={formData.productLink}
              onChange={handleInputChange}
              placeholder="Add the link to your product here"
              className="block w-full py-2 px-4 mb-4 text-gray-700 bg-gray-200 border border-gray-200 rounded"
            />

            <h2 className="mt-6 text-[12px] font-bold leading-tight text-starsBlack sm:text-[16px] lg:text-[16px] text-left mb-2">Youtube Video Link</h2>
            <input
              type="text"
              name="youtubeLink"
              value={formData.youtubeLink}
              onChange={handleInputChange}
              placeholder="Add the link to your promotional video here"
              className="block w-full py-2 px-4 mb-4 text-gray-700 bg-gray-200 border border-gray-200 rounded"
            />

            <h2 className="mt-6 text-[12px] font-bold leading-tight text-starsBlack sm:text-[16px] lg:text-[16px] text-left mb-2">Description</h2>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="describe this product briefly (tool for ...)"
              className="block w-full py-2 px-4 mb-4 text-gray-700 bg-gray-200 border border-gray-200 rounded"
            />

            <div>
              <h2 className="mt-6 text-[12px] font-bold leading-tight text-starsBlack sm:text-[16px] lg:text-[16px] text-left mb-2">Product Features</h2>
              {formData.features.map((feature, index) => (
                <div key={index} className="mb-4 flex items-center">
                  <input
                    type="text"
                    value={feature}
                    onChange={(e) => handleFeatureChange(index, e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 w-full mr-2"
                    placeholder={`Feature ${index + 1}`}
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveFeature(index)}
                    className="bg-red-500 text-white px-3 py-2 rounded-md shadow-md border border-starsBlack"
                  >
                    <FaMinus className='text-[#FF0000]' />
                  </button>
                </div>
              ))}
              {formData.features.length < 5 && (
                <button
                  type="button"
                  onClick={handleAddFeature}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md border border-starsBlack shadow-md"
                >
                  <FaPlus className='text-[#00FF00]' />
                </button>
              )}
            </div>
            
            <h2 className="mt-6 text-[12px] font-bold leading-tight text-starsBlack sm:text-[16px] lg:text-[16px] text-left mb-2">
              Upload Logo
            </h2>
            <input
              type="file"
              id="imageUpload"
              name="logo"
              accept="image/*" // Only accept image files
              onChange={handleInputChange}
              className="py-2 block w-full rounded-md bg-gray-100 border-gray-300 focus:border-starsBlack focus:ring focus:ring-starsBlack focus:ring-opacity-80 cursor-pointer mb-4"
            />

            <h2 className="mt-6 text-[12px] font-bold leading-tight text-starsBlack sm:text-[16px] lg:text-[16px] text-left mb-2">
              Upload screenshots
            </h2>
            <input
              type="file"
              id="imageUpload"
              name="screenshots"
              accept="image/*" // Only accept image files
              multiple // Allow multiple file selection
              onChange={handleInputChange}
              className="py-2 block w-full rounded-md bg-gray-100 border-gray-300 focus:border-starsBlack focus:ring focus:ring-starsBlack focus:ring-opacity-80 cursor-pointer mb-4"
            />

            <h2 className="mt-6 text-[12px] font-bold leading-tight text-starsBlack sm:text-[16px] lg:text-[16px] text-left mb-2">
              Pricing ($)
            </h2>
            <input
              type="number"
              id="pricing"
              value={formData.pricing}
              name="pricing"
              onChange={handleInputChange}
              placeholder="Add price of tool ($)"
              className="block w-full py-2 px-4 mb-4 text-gray-700 bg-gray-200 border border-gray-200 rounded"
            />

            <div className="mt-5">
              <h2 className="mt-6 text-[12px] font-bold leading-tight text-starsBlack sm:text-[16px] lg:text-[16px] text-left mb-2">
                ProductType
              </h2>
              <input
                type="text"
                name="productType"
                value={formData.productType}
                onChange={handleInputChange}
                placeholder="e.g. app"
                className="block w-full py-2 px-4 mb-4 text-gray-700 bg-gray-200 border border-gray-200 rounded"
              />
            </div>

            <div className="mt-5">
              <h2 className="mt-6 text-[12px] font-bold leading-tight text-starsBlack sm:text-[16px] lg:text-[16px] text-left mb-2">
                Categories
              </h2>
              <div id="tags">
                <ReactTags
                  tags={formData.categories}
                  suggestions={suggestions}
                  labelField={'name'}
                  delimiters={delimiters}
                  handleDelete={handleDelete}
                  handleAddition={handleAddition}
                  inputFieldPosition="bottom"
                  autocomplete
                  allowDragDrop={false}
                  placeholder="Add product categories"
                />
              </div>
            </div>

            <div className="mt-5">
              <h2 className="mt-6 text-[12px] font-bold leading-tight text-starsBlack sm:text-[16px] lg:text-[16px] text-left mb-2">
                Target Audience
              </h2>
              <div id="tags">
                <ReactTags
                  tags={formData.targetAudience}
                  suggestions={audienceSuggestions}
                  labelField={'name'}
                  delimiters={delimiters}
                  handleDelete={handleDeleteAudience}
                  handleAddition={handleAdditionAudience}
                  inputFieldPosition="bottom"
                  autocomplete
                  allowDragDrop={false}
                  placeholder="Add target audience"
                />
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <button onClick={handlePrevious} className="bg-starsBlack text-starsWhite py-2 px-4 rounded border border-[#ccc] flex gap-2">
                Previous
              </button>
              <button onClick={(e) => handleSubmit(e, formData)} className="hover:bg-starspurpleDark text-starsBlack py-2 px-4 rounded border border-[#ccc] flex gap-2">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };


  const display = () => {
    if (res) {
      return report;
    } else if (reserror) {
      return report;
    } else {
      return <span className="loading loading-dots loading-lg"></span>;
    }
  };

  return (
    <div className="bg-starsWhite py-10 w-full">
     { loading &&
      <div className='w-[20rem] bg-starsWhite rounded-md absolute self-center mt-[2rem] z-50 top-0 right-0 left-[40%] bottom-0'>
        <div className='self-right p-1 m-2 cursor-pointer' onClick={shadowRemove}><HiOutlineXCircle className='size-6' /></div>
        <div className="container p-4 self-center text-center">
          {display()}
        </div>
      </div> 
    }
      
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Submit a mobile <span className='text-starspurpleDark'>app</span> product</h2>
        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 text-starsGrey">
          Found a cool product you want everyone to know about? Or maybe you made one yourself and want the world to know about it? You&apos;re in the right place. So relax and follow the steps.
        </p>
      </div>
      {renderStage()}
    </div>
  );
};

export default Page;
