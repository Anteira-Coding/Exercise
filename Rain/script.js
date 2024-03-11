for (let i = 0; i < 50; i++) {
	const snowflake = document.createElement("div");
	snowflake.className = "snowflake";
	snowflake.style.width = `${Math.random() * 2 + 1}vmin`;
	snowflake.style.height = snowflake.style.width;
	snowflake.style.left = `${Math.random() * 100}vw`;
	snowflake.style.animationDuration = `${5 + Math.random() * 10}s`;
	document.getElementById("snow-container").appendChild(snowflake);
}