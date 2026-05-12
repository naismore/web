function login(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    if ((email == null || email == "") && (password == null || password == ""))
    {
        alert("Поля не заполнены")
        return
    }
    else
    {
        FileOfLoginInfo = {
            "email": email,
            "password": password,
        }
        console.log(FileOfLoginInfo)
    }

}

