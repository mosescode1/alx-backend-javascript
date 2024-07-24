import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const allPromises = Promise.all([uploadPhoto(), createUser()]);
  allPromises
    .then(([first, second]) => console.log(first.body, second.firstName, second.lastName))
    .catch(() => console.error('Signup system offline'));
}
