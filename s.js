let adjs = [
        "smelly",
        "nerdy",
        "smart",
        "weird",
        "stupid",
        "rude",
        "dirty",
        "poor",
        "rich",
        "childish",
        "political",
        "happy",
        "loving",
        "murderous",
        "kind",
        "handsome",
        "beautiful",
        "accurate",
        "specific",
        "thoughtful",
        "thinking",
        "absolute"
    ]

    let verbs = [
        ["smelling", "a"],
        ["touching", "a"],
        ["smacking", "a"],
        ["hitting", "a"],
        ["screaming", "at a"],
        ["smiling", "at a"],
        ["looking", "at a"],
        ["sharing", "a"],
        ["giving someone", "a"],
        ["eating", "a"],
        ["sending", "a"],
        ["drinking", "a"],
        ["running", "at a"],
        ["killing", "a"],
        ["cringing", "at a"],
        ["hiding", "from a"],
        ["staring", "at a"],
        ["selling", "a"],
        ["sitting", "on a"]
    ]

    let chars = [
        "human",
        "chashier",
        "spider",
        "ghost",
        "cat",
        "dog",
        "CEO",
        "manager",
        "IT guy",
        "programmer",
        "artist",
        "hacker",
        "teacher",
        "student",
        "intern",
        "otter",
        "beaver",
        "bird",
        "crow",
        "elephant",
        "lion",
        "tiger",
        "wolf",
        "squid",
        "jellyfish",
        "shark",
        "fish",
        "boat",
        "car",
        "truck",
        "limo",
        "guy",
        "woman",
        "man",
        "math equation"
    ]

    let objects = [
        "paper",
        "pencil",
        "computer",
        "spaghetti",
        "pasta",
        "eyeball",
        "glasses",
        "clown wig",
        "otter",
        "tree",
        "money",
        "12 year old boy",
        "clown",
        "coffee",
        "water",
        "cheese",
        "video game",
        "finger",
        "cat",
        "Feji™️ Water",
        "pool",
        "forest",
        "car",
        "father",
        "mother"
    ]

    function getRandEle(arr) {
        return arr[Math.floor(Math.random()*arr.length)];
    }


    function generateIdea() {
        let currentIdea = document.getElementById("idea");
        if (currentIdea) {
            currentIdea.remove();
        }

        let index = Math.floor(Math.random()*verbs.length);
        let index1 = Math.floor(Math.random()*verbs.length);

        let situations = [
            ``,
            ` ${verbs[index][0]} ${verbs[index][1]} ${getRandEle(objects)}`,
            ` and a ${getRandEle(adjs)} ${getRandEle(chars)} ${verbs[index][0]} ${verbs[index][1]} ${getRandEle(objects)}`,
            ` ${verbs[index][0]} ${verbs[index][1]} ${getRandEle(objects)} while ${verbs[index1][0]} ${verbs[index1][1]} ${getRandEle(objects)}`,
            ` with a ${getRandEle(objects)}`,
            ` with a ${getRandEle(objects)} and a ${getRandEle(objects)}`,
            ` with a ${getRandEle(adjs)} ${getRandEle(objects)}`,
            ` with a ${getRandEle(adjs)} ${getRandEle(objects)} and a ${getRandEle(adjs)} ${getRandEle(objects)}`,
            ` with a ${getRandEle(objects)} ${verbs[index][0]} ${verbs[index][1]} ${getRandEle(objects)}`,
            ` with a ${getRandEle(objects)} while ${verbs[index][0]} ${verbs[index][1]} ${getRandEle(objects)}`,
            ` which is ${verbs[index][0]}`,
            ` with a ${getRandEle(adjs)} and ${getRandEle(adjs)} ${getRandEle(chars)}`,
            ` with a ${getRandEle(adjs)} ${getRandEle(chars)} sharing a ${getRandEle(objects)}`
        ]

        let thing = document.getElementById("center");
        let refreshButton = document.getElementById("refreshButton");
        let idea = document.createElement("p");

        idea.innerHTML = `Draw a ${getRandEle(adjs)} ${getRandEle(chars)}${getRandEle(situations)}.`
        thing.insertBefore(idea, refreshButton);

        idea.id = "idea"
    }

    generateIdea();