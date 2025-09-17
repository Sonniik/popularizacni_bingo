const skola = {
	size: 2,
	dict: [
		["Zvoní uprostřed programu"],
		["Někdo se směje a nikdo neví, čemu"],
		["Kdokoliv zdobrovolňuje spolužáka"],
	]
};

const verejnost = {
	size: 3,
	dict: [
		["\"A jezdíte i do škol?\"","\"A jezdíte i do školek?\""],
		["Kdokoliv zdobrovolňuje kamaráda"],
		["Publikum je (téměř) prázdné","Plné hlediště"],
		["Pohoda na stánku","Hlouček davu u stánku"],
		["\"Tohle je velmi příjemná akce...\""],
		["\"No já bych vám věřil všechno.\""],
		["Máme vlastní stan"],
		["\"Dáváte razítka?\""],
		["Kdokoliv chce výklad od konce","Kdokoliv neslyšel začátek"],
		["Kdokoliv vybízí nesmělé lidi u stánku"]
	],
};

const ostatni = {
	size: 3,
	dict: [
		["\"Vy máte věcí!\"","\"Vy toho máte!\"","\"To všechno potřebujete?\""],
		["Druhý performer se směje"],
		["Zapomenutý vtip, který fungoval"],
		["Nikdo nechce být dobrovolník","Les dobrovolných rukou"],
		["\"To bylo rychlé...\""],
		["Zapomenutý rollup", "Máme rollup s sebou"],
		["\"A co děláte s tímhle?\"","\"A k čemu je tohle?\""],
		["\"Máte letáček?\"","\"Dáte mi kontakt?\""],
		["Kdokoliv pomáhá nosit"],
		["Přespání","Cesta brzo ráno"],
		["Jede se dvěma auty","Kdokoliv jede hromadkou","Kdokoliv je už na místě"],
		["Kdokoliv potřebuje kafe"],
		["Kdokoliv křičí \"BINGO!\""],
	]
};


const skola_full_dict = skola.dict.concat(ostatni.dict);

const skola_full = {
	size: 3,
	dict: skola_full_dict
};

const verejnost_full_dict = verejnost.dict.concat(ostatni.dict);

const verejnost_full = {
	size: 4,
	dict: verejnost_full_dict
};

verejnost_full.dict.concat(verejnost.dict,ostatni.dict);

const bingotables = [
	{
		name: "Škola",
		config: skola_full,
		checkname: "skola"
	},
	{
		name: "Pro veřejnost",
		config: verejnost_full,
		checkname: "verejnost"
	},
	{
		name: "Ostatní",
		config: ostatni,
		checkname: "ostatni"
	}
];


