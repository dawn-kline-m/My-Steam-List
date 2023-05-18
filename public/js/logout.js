const logout = async (event) => {
  console.log(event.target)
  if (event.target.matches(".logout")) {
    
    const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}
};

document.querySelector('body').addEventListener('click', logout);
