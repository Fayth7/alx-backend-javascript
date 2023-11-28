import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  // Create promises using signUpUser and uploadPhoto
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  // Use Promise.allSettled to wait for all promises to settle
  return Promise.allSettled([userPromise, photoPromise])
    .then((results) => {
      // Return an array with the status and value or error of each promise
      return results.map((result) => ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason,
      }));
    });
}
