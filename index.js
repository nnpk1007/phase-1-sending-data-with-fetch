function submitData(userName, userEmail) {
    const userData = {
        name: userName,
        email: userEmail,
    }    

    const handleUserData = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(userData)
    }

    return fetch("http://localhost:3000/users", handleUserData)
        .then((res) => res.json())
        .then((data) => {
            document.body.innerHTML = data.id
        })
        .catch((error) => {
            const errorMessage = document.createElement("p");

            errorMessage.textContent = error.message;
            
            document.body.appendChild(errorMessage);
        })
}

