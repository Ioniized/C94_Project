function login(){
    selectedName = document.getElementById('username').value;
    localStorage.setItem('username', selectedName);
    console.log(selectedName);
    window.location = 'room.html';
}