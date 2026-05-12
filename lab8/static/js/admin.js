function getInformation(){
    const title = document.getElementById("name_of_post").value
    const description = document.getElementById("description_of_post").value
    const author = document.getElementById("author_name").value
    const authorPhoto = btoa(document.getElementById("author_photo").value)
    const heroImageSmall = btoa(document.getElementById("hero_image_big").value)
    const heroImageBig = btoa(document.getElementById("hero_image_small").value)
    const date = document.getElementById("date").value

    if ((title == null || title == "") && (description == null || description == "") && (author == null || author == "") && 
    (authorPhoto == null || authorPhoto == "") && (heroImageSmall == null || heroImageSmall == "") && 
    (heroImageBig == null || heroImageBig == "") && (date == null || date == ""))
    {
        alert("Поля не заполнены")
        return
    } else {

        const fileOfInformation = {
            "title": title,
            "descrption": description,
            "author": author,
            "authorPhoto": authorPhoto,
            "heroImageSmall": heroImageSmall,
            "heroImageBig": heroImageBig,
            "date": date
        }
        console.log(fileOfInformation)
    }    
}