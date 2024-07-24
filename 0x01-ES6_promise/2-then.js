export default function handleResponseFromAPI(promise) {
  promise
    .then((res) => ({ status: 200, body: 'success' }))
    .catch((error) => Error())
    .finally(console.log('Got a response from the API'));
}
