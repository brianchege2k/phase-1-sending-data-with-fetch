function submitData(name, email) {
    const url = 'http://localhost:3000/users';
    const data = {
      name: name,
      email: email,
    };
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    };
  
    return fetch(url, config)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network Error!');
        }
        return response.json();
      })
      .then(data => {
        document.body.append(data.id);
        return data;
      })
      .catch(error => {
        document.body.append(error.message);
      });
  }
  