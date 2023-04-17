var topics = ["HTML", "CSS", "Git", "JavaScript"] 

var randomTopic = topics[Math.floor(Math.random() * topics.length)]
console.log("These are the topics we covered briefly during the prework")
// for loop to log the different topics to study
function listTopics() {
    for (var y = 0; y < topics.length; y++) {
        console.log(topics[y])
    }
}



function selectTopic() {
    if (randomTopic === "HTML") {
        console.log("Let's study HTML!")
    } else if (randomTopic === "CSS") {
        console.log("Let's study CSS!")
    } else if (randomTopic === "Git") {
        console.log("Let's study Git!")
    } else if (randomTopic === "JavaScript") {
        console.log("Let's study JavaScript!")
    } else {
        console.log("Please try again!")
    }
}

listTopics();
console.log("What topic should I study first?")
selectTopic();
