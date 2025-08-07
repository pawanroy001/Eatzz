const track = document.querySelector('.carousel-track');
const nextBtn = document.querySelector('.carousel-btn.next');
const prevBtn = document.querySelector('.carousel-btn.prev');

nextBtn.addEventListener('click', () => {
  track.scrollLeft += 300; // scrolls to next
});

prevBtn.addEventListener('click', () => {
  track.scrollLeft -= 300; // scrolls to previous
});


// const requestBtn = document.getElementById("requestBtn");
// const modal = document.getElementById("requestModal");
// const closeModal = document.getElementById("closeModal");

// requestBtn.onclick = () => {
//   modal.style.display = "flex";
//   document.body.style.overflow = "hidden"; // Stop page scroll
// };

// closeModal.onclick = () => {
//   modal.style.display = "none";
//   document.body.style.overflow = "auto"; // Restore scroll
// };

// window.onclick = (e) => {
//   if (e.target === modal) {
//     modal.style.display = "none";
//     document.body.style.overflow = "auto";
//   }
// };
const requestBtn = document.getElementById("requestBtn");
const modal = document.getElementById("requestModal");
const closeModal = document.getElementById("closeModal");
const submitRequest = document.getElementById("submitRequest");
const dishInput = document.getElementById("dishInput");

// Open Modal
requestBtn.onclick = () => {
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
};

// Close Modal (on X)
closeModal.onclick = () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
  dishInput.value = ""; // reset field
};

// Submit Button Click
submitRequest.onclick = () => {
  const value = dishInput.value.trim();

  if (value !== "") {
    // Close modal and reset
    modal.style.display = "none";
    document.body.style.overflow = "auto";
    alert("Dish request submitted: " + value); // Optional feedback
    dishInput.value = "";
  } else {
    // Optional: shake input or show error
    alert("Please enter a dish name!");
  }
};

// Click outside modal
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
    dishInput.value = "";
  }
};



document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("contactName").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const message = document.getElementById("contactMessage").value.trim();

  if (name && email && message) {
    alert("Thanks for reaching out! We'll get back to you soon.");
    this.reset();
  } else {
    alert("Please fill out all fields.");
  }
});



// document.getElementById("contactForm").addEventListener("submit", function (e) {
//   e.preventDefault(); // Prevents the page from reloading

//   const name = document.getElementById("contactName").value.trim();
//   const email = document.getElementById("contactEmail").value.trim();
//   const message = document.getElementById("contactMessage").value.trim();

//   if (name && email && message) {
//     alert("✅ Data submitted successfully!");
//     this.reset(); // Clears the form
//   } else {
//     alert("⚠️ Please fill in all fields before submitting.");
//   }
// });



document.addEventListener('DOMContentLoaded', function () {
  const playBtn = document.getElementById('playButton');
  const placeholderImg = document.getElementById('placeholderImage');
  const video = document.getElementById('foodVideo');
  const closeBtn = document.getElementById('closeBtn');

  playBtn.addEventListener('click', () => {
    placeholderImg.style.display = 'none';
    playBtn.style.display = 'none';
    video.style.display = 'block';
    closeBtn.style.display = 'block';
    video.play();
  });

  closeBtn.addEventListener('click', () => {
    video.pause();
    video.currentTime = 0;
    placeholderImg.style.display = 'block';
    playBtn.style.display = 'block';
    video.style.display = 'none';
    closeBtn.style.display = 'none';
  });
});
