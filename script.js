const css = document.querySelector("h5");
const colour1 = document.querySelector(".colour1");
const colour2 = document.querySelector(".colour2");
const body = document.getElementById('gradient');

function setGradient() {
	body.style.background =
	"linear-gradient(to right, "
	+colour1.value
	+", "
	+colour2.value
	+")";

	css.textContent = body.style.background + ";";
}

colour1.addEventListener("input", setGradient);

colour2.addEventListener("input", setGradient);

