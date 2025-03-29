const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME as string;
const apiKey = process.env.REACT_APP_CLOUDINARY_API_KEY as string;
const apiSecret = process.env.REACT_APP_CLOUDINARY_API_SECRET as string;
const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET as string;
const folderName = process.env.REACT_APP_CLOUDINARY_FOLDER_NAME as string;

export const uploadImage = async (file: File): Promise<Object> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);
  formData.append("folder", folderName);

  const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
    method: "POST",
    body: formData,
  });

  return response.json();
};

export const deleteImage = async (imageUrl: string): Promise<boolean> => {
  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error("Missing Cloudinary credentials");
  }

  const publicId = getPublicIdFromUrl(imageUrl);
  const timestamp = Math.floor(Date.now() / 1000);
  const stringToSign = `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`;
  const signature = await generateSHA1Hash(stringToSign);

  const formData = new FormData();
  formData.append("public_id", publicId);
  formData.append("api_key", apiKey);
  formData.append("timestamp", timestamp.toString());
  formData.append("signature", signature);

  const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`, {
    method: "POST",
    body: formData,
  }).then((res) => res.json());

  return response.result === "ok";
};

/**
 * Generates a SHA-1 hash for the given input string.
 *
 * @param input - The input string to be hashed.
 * @returns A promise that resolves to the SHA-1 hash of the input.
 */
async function generateSHA1Hash(input: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  const hashBuffer = await crypto.subtle.digest("SHA-1", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/**
 * Extracts the public ID from the given Cloudinary image URL.
 *
 * @param url - The Cloudinary image URL.
 * @returns The public ID of the image.
 */
function getPublicIdFromUrl(url: string): string {
  const urlParts = url.split("/");
  const publicId = decodeURIComponent(
    urlParts[urlParts.length - 2] + "/" + urlParts[urlParts.length - 1].split(".")[0]
  );
  return publicId;
}
