//variables of menu button
var vis = document.getElementById("Menubar");
function menu() {
    vis.className = "row Menuvisible";
}
// opening of menu bar
var menuButton = document.querySelectorAll('.Menu-bar');
for (var i = 0; i < menuButton.length; i++)
    menuButton[i].addEventListener("click", menu, false);

//Resume download
function resume() {
    window.open('resume.pdf');
}
var cv = document.getElementById("download");
cv.addEventListener('click', resume, false);
//contact form navigation using -----hire---- me button present in about section

var HireBtn = document.getElementById("HireBtn");
HireBtn.addEventListener('click', contact, false);
//text of backgroung like Home,Portfolio
var backText = document.getElementById("back-text");
function closeMenu() {
    vis.className = "row Menu";
    document.getElementById("edu-data").style.visibility = "hidden";
    document.getElementById("skill-data").style.visibility = "hidden";
    document.getElementById("about-page").style.top = -1000 + "%";
    backText.classList.toggle('back-items-value-other');
}
function Home() {
    backText.textContent = 'Home';
    closeMenu();
    document.getElementById("main").style.visibility = "visible";
    document.getElementById("about-page").style.visibility = "Hidden";
    document.getElementById("contact-page").style.visibility = "hidden";
    document.getElementById("work").style.visibility = "hidden";
    document.getElementById("certificate").style.visibility = 'hidden';

}
window.addEventListener('load', Home, false);
var homeBtn = document.getElementById("home");
homeBtn.addEventListener('click', Home, false);
//about
function about() {
    backText.textContent = 'About';
    closeMenu();
    document.getElementById("about-page").style.top = 0 + "%";
    skillshow();
    document.getElementById("main").style.visibility = "Hidden";
    document.getElementById("contact-page").style.visibility = "hidden";
    document.getElementById("about-page").style.visibility = "visible";
    document.getElementById("work").style.visibility = "hidden";
    document.getElementById("certificate").style.visibility = 'hidden';

}
var aboutBtn = document.getElementById("about");
var aboutBtn2 = document.getElementById("about2");
aboutBtn.addEventListener('click', about, false);
aboutBtn2.addEventListener('click', about, false);
//Certification portion
function certificates() {
    backText.textContent = 'Certificates';
    document.getElementById("certificate").style.visibility = 'visible';
    document.getElementById("main").style.visibility = "Hidden";
    document.getElementById("contact-page").style.visibility = "hidden";
    document.getElementById("about-page").style.visibility = "hidden";
    document.getElementById("work").style.visibility = "hidden";
    closeMenu();
}
var serviceBtn = document.getElementById("services");
serviceBtn.addEventListener('click', certificates, false);
//work
function work() {
    backText.textContent = 'work';
    closeMenu();
    document.getElementById("main").style.visibility = "Hidden";
    document.getElementById("certificate").style.visibility = 'hidden';
    document.getElementById("contact-page").style.visibility = "hidden";
    document.getElementById("about-page").style.visibility = "hidden";
    document.getElementById("work").style.visibility = "visible";
}
var workBtn = document.getElementById("portfolio");
workBtn.addEventListener('click', work, false);
//contact
function contact() {
    backText.textContent = 'contact';
    closeMenu();
    document.getElementById("main").style.visibility = "Hidden";
    document.getElementById("certificate").style.visibility = 'hidden';
    document.getElementById("about-page").style.visibility = "hidden";
    document.getElementById("contact-page").style.visibility = "visible";
    document.getElementById("work").style.visibility = "hidden";
}
var contactBtn = document.getElementById("contact");
contactBtn.addEventListener('click', contact, false);
//skill and education button hover
function Educationshow() {
    Education.className = "skill";
    skill.className = "Education";
    document.getElementById("edu-data").style.visibility = "visible";
    document.getElementById("skill-data").style.visibility = "hidden";
}
function skillshow() {
    Education.className = "Education";
    skill.className = "skill";
    document.getElementById("edu-data").style.visibility = "hidden";
    document.getElementById("skill-data").style.visibility = "visible";

}
var skill = document.getElementById('skill');
var Education = document.getElementById('Education');
skill.addEventListener('click', skillshow, false);
Education.addEventListener('click', Educationshow, false);


//---------Projects -----------------


var langName = document.querySelectorAll('.languages-name');
function languagesShow(projectName, sNo) {
    if (projectName == 'pepsi') {
        loopStyle();
        langName[1].className = "languages-name languages-name-style " + 1;
        langName[2].className = "languages-name languages-name-style " + 2;
        langName[3].className = "languages-name languages-name-style " + 3;
        langName[5].className = "languages-name languages-name-style " + 5;

    }
    if (projectName == 'SMS') {
        loopStyle();
        langName[0].className = "languages-name languages-name-style " + 0;
        langName[3].className = "languages-name languages-name-style " + 3;
        langName[5].className = "languages-name languages-name-style " + 5;


    }
    if (projectName == 'Fruits') {
        loopStyle();
        langName[1].className = "languages-name languages-name-style " + 1;
        langName[2].className = "languages-name languages-name-style " + 2;
        langName[3].className = "languages-name languages-name-style " + 3;
        langName[5].className = "languages-name languages-name-style " + 5;

    }
    if (projectName == 'Parking') {
        loopStyle();
        langName[1].className = "languages-name languages-name-style " + 1;
        langName[2].className = "languages-name languages-name-style " + 2;
        langName[3].className = "languages-name languages-name-style " + 3;
        langName[4].className = "languages-name languages-name-style " + 4;
        langName[5].className = "languages-name languages-name-style " + 5;
    }
    if (projectName == 'Tik-Tak-Toe') {
        loopStyle();
        langName[1].className = "languages-name languages-name-style " + 1;
        langName[3].className = "languages-name languages-name-style " + 4;
        langName[5].className = "languages-name languages-name-style " + 5;

    }
    if (projectName == 'Netflix') {
        loopStyle();
        langName[1].className = "languages-name languages-name-style " + 1;
        langName[2].className = "languages-name languages-name-style " + 2;
        langName[3].className = "languages-name languages-name-style " + 3;
        langName[5].className = "languages-name languages-name-style " + 5;

    } if (projectName == 'StarBucks') {
        loopStyle();
        langName[1].className = "languages-name languages-name-style " + 1;
        langName[2].className = "languages-name languages-name-style " + 2;
        langName[3].className = "languages-name languages-name-style " + 3;
        langName[5].className = "languages-name languages-name-style " + 5;

    } if (projectName == 'Quote') {
        loopStyle();
        langName[1].className = "languages-name languages-name-style " + 1;
        langName[2].className = "languages-name languages-name-style " + 2;
        langName[3].className = "languages-name languages-name-style " + 3;
        langName[5].className = "languages-name languages-name-style " + 5;

    } if (projectName == 'Amity') {
        loopStyle();
        langName[2].className = "languages-name languages-name-style " + 2;
        langName[3].className = "languages-name languages-name-style " + 3;
        langName[5].className = "languages-name languages-name-style " + 5;

    } if (projectName == 'Documentation') {
        loopStyle();
        langName[3].className = "languages-name languages-name-style " + 3;
        langName[5].className = "languages-name languages-name-style " + 5;

    } if (projectName == 'Nvidia') {
        loopStyle();
        langName[3].className = "languages-name languages-name-style " + 3;
        langName[5].className = "languages-name languages-name-style " + 5;

    } if (projectName == 'Tribute') {
        loopStyle();
        langName[3].className = "languages-name languages-name-style " + 3;
        langName[5].className = "languages-name languages-name-style " + 5;

    }
}
function loopStyle() {
    for (var i = 0; i < langName.length; i++) {
        langName[i].className = 'languages-name ' + i;
    }
}
var projectsVar = document.querySelectorAll('.project');
projectsVar[0].addEventListener("click", function () {
    languagesShow("pepsi", 0)
}, false);

projectsVar[1].addEventListener("click", function () {
    languagesShow("SMS", 1)
}, false);

projectsVar[2].addEventListener("click", function () {
    languagesShow("Fruits", 2)
}, false);

projectsVar[3].addEventListener("click", function () {
    languagesShow("Parking", 3)
}, false);

projectsVar[4].addEventListener("click", function () {
    languagesShow("Tik-Tak-Toe", 4)
}, false);

projectsVar[5].addEventListener("click", function () {
    languagesShow("Netflix", 5)
}, false);

projectsVar[6].addEventListener("click", function () {
    languagesShow("StarBucks", 6)
}, false);

projectsVar[7].addEventListener("click", function () {
    languagesShow("Quote", 7)
}, false);

projectsVar[8].addEventListener("click", function () {
    languagesShow("Amity", 8)
}, false);

projectsVar[9].addEventListener("click", function () {
    languagesShow("Documentation", 9)
}, false);

projectsVar[10].addEventListener("click", function () {
    languagesShow("Nvidia", 10)
}, false);

projectsVar[11].addEventListener("click", function () {
    languagesShow("Tribute", 11)
}, false);