// dashboard.js

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const mobileSidebar = document.getElementById('mobileSidebar');
    const sidebarLinks = document.querySelectorAll('.sidebar nav a');
    const contentArea = document.getElementById('contentArea');
  
    // Toggle Mobile Sidebar
    menuBtn.addEventListener('click', () => {
      mobileSidebar.classList.toggle('hidden');
    });
  
    // Close sidebar when clicking outside
    mobileSidebar.addEventListener('click', (e) => {
      if (e.target === mobileSidebar) {
        mobileSidebar.classList.add('hidden');
      }
    });
  
    // Load content based on navigation
    sidebarLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
  
        // Remove active class from all links
        sidebarLinks.forEach(l => l.classList.remove('active'));
  
        // Add active class to the clicked link
        link.classList.add('active');
  
        // Get the content to load
        const content = link.getAttribute('data-content');
  
        // Update the main content area
        loadContent(content);
  
        // Close mobile sidebar after selection
        mobileSidebar.classList.add('hidden');
      });
    });
  
    // Function to load content
    function loadContent(content) {
      switch(content) {
        case 'dashboard':
          contentArea.innerHTML = `
            <h2>Dashboard Overview</h2>
            <p>Welcome to your dashboard! Here you can see an overview of your activities.</p>
            <!-- Add more dashboard-specific content here -->
          `;
          break;
        case 'profile':
          contentArea.innerHTML = `
            <h2>Your Profile</h2>
            <p>Manage your profile information here.</p>
            <!-- Add profile-specific content here -->
          `;
          break;
        case 'settings':
          contentArea.innerHTML = `
            <h2>Settings</h2>
            <p>Adjust your preferences and settings here.</p>
            <!-- Add settings-specific content here -->
          `;
          break;
        default:
          contentArea.innerHTML = `
            <h2>Welcome</h2>
            <p>Select an option from the sidebar to get started.</p>
          `;
      }
    }
  });
  