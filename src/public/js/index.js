const socket = io("http://167.71.50.31:3000/")


form.addEventListener('submit', function(e) {
    e.preventDefault()

    if (input.value) {
      socket.emit('new message', { activUsername, value: input.value })
      input.value = ''
    }
})


socket.on('message', ({username, value, time}) => {
    const div1 = document.createElement('div')
    const div2 = document.createElement('div')
    const div3 = document.createElement('div')
    const div4 = document.createElement('div')
    const span = document.createElement('span')

    if(username === activUsername) {
      div1.classList.add("row");
      div1.classList.add("message-body")
      div2.classList.add('col-sm-12')
      div2.classList.add('message-main-sender')
      div3.classList.add('sender')
      div3.textContent = activUsername
      div4.classList.add('message-text')
      span.classList.add('message-time')  
      span.classList.add('pull-right') 
    }else{
      div1.classList.add("row");
      div1.classList.add("message-body")
      div2.classList.add('col-sm-12')
      div2.classList.add('message-main-receiver')
      div3.classList.add('receiver')
      div3.textContent = username
      div4.classList.add('message-text')
      span.classList.add('message-time')  
      span.classList.add('pull-right')  
    }
    

    div4.textContent = value
    span.textContent = time
    div3.append(div4)
    div3.append(span)
    div2.append(div3)
    div1.append(div2)
    body.append(div1)


    body.scrollTo({
      top: 1000000000,
    });

})



  

