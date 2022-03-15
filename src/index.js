import "./pagination.css";

let userDetails = [];
    const pageLimit = 10, dataLimit = 5;
    let currentPage = 1, pages = 0;

    const getPaginatedData = (userDetails) => {
        console.log("currentpage", currentPage);
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return userDetails.slice(startIndex, endIndex);

    }
    function goToNextPage() {
        currentPage = currentPage + 1;
        tableDisplay()
    }

    function goToPreviousPage() {
        currentPage = currentPage - 1;
        tableDisplay()
    }

    function getvalue() {
        let names, email, number;
        names = document.getElementById("name").value;
        email = document.getElementById("email").value;
        number = document.getElementById("number").value;

        let details =
        {
            username: names,
            email: email,
            number: number
        }
        userDetails.push(details);
        localStorage.setItem("addedDetails", JSON.stringify(userDetails));
        console.log("de", userDetails);
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("number").value = "";
        tableDisplay();
    }
    tableDisplay();
    function tableDisplay() {
        if (currentPage === 1) {
            document.getElementById('prev').disabled = true;
        }
        if (currentPage > 1) {
            document.getElementById('prev').disabled = false;
            document.getElementById('next').disabled = false;

        }
        if (currentPage === pages) {
            document.getElementById('next').disabled = true;
        }
        userDetails = JSON.parse(localStorage.getItem("addedDetails")) || [];
        if (userDetails) {
            pages = Math.round(userDetails.length / dataLimit);
            console.log("pages", pages);
            let displayData = getPaginatedData(userDetails);
            console.log("d", displayData);
            let value = getTableList(displayData);
            document.getElementById("display").innerHTML = value;
        }
    }
    function getTableList(array) {
        let list = ""
        array.map((value, index) => {
            list += `<tr>
                <td> ${value.username}</td>
                <td> ${value.email}</td>
                <td> ${value.number}</td>
            </tr>`
        })
        return list;
    }
    function searchName(e) {
   let result = "";
   x = e;
   console.log("e", x);
   x = x.toUpperCase();
   if (x === "") {
    tableDisplay();
  }
  else {
    let filterList = [];
    userDetails.map((author, index) => {
      let name = author.username.toUpperCase();
      if (name.includes(x)) {
        console.log("name", name);
        filterList.push(author);
      }
    })
  let value=  getTableList(filterList);
            document.getElementById("display").innerHTML = value;
  }
}
