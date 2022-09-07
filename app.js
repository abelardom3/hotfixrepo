// I want good control flow and function encapsulation for this project. 
// I don't want just lines and lines of code written in the global scope or in one huge function.

// When page loads, make a get request that gets all users and creates divs for each user. 
// Each user div should have the users name, username, and city they are located in.
// when a div is clicked on, it should fetch all posts associated with the user id.

// const container = document.querySelector('#container')

// const containerPost = document.createElement("div")
// containerPost.id = "containerPost"

// // example()

// // function example() {
// //     $.get([some url here], [some callback function that gets access to data here])
// // }

// getUsers()




// function getUsers() {
//     $.get("https://jsonplaceholder.typicode.com/users", (data) => {
//         console.log(data)
//     })

// }






















































const container = document.querySelector('#container')


const containerPost = document.createElement("div")
containerPost.id = "containerPost"

const backButton = document.createElement('button')
backButton.className = 'backBtn'

// example()

// function example() {
//     $.get([some url here], [some callback function that gets access to data here])
// }

buttonEvent()


// when button is clicked getUsers will invoke 
function buttonEvent() {
    const getBtn = document.getElementById("btn")
    getBtn.addEventListener('click', getUsers)


}

// function will acquire data from the API
function getUsers() {
    $.get("https://jsonplaceholder.typicode.com/users", logUsers)

}

// function will grab that data and pass it in 
// then we will loop through the array of objects, to get to each indiviual object
function logUsers(userInfo) {
    for (var i = 0; i < userInfo.length; i++) {
        const currentUser = userInfo[i]
        createDiv(currentUser)

    }


}

//function will then take the indiviual object and at the same time create 'div's 
// those div's will contain object values that we choose 
function createDiv(object) {
    container.classList = "users"
    const currentUserDiv = document.createElement('div')
    currentUserDiv.className = "homePage"
    currentUserDiv.id = object.id
    currentUserDiv.innerText = `Name: ${object.name}, Username: ${object.username}, City: ${object.address.city}`
    container.appendChild(currentUserDiv)
    clickId(object.id)

}
// this function will run when a target id is clicked that will replace the last word of the url with the target id string 
function clickId(id) {
    const idUser = document.getElementById(id)
    idUser.addEventListener('click', function (e) {
        const id = e.target.id
        $.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`, getPost)

        hideContainer()
        hideGetBtn()
    })

}

// function will then get the post data for that certain user and loop through the array to get to the object
function getPost(postData) {
    for (var i = 0; i < postData.length; i++) {
        var userPost = postData[i]
        createDivPost(userPost)
    }

}

// function then will create 'div's for each post and append to the post container
function createDivPost(userPost) {
    const postDiv = document.createElement("div")
    postDiv.className = "postPage"
    postDiv.innerText = `Posted: "${userPost.title}"`
    containerPost.append(postDiv)
    document.body.append(containerPost)
    showContainer()
}

// function then will append the back button and show the post container 
function showContainer() {
    $(containerPost).before(backButton)
    backButton.innerText = "Go back"
    //when back button is clicked it will show the orginal container and invoke hidePost
    backButton.addEventListener('click', () => {
        $(container).show()
        hidePost()

    })

}

// function the will 
function hidePost() {
    $(containerPost).hide()
    $(containerPost).empty()
    $(backButton).hide()
    showGetBtn()
}



function hideContainer() {
    $(container).hide()
    $(containerPost).show()
    $(backButton).show()

}

function hideGetBtn() {
    const getBtn = document.getElementById('btn')
    console.log(getBtn)
    $(getBtn).hide()
}

function showGetBtn() {
    const getBtn = document.getElementById('btn')
    $(getBtn).show()
}












