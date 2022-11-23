import { SidebarElement, SidebarService } from 'sidebarjs';
import 'sidebarjs/lib/sidebarjs.css';

// Create sidebarjs instance
const sidebarjs = new SidebarElement({
    /* 
     * All available options:
     * https://github.com/SidebarJS/sidebarjs#options 
     */
});

// toggle sidebarjs on click
document
    .querySelector('class="hamburger_icon"')
    .addEventListener('click', () => {
        sidebarjs.toggle();
    });