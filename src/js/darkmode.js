document.addEventListener("DOMContentLoaded", () => {
	const observer = new MutationObserver((mutations, obs) => {
		const btnDarkMode = document.getElementById("toggleDarkMode");
		if (btnDarkMode) {
			const header = document.querySelector(
				"header.header-container .__navbar"
			);
			const sections = document.querySelectorAll("section");
			const textElements = document.querySelectorAll(
				"h1, h2, h3, p, small, .__subtitle, .__text, .__card-title, .__card-text"
			);
			const links = document.querySelectorAll("a.__item-link");
			const icons = document.querySelectorAll(
				".__card__tech-list .__icon-size, .skills-slider-item .__icon-color"
			);
			const experienceItems = document.querySelectorAll(".__experience-item");
			const portfolioArrows = document.querySelectorAll(".__portfolio-arrow");
			const downloadCvButton = document.querySelector(".__btn-download");

			btnDarkMode.addEventListener("click", () => {
				const isDarkMode = document.body.classList.contains("dark-mode");
				const backgroundColor = isDarkMode ? "#121212" : "";
				const textColor = isDarkMode ? "#FFFFFF" : "";
				const cardBackgroundColor = isDarkMode ? "#1E1E1E" : "";
				const arrowBgColor = isDarkMode ? "#FFFFFF" : "";
				const arrowTextColor = isDarkMode ? "#000000" : "";
				const downloadBtnBgColor = isDarkMode ? "#FFFFFF" : "";
				const downloadBtnTextColor = isDarkMode ? "#000000" : "";

				if (header) {
					header.style.backgroundColor = backgroundColor;
				}

				sections.forEach((section) => {
					section.style.backgroundColor = backgroundColor;
				});

				experienceItems.forEach((item) => {
					item.style.backgroundColor = cardBackgroundColor;
				});

				portfolioArrows.forEach((arrow) => {
					arrow.style.backgroundColor = arrowBgColor;
					arrow.style.color = arrowTextColor;
				});

				if (downloadCvButton) {
					downloadCvButton.style.backgroundColor = downloadBtnBgColor;
					downloadCvButton.style.color = downloadBtnTextColor;
				}

				textElements.forEach((el) => (el.style.color = textColor));
				links.forEach((link) => (link.style.color = textColor));
				icons.forEach((icon) => {
					isDarkMode
						? icon.classList.add("dark-icon")
						: icon.classList.remove("dark-icon");
					icon.style.color = isDarkMode ? "#FFFFFF" : "";
				});
			});
			obs.disconnect();
		}
	});
	observer.observe(document.body, { childList: true, subtree: true });
});
