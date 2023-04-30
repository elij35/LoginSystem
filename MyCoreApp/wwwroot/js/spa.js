//Lets you swap html pages
$(document).ready(function () {

    $('#index').click(function () {
        $('#page-content-wrapper').load('index.html');
    })

    $('#messages').click(function () {
        $('#page-content-wrapper').load('messages.html');
    })

    $('#posts').click(function () {
        $('#page-content-wrapper').load('posts.html');
    })

    $('#posts-create').click(function () {
        $('#page-content-wrapper').load('posts-create.html');
    })

    $('#posts-mine').click(function () {
        $('#page-content-wrapper').load('posts-mine.html');
    })

    $('#friends').click(function () {
        $('#page-content-wrapper').load('friends.html');
    })

    $('#games').click(function () {
        $('#page-content-wrapper').load('games.html');
    })

    $('#account').click(function () {
        $('#page-content-wrapper').load('accounts.html');
    })

    $('#login').click(function () {
        $('#page-content-wrapper').load('login.html');
    })

    $('#register').click(function () {
        $('#page-content-wrapper').load('register.html');
    })
});


//set current user

var currentUser = "None";

function userA() {
    localStorage.setItem("currentUser", "userA");
    currentUser = localStorage.getItem("currentUser");
    document.getElementById("userCurrent").innerHTML = currentUser;
}
function userB() {
    localStorage.setItem("currentUser", "userB");
    currentUser = localStorage.getItem("currentUser");
    document.getElementById("userCurrent").innerHTML = currentUser;
}
function userC() {
    localStorage.setItem("currentUser", "userC");
    currentUser = localStorage.getItem("currentUser");
    document.getElementById("userCurrent").innerHTML = currentUser;
}
function userD() {
    localStorage.setItem("currentUser", "userD");
    currentUser = localStorage.getItem("currentUser");
    document.getElementById("userCurrent").innerHTML = currentUser;
}
function userE() {
    localStorage.setItem("currentUser", "userE");
    currentUser = localStorage.getItem("currentUser");
    document.getElementById("userCurrent").innerHTML = currentUser;
}
function userF() {
    localStorage.setItem("currentUser", "userF");
    currentUser = localStorage.getItem("currentUser");
    document.getElementById("userCurrent").innerHTML = currentUser;
}
function userG() {
    localStorage.setItem("currentUser", "userG");
    currentUser = localStorage.getItem("currentUser");
    document.getElementById("userCurrent").innerHTML = currentUser;
}


//Setup the simulated already created posts
function reset() {

    var userInfo;
    var userPosts;


    ////////////////UserA

    userInfo = [
        ["Amy", "Anderson", "21"],  //Firstname, lastname, age
        ["userB", "userC", "userD", "userE", "userF"]    //Friends list
    ];

    localStorage.setItem("userA", JSON.stringify(userInfo));

    //date, title, content, [users who have liked the post], 1st comment, 2nd comment, 3rd...
    userPosts = [
        [0, "The National Trust celebrating Cotehele's orchards",
            "Tomorrow staff and students from our School of Biological and Marine Sciences will be running a Blossom Blitz highlighting the importance of blossom to biodiversity and working with visitors to explore the different species that rely on it. \n Come along to find out what wildlife makes the orchard its home and see how much you can spot to help build a picture of this amazing habitat.",
            ["userB", "userC"], "Charlie Carter - comment", "Amy Anderson - Comment", "Ben Brown - Comment"],

        [974030764000, "La Selva Biological Station, Costa Rica",
            "La Selva offers 1,600 hectares of well-preserved old-growth and recovering wet lowland tropical forest that is home to over 2,000 species of plant, hundreds of species of birds, mammals, reptiles, amphibians, and thousands of insects.",
            ["userB", "userC", "userD"], "Charlie Carter - comment", "Daniel Davis - its a comment"],

        [1020232799000, "For word wrap",
            "PneumonoultramicroscopicsilicovolcanoconiosisPneumonoultramicroscopicsilicovolcanoconiosisPneumonoultramicroscopicsilicovolcanoconiosisPneumonoultramicroscopicsilicovolcanoconiosisPneumonoultramicroscopicsilicovolcanoconiosisPneumonoultramicroscopicsilicovolcanoconiosisPneumonoultramicroscopicsilicovolcanoconiosisPneumonoultramicroscopicsilicovolcanoconiosisPneumonoultramicroscopicsilicovolcanoconiosisPneumonoultramicroscopicsilicovolcanoconiosis",
            ["userC", "userF"]],

        [1449027265000, "Hi Guys!",
            "Just wanted to say hi!",
            ["userB", "userE", "userF"], "Elizabeth Evans - Comment", "Elizabeth Evans - Comment", "Charlie Carter - commented", "Ben Brown - Comment", "Elizabeth Evans - Comment"],

        [1540227235000, "Where I got the posts from",
            "Coming up with simulated posts is a bit of a hassle so I have elected to borrow some of Plymouth Unis. \n Hope they dont mind...",
            ["userC", "userE"], "Daniel Davis - Commented", "Daniel Davis - Comment", "Charlie Carter - Comment", "Charlie Carter - more comments"],

        [1619023562000, "This can be any title you want... but not too long",
            "These posts simulate already made posts the user has made. \n \n You can create more by going to the create tab in the sidebar.",
            ["userB", "userC", "userD", "userE", "userF"], "Ben Brown - This is a comment", "Charlie Carter - Comment", "Fred Findley - Commented", "Ben Brown - More comments", "Elizabeth Evans - Commented done right", "Amy Anderson - Thanks for the comments everyone. Lets see if i can write big enough to fill in the line.", "Charlie Carter - Comment", "Charlie Carter - Scrolling comments"]
    ];

    localStorage.setItem("userAPosts", JSON.stringify(userPosts));


    ////////////////UserB

    userInfo = [
        ["Ben", "Brown", "22"],
        ["userA", "userC", "userD"]    //Friends list
    ];

    localStorage.setItem("userB", JSON.stringify(userInfo));

    userPosts = [
        [0, "The beautiful Dartmoor",
            "Palmate newts are the smallest newt species found in the UK and are distributed throughout most of the country.",
            ["userA"], "Amy Anderson - Comment", "Charlie Carter - Comment"],

        [974030764000, "The Plymouth Nature Film Festival",
            "The Plymouth Nature Film Festival is returning to the city this month, exploring humans’ relationship with nature and how both are adapting in the face of global change. \n Founded by six students from the University of Plymouth, the festival is being held in the city’s Market Hall – in partnership with the Real Ideas Organisation – on Saturday 29 April.",
            ["userA", "userC"], "Daniel Davis - Comment", "Charlie Carter - Comment", "Amy Anderson - Comment"],

        [1020232799000, "Wavedance",
            "Wavedance, our multi-purpose survey vessel, was out last week making the most of the beautiful conditions on Plymouth Sound around Bovisand. \n The vessel is used extensively by the School of Biological and Marine Sciences to conduct marine fieldwork across a whole range of subject modules.",
            ["userA", "userC", "userD"], "Daniel Davis - Comment", "Amy Anderson - Comment", "Charlie Carter - Comment"],

        [1449027265000, "First-year field trip to Roscoff, France",
            "Our Marine Biology students are currently on their first-year field trip to Roscoff, France. \n The Brittany field course provides students with their first introduction to residential fieldwork in marine biology.They have direct access to amazing coastal habitats, during the course, and will become acquainted with the ecology and the diversity of marine organisms found there.",
            [], "Amy Anderson - Comment", "Daniel Davis - Comment", "Amy Anderson - Comment", "Daniel Davis - Comment"],

        [1540227235000, "The past and future of humankind",
            "The past and future of humankind is tied to our ocean. Marine social science can help us to understand these links and how human behaviour is key to ensuring that the ocean has a healthy and thriving future.  \n Dr Eva McGrath, a social researcher from the University will be exhibiting and sharing details about her research with swimming communities across Devon and Cornwall.  \n 25 April, 18: 00 - 20: 30 - National Marine Aquarium",
            ["userC", "userD"], "Daniel Davis - Comment", "Amy Anderson - Comment"],

        [1619023562000, "Challenge? Accepted!",
            "Challenge? Accepted! is a celebration of the many varied and wonderful contributions that Plymouth students make to their peers, the university and the community at large.   \n Find out more about what’s going on and how you can get involved, as well as benefit from 1 - 2 - 1 coaching, exam support, wellbeing sessions and seminars run by the students and staff that bring these networks and initiatives to life.",
            ["userD"]]
    ];

    localStorage.setItem("userBPosts", JSON.stringify(userPosts));


    ////////////////UserC

    userInfo = [
        ["Charlie", "Carter", "23"],
        ["userA", "userB", "userD", "userF"]    //Friends list
    ];

    localStorage.setItem("userC", JSON.stringify(userInfo));

    userPosts = [
        [1662002296, "Full impacts of tritium",
            "Scientists call for global effort to assess the full impacts of tritium  \n A radioactive isotope of hydrogen, tritium is a by - product of the nuclear industry and its presence is predicted to grow exponentially with nuclear increasingly seen as being key to the global low - carbon economy. \n Read the full story here https://www.plymouth.ac.uk/.../scientists-call-for-global...",
            ["userA", "userB", "userD", "userF"], "Amy Anderson - Comment", "Fred Findley - Comment", "Ben Brown - Comment", "Fred Findley - Comment"],


        [1682691873, "Our Conservation Biology students",
            "Our Conservation Biology students are currently on a field course in Spain, most recently in the stunning dunes around Zahara. \n The first - year students are learning to identify a range of plant and invertebrate groups 🦋 \n Find out more about this course and their other field trip locations 👇",
            ["userB", "userF"], "Ben Brown - Comment", "Amy Anderson - Comment"]
    ];

    localStorage.setItem("userCPosts", JSON.stringify(userPosts));


    ////////////////UserD

    userInfo = [
        ["Daniel", "Davis", "23"],
        ["userA", "userB", "userC", "userF"]    //Friends list
    ];

    localStorage.setItem("userD", JSON.stringify(userInfo));

    userPosts = [
        [1041833811000, "Earth's orbit will become unusable",
            "Increasing amounts of debris orbiting Earth have prompted a call by scientists for an international agreement to limit the growth of space junk. \n Without it, they fear large parts of Earth's orbit will become unusable.",
            ["userA", "userB", "userC"], "Amy Anderson - Comment", "Amy Anderson - Comment", "Charlie Carter - Comment"],

        [1083452493000, "Zoology",
            "Louisa Watson is one of our third-year BSc (Hons) Zoology students currently undertaking her placement year. \n For three - months at the end of 2022, Louisa spent time working at Merazonia – a wildlife rescue and rehabilitation centre situated on 250 acres of Ecuador's Amazon rainforest. \n Louisa was actively involved in the one - to - one rehabilitation of three animals – a young tamandua, a baby giant anteater and a baby woolly monkey.Louisa witnessed the tamandua successfully be released and thrive out in the wild",
            ["userA", "userB", "userF"], "Fred Findley - Comment", "Ben Brown - Comment"],

        [1164955816000, "Human and planetary health",
            "University scientist works on report highlighting plastic’s threat to human and planetary health  \n Professor Richard Thompson OBE FRS is among the scientists on the Minderoo - Monaco Commission on Plastics and Human Health, which has revealed a never - before - seen analysis showing plastic as a hazard at every stage of its life cycle, causing disease, impairment, and premature mortality.",
            ["userB"], "Ben Brown - Comment", "Charlie Carter - Comment", "Fred Findley - Comment"],

        [1378046176000, "Construction of The Roland Levinsky",
            "It's one of the most recognisable buildings on our campus so here's a look back at the construction of The Roland Levinsky Building, taken one sunny day in February 2007.  \n Do you have a favourite campus building ? Let us know...",
            ["userC", "userF"]]
    ];

    localStorage.setItem("userDPosts", JSON.stringify(userPosts));


    ////////////////UserE

    userInfo = [
        ["Elizabeth", "Evans", "23"],
        ["userA"]    //Friends list
    ];

    localStorage.setItem("userE", JSON.stringify(userInfo));

    userPosts = [
        [320736183000, "Shaugh Prior",
            "Our first-year BSc (Hons) Conservation Biology students recently visited Shaugh Prior and Cadover Bridge to carry out freshwater aquatic invertebrate sampling and gain some Important early in their study field experience. \n They are learning about the types of habitats that freshwater invertebrates live in, how to identify them, how to measure water quality and what that can tell us about the environment(health of the organisms, habitat).",
            ["userA"], "Amy Anderson - Comment", "Elizabeth Evans - Comment", "Elizabeth Evans - Comment", "Elizabeth Evans - Comment"],

        [623218983000, "FISH INTEL project",
            "Around 1,000 fish have been tagged in the English Channel as part of an ambitious FISH INTEL project to preserve and enhance the habitats of some of the region’s key fish species. \n The conclusion of the project was marked with a conference at the University attended by many of its key stakeholders. \n The conference was opened by marine biologist and television presenter Miranda Krestovnikoff, who has been exploring the abundance of marine wildlife in the English Channel for more than 30 years.",
            [], "Elizabeth Evans - Comment", "Amy Anderson - Comment"],

        [891418322000, "Smoking Kills",
            "Promoting physical activity and other behavioural support can help people wanting to reduce their smoking to quit in the short-term. \n However, after nine months, physical activity delivers no noticeable benefits – compared with offering no additional support – in the rates of people stopping smoking, according to the findings of a major national study.",
            ["userA"], "Amy Anderson - Comment"],

        [965153522000, "World Heritage Site the Jurrasic Coast",
            "They learned all about the fascinating animals (past and present) that inhabited these seas. During the Jurassic Period (~190 MYA), Lyme Regis was closer to the equator and covered in a continental sea that was home to a wondrous collection of giant reptiles (Ichthyosaurs, plesiosaurs, among others) and the ever-popular nautiloids/ammonites.",
            [], "Elizabeth Evans - Comment"],

        [1204351922000, "Endurance",
            "It has been hailed as one of the greatest shipwreck discoveries in history.  \n Endurance, the lost vessel of Antarctic explorer Sir Ernest Shackleton, finally located more than a century after she was holed by sea ice and sent to the bottom of the Weddell Sea. \n In this lecture, Mensun will share his first - hand account of the recent Endurance22 Expedition during which the wreck of Endurance was located deep in the Weddell Sea in March 2022. ",
            []],

        [1204438322000, "Digital Tech Project",
            "As society becomes increasingly digital, older people across the South West have been faced with the growing prospect of isolation and exclusion. The growth in the digital sector has also led in the past to younger people feeling they may need to leave the region in search of work in the industry. \n Now a new initiative is looking to address both challenges by finding ways of engaging older generations with digital content – and encouraging younger generations to create it.",
            ["userA"]],

        [1391245922000, "🦢🦢🦢🦢",
            "he sun sets behind Sutton Harbour and The Barbican 🦢",
            ["userA"], "Amy Anderson - Comment"],

        [1401588302000, "Comparative Zoology module",
            "Our second-year BSc (Hons) Zoology students have begun their Comparative Zoology module by examining examples of chordate biodiversity. \n This module helps them develop a deep understanding of the morphology, development, and taxonomy of a wide range of vertebrate and invertebrate groups.",
            ["userA"], "Amy Anderson - Comment", "Amy Anderson - Comment", "Amy Anderson - Comment"],

        [1480092526000, "A sustainable future?",
            "Our Geography students have recently been on a series of field trips across Devon learning how water is viewed and managed in our landscape. \n Visiting a range of locations including Roadford Reservoir, and a site where beavers have been reintroduced, they discussed issues such as resilience to climate change, water quality, and the future of land and water management.",
            ["userA"], "Amy Anderson - Comment"],

        [1501612666000, "Winter sea swimmers.",
            "Shout out to all the Winter sea swimmers. \n It may be chilly, but there's always people out enjoying the water at Plymouth Hoe or Firestone Bay. \n Would you take a dip ?",
            [], "Elizabeth Evans - Comment", "Amy Anderson - Comment"],

        [1601824966000, "Pheasants at risk on unfamiliar ground",
            "Pheasants are most likely to be killed by predators on unfamiliar ground, according to new research involving the University.  \n A new study showed most animals live within a certain area, known as their “home range”, and they know the central areas better than the edges. \n To examine how this impacted their outcomes, researchers assessed the performance of 126 captive - reared pheasant chicks on a range of cognitive puzzles.They were then released into the wild and tracked using a high - precision tagging system.",
            ["userA"]]
    ];

    localStorage.setItem("userEPosts", JSON.stringify(userPosts));


    ////////////////UserF

    userInfo = [
        ["Fred", "Findley", "60"],
        ["userA", "userC", "userD"]    //Friends list
    ];

    localStorage.setItem("userF", JSON.stringify(userInfo));

    userPosts = [

    ];

    localStorage.setItem("userFPosts", JSON.stringify(userPosts));

    ////////////////UserG

    userInfo = [
        ["Georgie", "Grant", "60"],
        []    //Friends list
    ];

    localStorage.setItem("userG", JSON.stringify(userInfo));

    userPosts = [
        [10000000, "Personal only",
            "If another users sees this post then a problem has occured as this user has no friends",
            []]
    ];

    localStorage.setItem("userGPosts", JSON.stringify(userPosts));

}