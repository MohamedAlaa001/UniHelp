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

// handle dropdown fade in & out to ensure transition
export const dropdownHandleShow = () => {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('show.bs.dropdown', () => {
      const menuElement = Array.from(dropdown.children).find((el) => {
        return el.classList.contains('dropdown-menu');
      });

      let i = 0;
      const timer = setInterval(() => {
        i++;
        // total time = css transition time + 3 (millseconds) * 50 (iterations)
        if (i === 50) {
          menuElement.classList.add('active');
          clearInterval(timer);
        }
      }, 3);
    });
    dropdown.addEventListener('hide.bs.dropdown', () => {
      const menuElement = Array.from(dropdown.children).find((el) => {
        return el.classList.contains('dropdown-menu');
      });
      menuElement.classList.remove('active');
    });
  });
};
