// open link in new window, unless the link is in the top nav bar or to a project
const a = document.getElementsByTagName('a');
for (const l of a) {
    if (!l.offsetParent.className.match(/^greedy-nav|archive__item$/) 
        || l.innerHTML == "Resume") { // exception of resume in nav bar
        l.setAttribute('target', '_blank');
    }
}
