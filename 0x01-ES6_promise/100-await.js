import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photoResponse = await uploadPhoto();
    const userResponse = await createUser();

    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    // Return an empty object if one of the async functions fails
    return {
      photo: null,
      user: null,
    };
  }
}
