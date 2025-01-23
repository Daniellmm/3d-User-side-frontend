import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';
import axios from 'axios';
import SideBar from '../SideBar'

const HomePage = () => {
  const [file, setFile] = useState(null);
  const [houseImages, setHouseImages] = useState([null]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [beds, setBeds] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [uploading, setUploading] = useState(false);

  // const handleFileUpload = async () => {
  //   if (!file || !title || !description) {
  //     alert('Please provide title, description, and select a file');
  //     return;
  //   }

  //   setUploading(true);
  //   const formData = new FormData();
  //   formData.append('model', file);
  //   formData.append('title', title);
  //   formData.append('description', description);

  //   try {
  //     const response = await axios.post('http://localhost:3000/upload-model', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });

  //     alert('File uploaded successfully');
  //     setFile(null);
  //     setTitle("");
  //     setDescription("");
  //   } catch (error) {
  //     console.error('Error uploading file:', error);
  //     alert('Failed to upload file');
  //   } finally {
  //     setUploading(false);
  //   }
  // };


  const handleFileUpload = async () => {
    if (!file || !title || !description) {
      alert('Please provide all required fields');
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append('model', file);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('beds', beds);
    formData.append('dimensions', dimensions);
    formData.append('location', location);
    formData.append('price', price);
    houseImages.forEach((image, index) => formData.append(`houseImages`, image));

    try {
      const response = await axios.post('http://localhost:3000/upload-model', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      alert('File uploaded successfully');
      resetForm();
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Failed to upload file');
    } finally {
      setUploading(false);
    }
  };

  const resetForm = () => {
  setFile(null);
  setHouseImages([null]);
  setTitle("");
  setDescription("");
  setBeds("");
  setDimensions("");
  setLocation("");
  setPrice("");
};



  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleHouseImagesChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setHouseImages(selectedFiles);
  };


  const handleClearFile = () => {
    setFile(null);
  };

  return (
    <section className='h-full flex w-full'>
      <div className='flex min-h-screen w-full'>
        <SideBar />

        <div className="bg-white w-full rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">Upload New Model</h2>

          <div className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className='grid grid-cols-3 gap-x-4'>
              <div>
                <label htmlFor="bed" className="block text-sm font-medium text-gray-700">Bed</label>
                <input
                  type="text"
                  id="bed"
                  value={beds}
                  onChange={(e) => setBeds(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="dimensions" className=" mr-4 block text-sm font-medium text-gray-700">Dimensions</label>
                <input
                  type="text"
                  id="dimensions"
                  value={dimensions}
                  onChange={(e) => setDimensions(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                <input
                  type="text"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className='grid grid-cols-3 gap-x-4'>
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                <input
                  type="text"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="houseImages" className="block text-sm font-medium text-gray-700">House Images</label>
                <input
                  type="file"
                  id="houseImages"
                  multiple
                  accept=".jpg,.png"
                  onChange={handleHouseImagesChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Model File</label>
              {file ? (
                <div className="relative bg-gray-50 p-4 rounded-lg border border-gray-300">
                  <button
                    onClick={handleClearFile}
                    className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
                  >
                    <X size={20} />
                  </button>
                  <p className="text-sm text-gray-600">{file.name}</p>

                </div>
              ) : (
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-8 h-8 mb-2 text-gray-500" />
                    <p className="text-sm text-gray-500">
                      <span className="font-medium">Click to upload</span> or drag and drop
                    </p>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    accept=".glb,.gltf"
                  />
                </label>
              )}
            </div>
            <div>
              <button
                onClick={handleFileUpload}
                disabled={uploading}
                className="mt-3 w-full px-4 py-4 bg-black font-bold text-white rounded-md hover:bg-white hover:text-black hover:border-[3px] hover:border-black transition duration-500 disabled:bg-blue-300"
              >
                {uploading ? 'Uploading...' : 'Upload Model'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;