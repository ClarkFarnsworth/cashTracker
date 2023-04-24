import { format } from 'date-fns';
import { deleteObject, getDownloadURL as getStorageDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from './firebase';
 
const BUCKET_URL = "gs://cash-tracker-c71be.appspot.com";
 
export async function uploadImage(image, uid) {
  const formattedDate = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss'Z'");
  const bucket = `${BUCKET_URL}/${uid}/${formattedDate}.jpg`;
  await uploadBytes(ref(storage, bucket), image);
  return bucket;
}

export function replaceImage(image, bucket) {
  uploadBytes(ref(storage, bucket), image);
}

export function deleteImage(bucket) {
  deleteObject(ref(storage, bucket));
}

export async function getDownloadURL(bucket) {
  return await getStorageDownloadURL(ref(storage, bucket));
}
