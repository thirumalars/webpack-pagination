
alert("hello")

let userDetails = [];

function getvalue() {
    let names, email, number;

    names = document.getElementById("name").value;
    email = document.getElementById("email").value;
    number = document.getElementById("number").value;

    let details =
    {
        username:names,
        email:email,
        number:number
    }

    userDetails.push(details);

    console.log("user",userDetails );

    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("number").value="";
    
}
user();
function user()
{
    alert("hi");
    let val=
`
<h1>Get Details</h1>

<label>Name:</label>
<input type="text" id="name" />

<label>Email</label>
<input type="text" id="email" />

<label>Phone Number:</label>
<input type="number" id="number" />

<button onclick ="getvalue()"> Add Details</button>
 
<div class="display-details">
    <table>
        <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone Number</td>
        </tr>
        <script>
            <tr>`
                userDetails.map((value,index)=>{
                    alert("hh")
                    {key=index}
                    `<td> ${value.username}</td>`
                    `<td> ${value.email}</td>`
                    `<td> ${value.number}</td>
                </tr>`
            })
     `       
    </table>
    </div>
</div>
<div class="pagination">
    <a href="#">&laquo;</a>
    <a href="#">1</a>
    <a href="#">2</a>
    <a href="#">3</a>
    <a href="#">4</a>
    <a href="#">5</a>
    <a href="#">6</a>
    <a href="#">&raquo;</a>
  </div>`
  document.getElementById("demo").innerHTML=val;
        }

function pagination()
{
    const pageLimit=10,dataLimit=5;
    let currentPage=1;

}
const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return userDetails.slice(startIndex, endIndex);
};