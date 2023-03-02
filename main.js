document.addEventListener('DOMContentLoaded', function() {
    const myAvatar = document.getElementById('my-avatar')
    const myName = document.getElementById('my-name')
    const myUsername = document.getElementById('my-username')
    const repositories = document.getElementById('repositories')
    const followers = document.getElementById('followers')
    const following = document.getElementById('following')
    const myGithub = document.getElementById('my-github')

    fetch('https://api.github.com/users/guscassiano')
    .then(function(ans){
        return ans.json()
    }).then(function(json){
        myAvatar.src = json.avatar_url
        myName.innerHTML = json.name
        myUsername.innerHTML = json.login
        repositories.innerHTML = json.public_repos
        followers.innerHTML = json.followers
        following.innerHTML = json.following
        myGithub.href = json.html_url
    })
})