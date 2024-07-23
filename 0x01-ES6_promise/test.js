function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    reject(new Error(`${filename} cannot be processed`));
  });
}

function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    resolve({
      firstName,
      lastName,
    });
  });
}

function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const file = uploadPhoto(fileName);

  const value = Promise.allSettled([user, file]);
  return value.then((values) => values.map((result) => {
    return [{
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,
    }];
  }));

}

console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));