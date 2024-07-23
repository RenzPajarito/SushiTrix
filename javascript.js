const menuToggle = document.querySelector('.toggle');
	const nav = document.querySelector('.nav');
	menuToggle.onclick  = function() {
		nav.classList.toggle('active');
	}

function ordernow(){
	window.location.href = 'orderpage.html';
}

window.addEventListener('scroll', function(){
	var scroll = document.querySelector('.scrollUp');
	scroll.classList.toggle("active", window.scrollY > 570)
})

window.addEventListener("scroll", function() {
	var header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 100);
})