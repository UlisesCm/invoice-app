// import { Cloudinary } from 'cloudinary-core';

// const cloudinary = new Cloudinary({
//   cloud_name: process.env.NEXT_PUBLIC_CLOUD_NAME,
//   secure: true
// });

// export const uploadImageToCloudinary = async (file: File): Promise<string> => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onloadend = async () => {
//       const base64data = reader.result as string;
//       try {
//         const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`, {
//           method: 'POST',
//           body: JSON.stringify({
//             file: base64data,
//             upload_preset: process.env.NEXT_PUBLIC_UPLOAD_PRESET,
//           }),
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });
//         const data = await response.json();
//         resolve(data.secure_url);
//       } catch (error) {
//         reject(error);
//       }
//     };
//     reader.onerror = (error) => reject(error);
//   });
// };
