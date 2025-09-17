const skola = {
	size: 2,
	dict: [
		["Zvoní uprostřed programu"],
		["Někdo se směje a nikdo neví, čemu"],
		["Kdokoliv zdobrovolňuje spolužáka"],
		["\"To si můžeme nechat?\""],
		["Kdokoliv nadšeně ukazuje výrobek","Zapomenutý výrobek"],
		["Učitelé vyrábí taky"],
		["Omotávač","Ochutnávač baterek/magnetů","Destruktivní jedinec"],
		["Seriozní odpověď na absurdní otázku"],
		["Učebna v přízemí","Učebna po schodech nahoru","V učebně nejdou přesunout lavice","Učebna má stupínek"],
		["Temníme sami","Učebna má temnění"],
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
		["Kdokoliv chce výklad od konce","Kdokoliv neslyšel začátek","Kdokoliv se vrací na stánek","Kdokoliv přivede kamaráda"],
		["Rodiče vyrábí taky"],
		["Kdokoliv zůstal na všechna vystoupení"],
		["Kdokoliv vybízí nesmělé lidi u stánku"],
	],
};

const ostatni = {
	size: 5,
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
		["Auto je nacpané k prasknutí"],
		["Hodila by se kolečka pod bednu"],
		["Kdokoliv potřebuje kafe"],
		["\"Které pití je moje?\"","\"Co můžu sníst?\"","\"Kde máme svačinu?\""],
		["Cokoliv se tahá z bedny během show","\"Kam jsem si dal..?\"","Pozdě zapnutá rychlovarka","Náhodný fun fact"],
		["Plyšák ve vystoupení"],
		["\"A co by se stalo, kdyby..?\""],
		["Kdokoliv fotí","\"Můžu fotit?\""],
		["Neúmyslný dvojsmysl"],
		["Pochvala od účastníka akce","Pochvala od organizátora"],
		["\"To nacítíme\""],
		["Kdokoliv se chytil na niche vtip"],
		["Brm, brm","Žuch","Kdokoliv působí vypnutě","Rána, ale ne od nás"],
		["Kdokoliv má \"BINGO!\""],
	]
};


const skola_full_dict = skola.dict.concat(ostatni.dict);

const skola_full = {
	size: 5,
	dict: skola_full_dict
};

const verejnost_full_dict = verejnost.dict.concat(ostatni.dict);

const verejnost_full = {
	size: 5,
	dict: verejnost_full_dict
};

const bingotables = [
	{
		name: "Škola",
		config: skola_full,
		checkname: "skola"
	},
	{
		name: "Veřejnost",
		config: verejnost_full,
		checkname: "verejnost"
	},
	{
		name: "Ostatní",
		config: ostatni,
		checkname: "ostatni"
	}
];


