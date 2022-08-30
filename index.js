function submitData(name, email){
    return fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email
          }),
    })
    .then(function (response) {
        return response.json();
      })
      .then(function (object) {
        return object;
      })
      .catch(error => {document.body.innerHTML = `Error: ${error}`;
        console.error('Unauthorised Access', error);
    });
}
submitData()



