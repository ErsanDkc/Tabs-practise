const aboutCenter = document.querySelector(".about-center")
const buttons = document.querySelectorAll(".btn")
const contents = document.querySelectorAll(".content")





aboutCenter.addEventListener("click", function(e) {
    const id = e.target.dataset.id
    if(id) {
        // tıklandığında tüm butonların active clasını kaldırıyoruz
        buttons.forEach(function(btn) {
            btn.classList.remove("active")
        // sadece tıklanan butona active clasını ekliyoruz
            e.target.classList.add("active")
        })
        // tıklandığında tüm içerikleri kaldırıyoruz
        contents.forEach(function(content){
            content.classList.remove("active")
        })
        // id'sine tıklanan içeriği gösteriyoruz
        let requiredContent = document.getElementById(id)
        requiredContent.classList.add("active")
    }

})