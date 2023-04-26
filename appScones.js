function calculateIngredients() {
    const portions = document.getElementById("portions").value;
    const wheatFlour = portions * 4;
    const bakingPowder = portions * 2;
    const salt = portions * 0.5;
    const butter = portions * 50;
    const milk = portions * 2;
  
    document.getElementById("wheat-flour").textContent = wheatFlour;
    document.getElementById("baking-powder").textContent = bakingPowder;
    document.getElementById("salt").textContent = salt;
    document.getElementById("butter").textContent = butter;
    document.getElementById("milk").textContent = milk;
  }
  
  function addComment() {
    const comment = document.getElementById("comment").value;
    const userName = document.getElementById("name").value;
    if (comment.trim() === "" || userName.trim() === "") {
      alert("Write a comment and your name:");
      return;
    }
    const commentList = document.getElementById("comments-list");
    const newComment = document.createElement("div");
    const nameElement = document.createElement("strong");
    nameElement.textContent = userName + ": ";
    newComment.appendChild(nameElement);
    newComment.appendChild(document.createTextNode(comment));
    commentList.appendChild(newComment);
    document.getElementById("comment").value = "";
    document.getElementById("name").value = "";
  }
  
  document.getElementById("portions").addEventListener("change", calculateIngredients);
  