let map1 = new Map();
let map2 = new Map();
let map3 = new Map();

// Vurobnuk and name
map1.set("sklad1", "kola");
map1.set("sklad2", "fanta");
map1.set("sklad3", "sprite");

// Price and Vurobnuk
map2.set(10, "sklad1");
map2.set(20, "sklad2");
map2.set(30, "sklad3");

// time and Vurobnuk
map3.set(1, "sklad1");
map3.set(2, "sklad2");
map3.set(3, "sklad3");

function mapFunc() {
    var price = []
    var time = []
    for(key of map2.keys()){
        price.push(key)
        
    }
    var maxPrice = (Math.max(...price))
    var minPrice = (Math.min(...price))

    for(key of map3.keys()){
        time.push(key)
        
    }
    var maxTime = (Math.max(...time))
    var minTime = (Math.min(...time))

    console.log('Найменша ціна', map1.get(map2.get(minPrice)), minPrice, map2.get(minPrice), getKeyByValue(map3, map2.get(minPrice)))

    console.log('Найбыльша ціна', map1.get(map2.get(maxPrice)), maxPrice, map2.get(maxPrice), getKeyByValue(map3, map2.get(maxPrice)))

    console.log("Найменший час", map1.get(map3.get(minTime)), getKeyByValue(map2, map3.get(minTime)), map3.get(minTime), minTime)

    console.log("Найбільший час", map1.get(map3.get(maxTime)), getKeyByValue(map2, map3.get(maxTime)), map3.get(maxTime), maxTime)

}

mapFunc()

function getKeyByValue(ob, str){
    for(key of ob.keys()){
        if(ob.get(key) === str)
            return key
    }
}

// for(key of map2.values()){
    
//     console.log(key)
// }


