const socket = io("http://167.71.50.31:3000/")



input.onkeyup = event => {
    if (event.keyCode !== 13 || !input.value.trim()) return
    
    window.localStorage.setItem('username', input.value)
    window.location = '/'
}