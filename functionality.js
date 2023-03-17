/* DYNAMICALLY ADD THE SAME HEADER TO ALL PAGES (NAVIGATION)
* Note that the index.html file is in a different directory than the other pages.
* Then, the urls for the anchor's href attributes in the nav bar are different 
* for the index and the other pages. 
* Therefore, I conditionally add a prefix to the urls depending on which page I am.
 */
document.getElementById("idHeader").className = "px-5 flex justify-between w-full items-center text-lg"
document.getElementById("idHeader").innerHTML = ' <!--Logo-->' +
    '<div>' +
    '    <a href="' + ((document.URL.includes("index")) ? '' : '../') + 'index.html"><img class="w-40 lg:w-24" src="' + ((document.URL.includes("index")) ? '' : '../') + 'photos/Personal-logo.png" alt="Irina Trocki"></img></a>' +
    '</div>' +
    '<div>' +
    '' +
    '<!--NAVIGATION BAR ON TOP FOR SCREENS SUCH THAT THEIR WIDTH IS MORE THAN 1024px)-->' +
    '<nav class="hidden lg:block flex-row justify-between font-bold space-x-4 ">' +
    '<a href="' + ((document.URL.includes("index")) ? '' : '../') + 'index.html" class="font-thin hover:font-normal">Home</a>' +
    '<a href="' + ((document.URL.includes("index")) ? 'pages/' : '') + 'about-me.html" class="font-thin hover:font-normal">About me</a>' +
    '<a href="' + ((document.URL.includes("index")) ? 'pages/' : '') + 'education.html" class="font-thin hover:font-normal">Education</a>' +
    '<a href="' + ((document.URL.includes("index")) ? 'pages/' : '') + 'employment.html" class="font-thin hover:font-normal">Employment</a>' +
    '<a href="' + ((document.URL.includes("index")) ? 'pages/' : '') + 'hobbies.html" class="font-thin hover:font-normal">Hobbies</a>' +
    '<a href="' + ((document.URL.includes("index")) ? 'pages/' : '') + 'contact-me.html" class="font-thin hover:font-normal">Contact me</a>' +
    '</nav>' +
    '' +
    '<!--SIDEBAR FOR SCREENS SUCH THAT THEIR WIDTH IS LESS THAN 1024px)-->' +
    '<!--Button for opening side bar-->' +
    '<button id="openSideBar" class="lg:hidden focus:outline-none mr-4">' +
    '<img src="' + ((document.URL.includes("index")) ? '' : '../') + 'photos/icons/menu-icon.png" class="hover:bg-cover hover:bg-gray-200" />' +
    '</button>' +
    '' +
    '<!-- Side bar-->' +
    '<nav id="sideBar" class="hidden lg:hidden flex flex-col justify-start space-y-10 w-1/3 font-bold ' +
    'bg-white border-l-2 border-gray-200 p-8 pt-16 h-screen absolute z-50 inset-y-0 right-0 transition-all duration-200' +
    'ease-in overflow-scroll">' +
    '' +
    '<!--Button for closing side bar-->' +
    '<button id="closeSideBar" class="lg:hidden focus:outline-none">' +
    '<img class="hover:bg-cover hover:bg-gray-200" src="' + ((document.URL.includes("index")) ? '' : '../') + 'photos/icons/menu-icon.png" /></button>' +
    '<a href="' + ((document.URL.includes("index")) ? '' : '../') + 'index.html" class="font-thin hover:font-normal text-base">Home</a>' +
    '<a href="' + ((document.URL.includes("index")) ? 'pages/' : '') + 'about-me.html" class="font-thin hover:font-normal text-base">About me</a>' +
    '<a href="' + ((document.URL.includes("index")) ? 'pages/' : '') + 'education.html" class="font-thin hover:font-normal text-base">Education</a>' +
    '<a href="' + ((document.URL.includes("index")) ? 'pages/' : '') + 'employment.html" class="font-thin hover:font-normal text-base">Employment</a>' +
    '<a href="' + ((document.URL.includes("index")) ? 'pages/' : '') + 'hobbies.html" class="font-thin hover:font-normal text-base">Hobbies</a>' +
    '<a href="' + ((document.URL.includes("index")) ? 'pages/' : '') + 'contact-me.html" class="font-thin hover:font-normal text-base">Contact me</a>' +
    '</nav>' +
    '</div>';

/* 
* SIDE BAR FUNCTIONALITY:
* Whenever the page is opened in a small device (max width 1024px), 
* the navegation options are displayed in a side bar
* The functionality for opening and closing the side bar is below.
* Whenever the menu button is clicked, the sidebar is opened or closed
* by dinamically changing its class attribute
*/
document.getElementById("openSideBar").addEventListener("click", manageSideBar);
document.getElementById("closeSideBar").addEventListener("click", manageSideBar);

let sideBarOpened = false;

function manageSideBar() {
    let openButton = document.getElementById("openSideBar");
    let sideBar = document.getElementById("sideBar");
    if (sideBarOpened) {
        unhide(openButton);
        hide(sideBar);
        sideBarOpened = false;
    } else {
        hide(openButton);
        unhide(sideBar);
        sideBarOpened = true;
    }
    console.log(sideBarOpened)
}
function hide(element) {
    element.className += ' hidden ';
}
function unhide(element) {
    element.classList.remove('hidden');
}

/* DYNAMICALLY ADD THE SAME FOOTER TO ALL PAGES (SOCIAL MEDIA LINKS)
* Similar idea to the header
*/
document.getElementById("idFooter").className = "bg-gray-300 items-center fixed z-0 inset-x-0 bottom-0 py-2"
document.getElementById("idFooter").innerHTML = '<!--FootBar with social media links-->' +
    '<div class="flex justify-center space-x-6">' +
    '<a class="hover:bg-gray-200 rounded-md" href="https://www.linkedin.com/in/irina-trocki" target="_blank">' +
    '<img src="' + ((document.URL.includes("index")) ? '' : '../') + 'photos/icons/linkedin.png" /></a>' +
    '<a class="hover:bg-gray-200 rounded-md" href="https://github.com/iritrocki" target="_blank">' +
    '<img src="' + ((document.URL.includes("index")) ? '' : '../') + 'photos/icons/github.png" /></a>' +
    '<a class="hover:bg-gray-200 rounded-md" href="https://www.instagram.com/iritrocki/" target="_blank">' +
    '<img src="' + ((document.URL.includes("index")) ? '' : '../') + 'photos/icons/instagram.png" /></a>' +
    '<a class="hover:bg-gray-200 rounded-md" href="https://www.facebook.com/irinatrocki/" target="_blank">' +
    '<img src="' + ((document.URL.includes("index")) ? '' : '../') + 'photos/icons/facebook.png" /></a>' +
    '</div>';
