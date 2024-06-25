// @ts-nocheck
"use client"

import React, { useState, useEffect } from 'react';

const AdForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [adSpace, setAdSpace] = useState('none');
  const [paid, setPaid] = useState(false)
  const [startingDate, setStartingDate] = useState('');
  const [campaignBudget, setCampaignBudget] = useState(0);
  const [duration, setDuration] = useState(0);

  const DESCRIPTION_LIMIT = 65;

  const adSpaceRates = {
    "none": 0,
    "hero-pro": 5,
    "hero-mid": 3,
    "hero-end": 1.5,
    "saas-pro": 3,
    "saas-mid": 1,
    "saas-end": 1,
  };

  useEffect(() => {
    const dailyRate = adSpaceRates[adSpace] || 0;
    const totalCost = dailyRate * (parseInt(duration, 10) || 0);
    setCampaignBudget(totalCost.toFixed(2));
    setPrice(totalCost.toFixed(2));
  }, [adSpace, duration]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.length > DESCRIPTION_LIMIT) {
      alert(`Description exceeds the limit of ${DESCRIPTION_LIMIT} characters.`);
      return;
    }
    const formData = { title, description, link, price, paid, duration, image, adSpace, startingDate, campaignBudget };
    onSubmit(e, formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white rounded-md">
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
      <div className="mb-4">
        <label className="block text-starsBlack text-[16px] mb-1">Product Link</label>
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="mt-1 p-2 w-full border border-[#ccc] rounded-sm"
        />
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
          <option value="hero-pro">Landing page top banner  [$5/day]</option>
          <option value="hero-mid">Landing page middle banner  [$3/day]</option>
          <option value="hero-end">Landing page end banner  [$1.50/day]</option>
          <option value="saas-pro">Saas product page top banner  [$3/day]</option>
          <option value="saas-mid">Saas product page middle banner  [$1/day]</option>
          <option value="saas-end">Saas product page end banner  [$1/day]</option>
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
            className="mt-1 p-2 w-full border border-[#ccc] rounded-sm"
            readOnly
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
        <button type="submit" className="bg-starspurpleDark text-starsWhite p-2 rounded-md">
          Pay & Launch
        </button>
      </div>
    </form>
  );
};

export default AdForm;
