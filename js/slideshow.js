fetch('../assets/team/members.json')
.then((response) => response.json())
.then(json => {
    let members = json['members'];
    for (let member of members) {
        if (member['position'].includes("Control")) {
            $(".content").append("<img class='slide' src='../assets/team/example-icon.png'>");
            console.log(member['name']);
        }
    }
});

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    slideIndex += n;
    showDivs(slideIndex);
}

function showDivs(n) {
    let slides = $(".slide");
    console.log(slides);

    if (n > slides.length) {
        slideIndex = 1
    } else if (n < 1) {
        slideIndex = slides.length;
    }

    for (let slide of slides) {
        console.log(slide);
        slide.style.display = "none";
    }

    // slides[slideIndex-1].style.display = "block";
}



