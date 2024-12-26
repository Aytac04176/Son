const burgerBtn = document.getElementById("burger-menu");
const menu = document.getElementById("menu");

burgerBtn.addEventListener("click", function (e) {
	if (menu.classList.contains("open-menu")) {
		menu.classList.remove("open-menu");
	} else {
		menu.classList.add("open-menu");
	}
});

window.addEventListener("resize", (event) => {
	if (
		event.currentTarget.innerWidth > 700 &&
		menu.classList.contains("open-menu")
	) {
		menu.classList.remove("open-menu");
	}
});

document.addEventListener("DOMContentLoaded", () => {
	const logo = document.querySelector(".logo");
	const text = logo.textContent; 
	logo.textContent = "";
	text.split("").forEach((letter, index) => {
		const span = document.createElement("span");
		span.textContent = letter;
		span.style.opacity = 0;
		span.style.display = "inline-block";
		span.style.transform = "translateX(100px)";
		span.style.animation = `letterFadeIn 1s ease forwards`;
		span.style.animationDelay = `${index * 0.1}s`;
		logo.appendChild(span);
	});
});

document.addEventListener("DOMContentLoaded", async () => {
	const menuItems = document.querySelector(".menu-items");
	if (window.location.pathname == "/%C5%9Firniyyatlar.html") {
		const response = await fetch(
			"https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert",
		);
		const data = await response.json();
		data.meals.forEach((meal) => {
			const menuItem = document.createElement("div");
			menuItem.classList.add("menu-item");

			menuItem.innerHTML = `
		<img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
		<div class="details">
		<h2>${meal.strMeal}</h2>
		<span class="price">8 ₼</span>
		</div>
		`;
			menuItems.appendChild(menuItem);
		});
	}

	const menuItemLiist = document.querySelectorAll(".menu-item");
	menuItemLiist.forEach((item, index) => {
		const delay = index * 0.1;

		if (index % 2 === 0) {
			item.style.animation = `fadeInLeft 1s ease ${delay}s forwards`;
		} else {
			item.style.animation = `fadeInRight 1s ease ${delay}s forwards`;
		}
	});
});
