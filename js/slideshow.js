let slideIndex = 1;
let subTeamMembers = [];

fetch('../assets/team/members.json')
.then((response) => response.json())
.then(json => {
    let members = json['members'];
    let positions = [];

    let teamName = $("#title").text().substring(0, $("#title").text().indexOf(" "));

    switch(teamName) {
        case "Mentors":
            positions.push("Lead Mentor")
            positions.push("Technical Mentor")
            break;
        case "Control":
            positions.push("Control Co-Lead");
            positions.push("Control Member");
            break;
        case "Mechanical":
            positions.push("Mechanical Lead");
            positions.push("Mechanical Member");
            positions.push("CPO");
            positions.push("Safety Lead");
            break;
        case "Design":
            positions.push("Design Co-Lead");
            break;
        case "Business":
            positions.push("Business Lead");
            break;
        case "Marketing":
            positions.push("Marketing Lead");
            break;
        case "Outreach":
            positions.push("Outreach Lead");
            break;                  
    } 

    for (let member of members) {
        for (let pos of positions) {
            if (member['position'].toLowerCase().includes(pos.toLowerCase())) {
                subTeamMembers.push(member['position']);
                let fileName = member['name'].substring(0, member['name'].indexOf(" ")) + member['name'].substring(member['name'].indexOf(" ") + 1, member['name'].indexOf(" ") + 2);
                $(".content").append("<img class='slide' src='../assets/member-avatars/" + fileName.toLowerCase() + ".jpg'>");
            }
        }
    }

    $(".content").append("<h1 id='position'></h1>");
    
    showDivs(slideIndex);
});

function plusDivs(n) {
    slideIndex += n;
    showDivs(slideIndex);
}

function showDivs(n) {
    let slides = $(".slide");

    if (n > slides.length) {
        slideIndex = 1
    } else if (n < 1) {
        slideIndex = slides.length;
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }

    $("#position").text(subTeamMembers[slideIndex - 1]);
    slides[slideIndex-1].style.display = "block";
}

