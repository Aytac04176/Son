document.getElementById("form").addEventListener("submit", function (event) {
	event.preventDefault();
	showSuccessPopup();
});

function showSuccessPopup() {
	const popup = document.createElement("div");
	popup.className = "success-popup";
	popup.textContent = "Sifariş uğurla göndərildi. Təşəkkür edirik!";
	document.body.appendChild(popup);

	popup.style.display = "block";

	setTimeout(() => {
		popup.style.display = "none";
		document.body.removeChild(popup);
	}, 3000);
}
