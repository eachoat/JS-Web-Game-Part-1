function newImage(src, left, bottom, id, img = document.createElement('img')){
    if (id) {
        img.id= id
    }
img.src = src
img.style.position = 'fixed'
img.style.left = left
img.style.bottom = bottom
document.body.append(img)
return img
}

function newItem(src, left, bottom, item) {
    if (!item) {
        item = new Image()
    }

item.src = src
item.style.position = 'fixed'
item.style.left = left
item.style.bottom = bottom
document.body.append(item)

item.addEventListener('dblclick', function() {
    item.remove()
})
return item
}

let greenCharacter = newImage( 'assets/green-character.gif', '100px','100px', 'greenCharacter')

let pineTree = newImage( 'assets/pine-tree.png','450px', '200px', 'pineTree')

let tree = newImage( 'assets/tree.png','200px', '300px', 'tree')

let pillar = newImage( 'assets/pillar.png','350px', '100px', 'pillar')

let crate = newImage( 'assets/crate.png','150px', '200px', 'crate')

let well = newImage( 'assets/well.png','500px', '425px', 'well')



let sword = newItem('assets/sword.png', '500px', '405px')


let shield = newItem('assets/shield.png', '165px', '185px')


let staff = newItem('assets/staff.png', '600px', '100px')
