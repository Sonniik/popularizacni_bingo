const setToday = (today) => {
	let date_text =
		String(today.getDate()) +
		". " +
		String(today.getMonth() + 1) +
		". " +
		String(today.getFullYear());

	document.getElementById("date").innerText = date_text;
};

const setLocalStorage = (checkname) => {
	const checked = Array(16).fill(false);
		localStorage.removeItem(checkname); //removing old checked array
		localStorage.setItem(checkname, JSON.stringify(checked)); //adding new checked array
};

const getCookies = (today,checkname) => {
	// random UUID seed stored in a cookie, that expires on midnight
	let device_unique_seed = "";

	// get the UUID from cookie
	const parts = document.cookie.split("; ");

	//find unique seed in cookie
	device_unique_seed = parts
		.find((row) => row.startsWith("bingo_device_unique_seed="))
		?.split("=")[1];

	// if no cookie is found (none created / expired), create one
	if (!device_unique_seed) {

		device_unique_seed = crypto.randomUUID();
		let midnight = new Date(
			today.getFullYear(),
			today.getMonth(),
			today.getDate(),
			23,
			59,
			59
		);
		let expires = "; expires=" + midnight.toGMTString();
		document.cookie =
			"bingo_device_unique_seed=" +
			device_unique_seed +
			expires +
			"; path=/";
	}

	//parse array from localStorage
	const checked = JSON.parse(localStorage.getItem(checkname));
	
	return [device_unique_seed, checked];
};

const shuffleArray = (device_unique_seed,config) => {
	//shuffle
	let random_gen = new Math.seedrandom(device_unique_seed);
	const dict = config.dict;

	for (i = 0; i < dict.length; ++i) {
		var swap_index = Math.floor(random_gen.quick() * dict.length);
		[dict[swap_index], dict[i]] = [dict[i], dict[swap_index]];
	}
};

const check_win = (checked) => {
	//columns
	for (let x = 0; x < config.size; x++) {
		let column_full = true;
		for (let y = 0; y < config.size; y++) {
			if (!checked[y * config.size + x]) {
				column_full = false;
			}
		}
		if (column_full) {
			win();
			return;
		}
	}
	//rows
	for (let y = 0; y < config.size; y++) {
		row_full = true;
		for (let x = 0; x < config.size; x++) {
			if (!checked[y * config.size + x]) {
				row_full = false;
			}
		}
		if (row_full) {
			win();
			return;
		}
	}

	//diagonal
	let diagonal = true;
	for (let i = 0; i < config.size; i++) {
		let x = i; let y = i;
		if(!checked[y * config.size + x]) diagonal = false;
	}

	if (diagonal) {
		win();
		return;
	}

	diagonal = true;
	for (let i = 0; i < config.size; i++) {
		let x = config.size-i; let y = i;
		if(!checked[y * config.size + x]) diagonal = false;
	}

	if (diagonal) {
		win();
		return;
	}
};

const applyCheckedStyle = (cell, check) => {
	if (check && !cell.classList.contains("checked")) {
		cell.classList.add("checked");
	} else if (!check && cell.classList.contains("checked")) {
		cell.classList.remove("checked");
	}
}

const onClickCell = (cell, index, checked) => {
	cell.onclick = function () {
		checked[index] = !checked[index];
		applyCheckedStyle(this, checked[index]);
		localStorage.setItem(checkname, JSON.stringify(checked)); //set new value for squares
		checkWin(index, checked);
	};
};

const mainLoop = () => {

	// get board elemtn
	let board = document.getElementById("board");

	// set date
	let today = new Date();
	setToday(today);

		// generate or get ID for device
		let [device_unique_seed, checked] = getCookies(today,checkname);


	// check valid size config
	if (config.size**2 > config.dict.length) {
		console.error("Grid size too large, not enought dictionary items.")
		board.innerHTML = "<b>Developer of this app is stupid, check logs.</b>";
		return;
	}

	//clear board
	board.textContent = '';

	// generate squares to be filled
	for (let i = 0; i < config.size**2; i++)
		board.insertAdjacentHTML("beforeend", '<div class="square"><div></div></div>');

	// set board size
	board.style.setProperty("grid-template-rows", "repeat("+config.size+", 1fr)");
	board.style.setProperty("grid-template-columns", "repeat("+config.size+", 1fr)");

	// get squares
	let squares = document.getElementsByClassName("square");
	squares = [...squares];

	// fill text and attach onClick
	squares.forEach((cell) => {
		let index = squares.indexOf(cell);
		let random_select = new Math.seedrandom(device_unique_seed.slice(0, 2)+index);
		let selected = random_select.quick() * config.dict[index].length
		cell.children[0].innerText = config.dict[index][Math.floor(selected)];
		applyCheckedStyle(cell, checked[index]);
		onClickCell(cell, index, checked);
	});
};

const applySelectedStyle = (cell,buttons) => {
	buttons.forEach((button) => {
		if(button.classList.contains("selected")) {
		button.classList.remove("selected");
		}
	});
	cell.classList.add("selected");
}

const onClickButton = (cell, index, buttons) => {
	// set date
	let today = new Date();
	setToday(today);
	cell.onclick = function () {
		 config = bingotables[index].config;
		 checkname = bingotables[index].checkname;
		 applySelectedStyle(cell,buttons)
		 mainLoop();
	};
};

const generateHeader = () => {

	let config = {};
	let checkname = "";

	// set date
	let today = new Date();
	setToday(today);

	// if new cookie needs to be generated, clear local storage
	if(!document.cookie) {
		localStorage.clear();
	};

	// prepare buttons
	for (let j = 0; j < bingotables.length; j++)
		buttonboard.insertAdjacentHTML("beforeend", '<div class="button"><div></div></div>');

	buttonboard.style.setProperty("grid-template-rows", "repeat("+1+", 1fr)");
	buttonboard.style.setProperty("grid-template-columns", "repeat("+bingotables.length+", 1fr)");

	// get buttons
	let buttons = document.getElementsByClassName("button");
	buttons = [...buttons];

	// fill text and attach onClick
	buttons.forEach((cell) => {
		let index = buttons.indexOf(cell);
		cell.children[0].innerText = bingotables[index].name;
		checkname = bingotables[index].checkname;
		config = bingotables[index].config;
		// generate or get ID for device
		let [device_unique_seed, checked] = getCookies(today,checkname);
		// shuffle dict array for uniq bingo
		shuffleArray(device_unique_seed,config);
		if(!JSON.parse(localStorage.getItem(checkname)))
			setLocalStorage(bingotables[index].checkname);
		onClickButton(cell, index, buttons);
	});
};

generateHeader();
