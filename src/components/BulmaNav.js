function BulmaNav({ currentPage, handlePageChange }) {
  return (
  <nav class="navbar" role="navigation" aria-label="main navigation">


  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" onClick={() => handlePageChange('About')}>
        About
      </a>



      <a class="navbar-item" onClick={() => handlePageChange('Portfolio')}>
        Portfolio
      </a>
      <a class="navbar-item" onClick={() => handlePageChange('Contact')}>
        Contact
      </a>


    </div>
  </div>
</nav>
  );
}

export default BulmaNav;
