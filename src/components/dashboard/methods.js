// Sidebar Toggle
export const sidebarHandleClick = () => {
  const sidebar = document.querySelector('.sidebar-toggle');
  sidebar.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    document.querySelector('#sidebar').classList.toggle('shrinked');
    document.querySelector('.page-content').classList.toggle('active');

    if (sidebar.classList.contains('active')) {
      document
        .querySelector('.navbar-brand .brand-sm')
        .classList.add('visible');
      document
        .querySelector('.navbar-brand .brand-big')
        .classList.remove('visible');
      sidebar.firstElementChild.setAttribute('class', 'fa fa-long-arrow-right');
    } else {
      document
        .querySelector('.navbar-brand .brand-sm')
        .classList.remove('visible');
      document
        .querySelector('.navbar-brand .brand-big')
        .classList.add('visible');
      sidebar.firstElementChild.setAttribute('class', 'fa fa-long-arrow-left');
    }
  });
};

// Navbar dropdown exit on document click
document.addEventListener('click', () => {
  let myDropdown = document.querySelector(
    'nav.navbar .dropdown-menu.collapse.show'
  );
  let bsDropdown = bootstrap.Collapse.getInstance(myDropdown);

  console.log(bsDropdown);
});
