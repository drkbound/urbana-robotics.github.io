let slideIndex = 1;

fetch('../assets/team/members.json')
.then((response) => response.json())
.then(json => {
    let members = json['members'];
    for (let member of members) {
        let teamName = $("#title").text().substring(0, $("#title").text().indexOf(" "));
        if (member['position'].includes(teamName)) {
            let filename = member['name'].substring(0, member['name'].indexOf(" ")) + member['name'].substring(member['name'].indexOf(" ") + 1, member['name'].indexOf(" ") + 2);
            $(".content").append("<img class='slide' src='../assets/member-avatars/" + filename + ".jpg'>");
        }
    }
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

    slides[slideIndex-1].style.display = "block";
}


