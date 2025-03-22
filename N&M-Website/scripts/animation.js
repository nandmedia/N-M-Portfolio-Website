document.addEventListener("mousemove", (e) => {
    const eye = document.querySelector(".eye");
    if (!eye) return;
  
    // Get the bounding rectangle of the eye element
    const rect = eye.getBoundingClientRect();
    const eyeX = rect.left + rect.width / 2;
    const eyeY = rect.top + rect.height / 2;
    
    // Calculate the angle between the eye center and the mouse position
    const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX);
    
    // Convert the angle from radians to degrees
    const degree = angle * (180 / Math.PI);
    
    // Rotate the eye element
    eye.style.transform = `rotate(${degree}deg)`;
  });
  function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
  }
  