async function getCat() {

    let catData = await fetch('https://api.thecatapi.com/v1/images/search?size=full')
    let catParsed = await catData.json()

    let cat = catParsed[0]

    let catImage = cat.url

    const newCatImage = document.createElement("img")
    const newHeader = document.createElement("h1")
    const newDiv = document.createElement("div")

    newHeader.innerText = "Here's a Cat Pic"
    newCatImage.setAttribute("id", "cat-image")
    newCatImage.src = catImage
    newDiv.appendChild(newCatImage)

    document.body.append(newHeader)
    document.body.append(newDiv)

    const catSelection = document.getElementById("cat-select")
    let selectedBreed
    // console.log(catSelection)

    catSelection.addEventListener("change", async function() {

        selectedBreed = catSelection.value
        let id

        switch (selectedBreed) {
            case 'Bengal':
                id = 'beng'
                break
            case 'Burmese':
                id = 'bure'
                break
            case 'Cyprus':
                id = 'cypr'
                break
            case 'Maine-Coon':
                id = 'mcoo'
                break
        }

        let catImgSelect = document.getElementById("cat-image")
        let urlString = `https://api.thecatapi.com/v1/images/search?breed_ids=${id}`
        let selectedCatObject = await fetch(urlString)
        let selectedCatObjectParsed = await selectedCatObject.json()
        catImgSelect.src = selectedCatObjectParsed[0].url
        console.log(selectedCatObjectParsed[0].url)
        newHeader.innerText = `${selectedBreed} cats are the best!`
        newHeader.style.color = `rgb${randomColor()}`

        // switch (selectedBreed) {
        //     case 'Bengal':
        //         const bengObj = await fetch('https://api.thecatapi.com/v1/images/search?breed_ids=beng')
                // const bengObjParsed = await bengObj.json()
        //         catImgSelect.src = bengObjParsed[0].url
        //         newHeader.innerText = "Bengals are the Best"
        //         break

        //     case 'Burmese':
        //         const burmObj = await fetch('https://api.thecatapi.com/v1/images/search?breed_ids=bure')
        //         const burmObjParsed = await burmObj.json()
        //         catImgSelect.src = burmObjParsed[0].url
        //         newHeader.innerText = "Burmese Cats are the Best"
        //         break

        //     case 'Cyprus':
        //         const cyprObj = await fetch('https://api.thecatapi.com/v1/images/search?breed_ids=cypr')
        //         const cyprObjParsed = await cyprObj.json()
        //         catImgSelect.src = cyprObjParsed[0].url
        //         newHeader.innerText = "Cyprus Cats are the Best"
        //         break

        //     case 'Maine-Coon':
        //         const mcooObj = await fetch('https://api.thecatapi.com/v1/images/search?breed_ids=mcoo')
        //         const mcooObjParsed = await mcooObj.json()
        //         catImgSelect.src = mcooObjParsed[0].url
        //         newHeader.innerText = "Maine Coons are the Best"
        //         break
        // }

        // if (selectedBreed === "Bengal") {
        //     catObj = await fetch('https://api.thecatapi.com/v1/images/search?breed_ids=beng')
        //     catImage = await catObj.json()
        //     let realCatImg = catImage[0].url
        //     let catImgSelect = document.getElementById("cat-image")
        //     catImgSelect.src = realCatImg
        // // }
    })
}

function randomColor() {
    let colors = {r: 0, g:0, b:0}

    for (color in colors) {
        colors[color] = Math.random() * 255
    }
    return `(${colors.r}, ${colors.g}, ${colors.b})`
}

window.onload = getCat()
