function showPassword(){
    const eye = document.getElementById("eye")
    const input = document.getElementById("password")
    
    if (input.getAttribute("type") == "password")
    {
        input.setAttribute("type", "text")
        eye.classList.remove("toggle-visible")
        eye.classList.toggle("toggle-visible_active")
    }
    else
    {
        input.setAttribute("type", "password")
        eye.classList.remove("toggle-visible_active")
        eye.classList.toggle("toggle-visible")
    }
}