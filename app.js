
function getPhonesArticles(category = "all") {
    const api = "https://67c06674b9d02a9f22498dd4.mockapi.io/news/OnePlus"
    const phones = document.querySelector(".phones")

    phones.innerHTML = ""

    fetch(api)
        .then(res => res.json())
        .then(data => {
            if (category !== "all") {
                data = data.filter(article => article.category === category)
            }

            data.forEach(article => {
                phones.innerHTML += `<div class='phones-article'>
                    <img src='${article.banner}' alt=''>
                    <h1>${article.title}</h1>
                    <p class="price">Price: ${article.price}</p>
                    <p>${article.category}</p>
                </div>`
            })
        })
}

function addFilters() {
    const all = document.getElementById("all")
    const flagship = document.getElementById("flagship")
    const flagshipKiller = document.getElementById("flagship killer")
    const midRange = document.getElementById("mid-range")
    const budget = document.getElementById("budget")
    const photography = document.getElementById("photography")

    all.addEventListener("click", () => {
        getPhonesArticles()
    })

    flagship.addEventListener("click", () => {
        getPhonesArticles("Flagship")
    })
    flagshipKiller.addEventListener("click", () => {
        getPhonesArticles("Flagship Killer")
    })

    midRange.addEventListener("click", () => {
        getPhonesArticles("Mid-Range")
    })

    budget.addEventListener("click", () => {
        getPhonesArticles("Budget")
    })

    photography.addEventListener("click", () => {
        getPhonesArticles("Photography")
    })
}

getPhonesArticles()
addFilters()