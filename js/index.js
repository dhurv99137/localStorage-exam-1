let book = JSON.parse(localStorage.getItem("data")) || [];

const uimaker = () => {
    document.getElementById("container").innerHTML = ""
    book.map((ele, index) => {
        let title = document.createElement("h5")
        title.innerHTML = ele.title
        let description = document.createElement("p")
        description.innerHTML = ele.description
        let price = document.createElement("h5")
        price.innerHTML = ele.price
        let category = document.createElement("h6")
        category.innerHTML = ele.category
        let img = document.createElement("img")
        img.src = ele.image
        let btt = document.createElement("button")
        btt.innerHTML = "Delete"
        btt.addEventListener("click", () => {
            book.splice(index, 1);
            uimaker()
        })
        let ott = document.createElement("button")
        ott.innerHTML = "Buy"
        ott.addEventListener("click", () => {
            alert("")
        })


        let div = document.createElement("div")
        div.append(img, title, description, price, category, btt, ott)
        document.getElementById("container").append(div)
    });
}

const uidata = (e) => {
    e.preventDefault()

    let data = {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        price: document.getElementById("price").value,
        category: document.getElementById("category").value,
        image: document.getElementById("image").value
    }
    book.push(data);
    localStorage.setItem("data", JSON.stringify(book));
    uimaker();
}

document.getElementById("formData").addEventListener("submit", uidata);

uimaker();

