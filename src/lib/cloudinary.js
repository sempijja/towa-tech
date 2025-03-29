// filepath: c:\Users\Charles\Desktop\WEB DESIGN PROJECTS\towa-tech\src\lib\cloudinary.js

const CLOUDINARY_BASE_URL = "https://res.cloudinary.com/dvrl5pthx/image/upload";

/**
 * Generate a Cloudinary URL with transformations.
 *
 * @param {string} path - The path to the image in Cloudinary.
 * @param {object} options - Transformation options (e.g., width, height, format).
 * @returns {string} - The transformed image URL.
 */
export function getCloudinaryUrl(path, options = {}) {
  const transformations = [];

  if (options.width) transformations.push(`w_${options.width}`);
  if (options.height) transformations.push(`h_${options.height}`);
  if (options.crop) transformations.push(`c_${options.crop}`);
  if (options.format) transformations.push(`f_${options.format}`);
  if (options.quality) transformations.push(`q_${options.quality}`);

  const transformationString = transformations.join(",");
  return `${CLOUDINARY_BASE_URL}/${transformationString}/${path}`;
}