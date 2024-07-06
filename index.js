/* Start Navbar */

document.getElementById('toggle-button').addEventListener('click', function(event) {
    var navbarLinks = document.getElementById('navbar-links');
    var toggleButton = document.getElementById('toggle-button');
    navbarLinks.classList.toggle('active');
    toggleButton.classList.toggle('active');
    event.stopPropagation();
});

// إغلاق القائمة عند النقر على أي رابط
var navLinks = document.querySelectorAll('.navbar-links a');
navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        var navbarLinks = document.getElementById('navbar-links');
        var toggleButton = document.getElementById('toggle-button');
        navbarLinks.classList.remove('active');
        toggleButton.classList.remove('active');
    });
});
// إغلاق القائمة عند النقر على القائمة نفسها إذا كانت مفتوحة
document.getElementById('navbar-links').addEventListener('click', function(event) {
    var navbarLinks = document.getElementById('navbar-links');
    var toggleButton = document.getElementById('toggle-button');
    if (navbarLinks.classList.contains('active')) {
        navbarLinks.classList.remove('active');
        toggleButton.classList.remove('active');
    }
    event.stopPropagation();
});

// إغلاق القائمة عند النقر في أي مكان آخر على الصفحة
document.addEventListener('click', function() {
    var navbarLinks = document.getElementById('navbar-links');
    var toggleButton = document.getElementById('toggle-button');
    navbarLinks.classList.remove('active');
    toggleButton.classList.remove('active');
});

// منع إغلاق القائمة عند النقر على القائمة نفسها
document.getElementById('navbar-links').addEventListener('click', function(event) {
    event.stopPropagation();
});


/* End Navbar */
