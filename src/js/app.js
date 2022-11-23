
// Create sidebarjs instance
const sidebarjs = new SidebarElement({
    /* 
     * All available options:
     * https://github.com/SidebarJS/sidebarjs#options 
     */
});

// toggle sidebarjs on click
document
    .querySelector('.js--sidebarjs-toggle')
    .addEventListener('click', () => {
        sidebarjs.toggle();
    });