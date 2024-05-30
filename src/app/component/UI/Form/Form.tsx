//@ts-nocheck
'use client'

import React, { useState } from 'react';
import Image from 'next/image'

const AdForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [adSpace, setAdSpace] = useState('none');
  const [startingDate, setStartingDate] = useState('');
  const [campaignBudget, setCampaignBudget] = useState('');
  const [duration, setDuration] = useState('');

  const DESCRIPTION_LIMIT = 65;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.length > DESCRIPTION_LIMIT) {
      alert('Description exceeds character limit.');
      return;
    }
    const formData = {
      title,
      description,
      price: parseFloat(price),
      image,
      adSpace,
      startingDate,
      campaignBudget: parseFloat(campaignBudget),
      duration: parseInt(duration, 10),
    };
    console.log('Form Data:', formData);
    // Add form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto py-6 bg-white rounded-md">
      <div className="mb-4">
        <label className="block text-starsBlack text-[16px] mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 p-2 w-full border border-[#ccc] rounded-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-starsBlack text-[16px] mb-1">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 p-2 w-full border border-[#ccc] rounded-sm"
        />
        <div className="text-sm text-gray-500 mt-1">
          {description.length}/{DESCRIPTION_LIMIT} characters
        </div>
        {description.length > DESCRIPTION_LIMIT && (
          <div className="text-red-500 text-sm">Character limit exceeded!</div>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-starsBlack text-[16px] mb-1">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-1 p-2 w-full border border-[#ccc] rounded-sm"
          />
        </div>
        <div>
          <label className="block text-starsBlack text-[16px] mb-1">Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="mt-1 p-2 w-full border border-[#ccc] rounded-sm"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-starsBlack text-[16px] mb-1">Ad Space</label>
        <select
          value={adSpace}
          onChange={(e) => setAdSpace(e.target.value)}
          className="mt-1 p-2 w-full border border-[#ccc] rounded-sm"
        >
          <option value="none">None</option>
          <option value="hero-pro">Hero Pro</option>
          <option value="hero-mid">Hero Mid</option>
          <option value="hero-end">Hero End</option>
          <option value="saas-pro">SaaS Pro</option>
          <option value="saas-mid">SaaS Mid</option>
          <option value="saas-end">SaaS End</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-starsBlack text-[16px] mb-1">Starting Date</label>
        <input
          type="date"
          value={startingDate}
          onChange={(e) => setStartingDate(e.target.value)}
          className="mt-1 p-2 w-full border border-[#ccc] rounded-sm"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-starsBlack text-[16px] mb-1">Campaign Budget</label>
          <input
            type="number"
            value={campaignBudget}
            onChange={(e) => setCampaignBudget(e.target.value)}
            className="mt-1 p-2 w-full border border-[#ccc] rounded-sm"
          />
        </div>
        <div>
          <label className="block text-starsBlack text-[16px] mb-1">Duration (days)</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="mt-1 p-2 w-full border border-[#ccc] rounded-sm"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button type="submit" className="bg-starspurpleDark text-starsWhite p-2 rounded-sm">
          Pay & Launch
        </button>
      </div>
    </form>
  );
};

export default AdForm;
