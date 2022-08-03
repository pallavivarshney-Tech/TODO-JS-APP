
let plusBtn = document.querySelector("#plusBtn");
let Trip = document.querySelector(".addTrip");

plusBtn.addEventListener("click", show);
function show() {
  const pop = document.createElement("div");
  pop.setAttribute("class", "pop");

  const cardHeading = document.createElement("p");
  cardHeading.innerText = "Add New List";

  const cardInput = document.createElement("input");

  cardInput.type = "text";

  cardInput.style.textAlign = "center";
  cardInput.id = "name";

  const btnAdd = document.createElement("div");
  btnAdd.setAttribute("class", "button");

  btnAdd.innerText = "Add";

  const btnClose = document.createElement("div");
  btnClose.innerText = "Close";
  btnClose.setAttribute("class", "button");

  document.querySelector(".mainContainer").classList.add("blur");
  Trip.appendChild(pop);

  pop.append(cardHeading, cardInput, btnAdd, btnClose);
  
  btnClose.addEventListener("click", () => {
    Trip.removeChild(pop);
    document.querySelector(".mainContainer").classList.remove("blur");
  });

  btnAdd.addEventListener("click", () => {
    if (cardInput.value === "") {
      alert("Enter Place");
    } else {
      document.querySelector(".subHead").style.display = "none";
      Trip.removeChild(pop);
      document.querySelector(".mainContainer").classList.remove("blur");

      const box = document.createElement("div");
      box.setAttribute("class", "box");

      const listName = document.createElement("p");
      listName.innerText = cardInput.value;
      listName.id = "title";

      const element = document.createElement("div");
      const add = document.createElement("i");
      element.className = "cardbtn";
      add.style.color="#FD5d5d"
      add.className = "fa-solid fa-circle-plus";

      const del = document.createElement("i");
      del.className = "fa-solid fa-trash-can";
      del.style.color = "#FD5d5d";

      const container2 = document.querySelector(".flexBox");
      container2.appendChild(box);
      box.append(listName, element);
      element.append(del, add);

     
      del.addEventListener("click", () => {
        document.querySelector(".flexBox").removeChild(box);
        if (document.querySelector(".flexBox").innerText === "") {
          document.querySelector(".subHead").style.display = "block";
        }
      });

    
      add.addEventListener("click", boxPopUp);
      function boxPopUp() {
        const card = document.createElement("div");
        card.className = "pop";
        

        const heading = document.createElement("p");
        heading.innerText = "Add New List";

        const cardInput = document.createElement("input");
        cardInput.type = "text";
        
        cardInput.style.textAlign = "center";
        cardInput.id = "name";

        const plus = document.createElement("div");
        plus.setAttribute("class", "button");
        plus.innerText = "Add";

        const btnClose = document.createElement("div");
        btnClose.setAttribute("class", "button");
        btnClose.innerText = "Close";

        document.querySelector(".mainContainer").classList.add("blur");
        Trip.appendChild(card);
        card.append(heading, cardInput, plus, btnClose);


        btnClose.addEventListener("click", () => {
          Trip.removeChild(card);
          document.querySelector(".mainContainer").classList.remove("blur");
        });

    
        plus.addEventListener("click", () => {
          if (cardInput.value === "") {
            alert("Please Enter Some Activity");
          } else {
            Trip.removeChild(card);
            document.querySelector(".mainContainer").classList.remove("blur");

     
            const ul = document.createElement("ul");
            ul.style.listStyleType = "none";
            ul.className = "ul";

            let li = document.createElement("li");
            let btn1 = document.createElement("button");
            btn1.setAttribute("class", "compBtn");
            btn1.innerText = "Mark";


            li.innerText = cardInput.value;

            box.appendChild(ul).appendChild(li).appendChild(btn1);

          

            btn1.addEventListener("click", function () {
              li.style.textDecoration = "line-through";
              li.style.color = "black";
              li.removeChild(btn1);
            });
          }
        });
      }
    

      listName.addEventListener("click", () => {
        document.querySelector(".mainContainer").style.visibility = "hidden";
       
        document.querySelector("#plusBtn").style.visibility = "visible";
      

        const moveNext = document.querySelector(".moveNext");
        moveNext.style.visibility = "visible";
       

        let div = document.createElement("div");
        div.className = "new";
        moveNext.appendChild(div);

        let div1 = document.createElement("div");
        div1.className = "btn-text";

        let leftArrow = document.createElement("i");
        leftArrow.className = "fa-solid fa-circle-arrow-left";
        leftArrow.style.color="#FD5d5f"
        div1.appendChild(leftArrow);

        let back = document.createElement("span");
        back.className = "back";
        back.innerText = "Back";
        div1.appendChild(back);

        let h1 = document.createElement("h1");
        h1.innerText = cardInput.value;
        h1.className = "h1";
        h1.style.color = "white";
      
        div.append(div1);

        let div2 = document.createElement("div");
        div2.className = "new-card";
        moveNext.appendChild(div2).append(h1, box);

       

        leftArrow.addEventListener("click", () => {
          div2.removeChild(box);
          moveNext.removeChild(div);
          container2.appendChild(box);
          document.querySelector(".mainContainer").style.visibility =
            "visible";
    
          document.querySelector(".moveNext").style.visibility = "hidden";
          moveNext.innerHTML=""
        });

        del.addEventListener("click", () => {
          document.querySelector(".mainContainer").style.visibility =
            "visible";
       
          document.querySelector(".moveNext").style.visibility = "hidden";
          
          document.querySelector(".moveNext").removeChild(div);
          moveNext.innerHTML=""

          div2.removeChild(box);
        });
      });
    }
  });
}
