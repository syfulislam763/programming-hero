fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => displayUsersData(data))

function displayUsersData(data) {
    let name = "";
    data.forEach(user => {
        name = name + `<div class = "well">
                       <h2>${user.username}</h2>
                       <p><strong>Email ID :</strong> ${user.email}</p>
                       <div>
                            <strong>Company :</strong>
                            <p class="p">${user.company.name}<br>${user.company.catchPhrase}<br>${user.company.bs}<p>
                        </div>
                       </div>`
    });
    const result = document.getElementById("users-container");
    result.innerHTML = name;
}

func