alert("connected")
const changeToEmoji = (placeholder) => {
    if(placeholder === "treasure"){
      document.getElementById("treasure").innerHTML = ""
    } else if(placeholder === "bomb"){
      document.getElementById("bomb").innerHTML = "&#x2620"
    } else if(placeholder === "palmtree"){
      document.getElementById('palmtree').innerHTML = "&#x1f332"
    }
  }