  const sidebar = document.getElementById("sidebar");
  const mainContent = document.getElementById("main-content");

  function openSidebar() {
    sidebar.classList.remove("-translate-x-full");
    mainContent.classList.add("md:ml-[250px]");
  }

  function closeSidebar() {
    sidebar.classList.add("-translate-x-full");
    mainContent.classList.remove("md:ml-[250px]");
  }