let required = [
    "adjectives.json",
    "characters.json",
    "objects.json",
    "verbs.json"
]
// requiring "adjectives.json" will request /adjectives.json and 
// leave it in res.adjectives to be used later

let idea = document.getElementById("idea");
let loaded = 0
idea.innerHTML = loaded + "/" + required.length +" resources loaded"

let res = {}

function loadFile(url) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function() {
    urlSplit = url.split("."); // if the url contains an extension, it gets split into the name and extension respectively
    res[urlSplit[0]] = JSON.parse(xhr.responseText)
    loaded += 1
    idea.innerHTML = loaded + "/" + required.length +" resources loaded"
    console.log(`Loaded ${url}`)

    if (loaded === required.length) {
        generateIdea() // Generates the random idea once everything is loaded
    }
  }
  xhr.open("GET", url);
  xhr.send();
  console.log(`Requesting ${url}`)

  return true;
}

required.forEach(function (item, index) {
  loadFile(item)
});

function getRandEle(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}


function generateIdea() {
    let index = Math.floor(Math.random()*res.verbs.length);
    let index1 = Math.floor(Math.random()*res.verbs.length);

    let situations = [
        ``,
        ` ${res.verbs[index][0]} ${res.verbs[index][1]} ${getRandEle(res.objects)}`,
        ` and a ${getRandEle(res.adjectives)} ${getRandEle(res.characters)} ${res.verbs[index][0]} ${res.verbs[index][1]} ${getRandEle(res.objects)}`,
        ` ${res.verbs[index][0]} ${res.verbs[index][1]} ${getRandEle(res.objects)} while ${res.verbs[index1][0]} ${res.verbs[index1][1]} ${getRandEle(res.objects)}`,
        ` with a ${getRandEle(res.objects)}`,
        ` with a ${getRandEle(res.objects)} and a ${getRandEle(res.objects)}`,
        ` with a ${getRandEle(res.adjectives)} ${getRandEle(res.objects)}`,
        ` with a ${getRandEle(res.adjectives)} ${getRandEle(res.objects)} and a ${getRandEle(res.adjectives)} ${getRandEle(res.objects)}`,
        ` with a ${getRandEle(res.objects)} ${res.verbs[index][0]} ${res.verbs[index][1]} ${getRandEle(res.objects)}`,
        ` with a ${getRandEle(res.objects)} while ${res.verbs[index][0]} ${res.verbs[index][1]} ${getRandEle(res.objects)}`,
        ` which is ${res.verbs[index][0]}`,
        ` with a ${getRandEle(res.adjectives)} and ${getRandEle(res.adjectives)} ${getRandEle(res.characters)}`,
        ` with a ${getRandEle(res.adjectives)} ${getRandEle(res.characters)} sharing a ${getRandEle(res.objects)}`,
        ` which is ${res.verbs[index][0]}, like a ${getRandEle(res.objects)}`,
        ` and a ${getRandEle(res.adjectives)} ${getRandEle(res.characters)} sharing a ${getRandEle(res.objects)}`
    ]

    raw = `A ${getRandEle(res.adjectives)} ${getRandEle(res.characters)}${getRandEle(situations)}.`

    raw = raw.replaceAll(" a a", " an a")
    raw = raw.replaceAll(" a e", " an e")
    raw = raw.replaceAll(" a i", " an i")
    raw = raw.replaceAll(" a o", " an o")
    raw = raw.replaceAll(" a u", " an u")
    raw = raw.replaceAll("A a", "An a")
    raw = raw.replaceAll("A e", "An e")
    raw = raw.replaceAll("A i", "An i")
    raw = raw.replaceAll("A o", "An o")
    raw = raw.replaceAll("A u", "An u")

    idea.innerHTML = raw
}