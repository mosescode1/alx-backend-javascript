export default function handleResponseFromAPI(promise) {
  promise.then((data) => data)
    .catch(() => { })
    .finally(console.log('Got a response from the API'));
}
