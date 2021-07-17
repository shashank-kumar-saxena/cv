//variables of menu button
var vis=document.getElementById("Menubar");
function menu()
{
    vis.className="row Menuvisible";
}
// opening of menu bar
var menuButton=document.querySelectorAll('.Menu-bar');
for(var i=0;i<menuButton.length;i++)
menuButton[i].addEventListener("click",menu,false)
//Resume download
function resume()
{
    window.open('resume.pdf');
}
var cv=document.getElementById("download");
cv.addEventListener('click',resume,false);
//text of backgroung like Home,Portfolio
var backText=document.getElementById("back-text");
function closeMenu()
{
    vis.className="row Menu";
    document.getElementById("edu-data").style.visibility="hidden";
    document.getElementById("skill-data").style.visibility="hidden";
    document.getElementById("about-page").style.top=-1000 +"%";
    backText.classList.toggle('back-items-value-other');
}
function Home()
{
    backText.textContent='Home';
    closeMenu();
    document.getElementById("main").style.visibility="visible";
    document.getElementById("about-page").style.visibility="Hidden";
    document.getElementById("contact-page").style.visibility="hidden";

}
window.addEventListener('load',contact,false);
var homeBtn=document.getElementById("home");
homeBtn.addEventListener('click',Home,false);
//about
function about()
{
    backText.textContent='About';
    closeMenu();
    document.getElementById("about-page").style.top=0 +"%";
    skillshow();
    document.getElementById("main").style.visibility="Hidden";
    document.getElementById("contact-page").style.visibility="hidden";
    document.getElementById("about-page").style.visibility="visible";
}
var aboutBtn=document.getElementById("about");
var aboutBtn2=document.getElementById("about2");
aboutBtn.addEventListener('click',about,false);
aboutBtn2.addEventListener('click',about,false);
//services
function service()
{
    backText.textContent='service';
    closeMenu();
}
var serviceBtn=document.getElementById("services");
serviceBtn.addEventListener('click',service,false);
//portfolio
function portfolio()
{
    backText.textContent='portfolio';
    closeMenu();
}
var protfolioBtn=document.getElementById("portfolio");
protfolioBtn.addEventListener('click',portfolio,false);
//contact
function contact()
{
    backText.textContent='contact';
    closeMenu();
    document.getElementById("main").style.visibility="Hidden";
    document.getElementById("about-page").style.visibility="hidden";
    document.getElementById("contact-page").style.visibility="visible";
}
var contactBtn=document.getElementById("contact");
contactBtn.addEventListener('click',contact,false);
//skill and education button hover
function Educationshow()
{
    Education.className="skill";
    skill.className="Education";
    document.getElementById("edu-data").style.visibility="visible";
    document.getElementById("skill-data").style.visibility="hidden";
}
function skillshow()
{
    Education.className="Education";
    skill.className="skill";
    document.getElementById("edu-data").style.visibility="hidden";
    document.getElementById("skill-data").style.visibility="visible";

}
var skill=document.getElementById('skill');
var Education=document.getElementById('Education');
skill.addEventListener('click',skillshow,false);
Education.addEventListener('click',Educationshow,false);
