const button = document.getElementById("button").addEventListener("click", () => {
    const inputTxt = document.getElementById("input-text").value;
    const inputBody = document.getElementById("input-body").value;
    const input = {
        title: inputTxt,
        body: inputBody
    };
    postValue(input);
})

function postValue(input) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(input),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => displayValue(json))
}

function displayValue(name) {
    const p = document.getElementById("display");
    const p2 = document.getElementById("display2");
    p.innerHTML = name.title;
    p2.innerHTML = name.body;
    return p;
    return p2;
    /*
    const title = name.title;
    const body = name.body;
    const li1 = document.createElement("h5");
    li1.innerText = title;
    ul.appendChild(li1);
    const li2 = document.createElement("p");
    li2.innerText = body;
    ul.appendChild(li2);
    */
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => displayUsers(json))

function displayUsers(users) {
    const userNames = users.map(user => user.username);
    const ul = document.getElementById("user-container");
    for (let i = 0; i < userNames.length; i++) {
        const username = userNames[i];
        const li = document.createElement("li");
        li.innerText = username;
        ul.appendChild(li);
    }
}