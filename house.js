//attempting to make this: https://dribbble.com/shots/3499449-Responsive-House

//start off on 6
$('input[type="range"]')
	.val(6)
	.change();

//function called when updated
function updateSlider(thisVal) {
	var sliderDiv = document.getElementById("sliderAmountNum");
	var num = thisVal;
	sliderDiv.innerHTML = num;

	if (thisVal == 2) {
		animateCSS(".houseWrapper", "rubberBand", "fast");
		//animateCSS('.stairsWrapper', 'rubberBand', 'faster');
		animateCSS(".centerTextNum", "zoomIn", "faster");
		document.getElementById("baseLine").style.width = "55%";
		document.getElementById("wideStructure").style.width = "150px";
		document.getElementById("wideStructureRoof1").style.width = "132px";
		//$("#house").addClass("animated rubberBand");
		document.getElementById("wideStructureRoof2").style.width = "150px";
		restoreMainWindow();
		restoreMainWindowSill();
		blowUpInnerWindows();
		blowUpWideWindows();
	}
	if (thisVal == 3) {
		animateCSS(".houseWrapper", "rubberBand", "fast");
		//animateCSS('.stairsWrapper', 'rubberBand', 'faster');
		animateCSS(".centerTextNum", "zoomIn", "faster");
		document.getElementById("baseLine").style.width = "65%";
		document.getElementById("wideStructure").style.width = "180px";
		document.getElementById("wideStructureRoof1").style.width = "158px";
		//$("#house").addClass("animated rubberBand");
		document.getElementById("wideStructureRoof2").style.width = "180px";
		restoreMainWindow();
		restoreMainWindowSill();
		blowUpInnerWindows();
		blowUpWideWindows();
	}
	if (thisVal == 4) {
		animateCSS(".houseWrapper", "rubberBand", "fast");
		//animateCSS('.stairsWrapper', 'rubberBand', 'faster');
		animateCSS(".centerTextNum", "zoomIn", "faster");
		document.getElementById("baseLine").style.width = "75%";
		document.getElementById("wideStructure").style.width = "230px";
		document.getElementById("wideStructureRoof1").style.width = "208px";
		document.getElementById("wideStructureRoof2").style.width = "240px";
		//window shift
		document.getElementById("wideWindowL").style.left = "28.5%";
		document.getElementById("wideWindowSillL").style.left = "28.5%";
		document.getElementById("wideWindowR").style.left = "71.5%";
		document.getElementById("wideWindowSillR").style.left = "71.5%";
		restoreMainWindow();
		restoreMainWindowSill();
		restoreInnerWindows();
		blowUpWideWindows();
	}
	if (thisVal == 5) {
		animateCSS(".houseWrapper", "rubberBand", "fast");
		//animateCSS('.stairsWrapper', 'rubberBand', 'faster');
		animateCSS(".centerTextNum", "zoomIn", "faster");
		document.getElementById("baseLine").style.width = "85%";
		document.getElementById("wideStructure").style.width = "270px";
		document.getElementById("wideStructureRoof1").style.width = "245px";
		document.getElementById("wideStructureRoof2").style.width = "280px";
		//window shift
		document.getElementById("wideWindowL").style.left = "26%";
		document.getElementById("wideWindowSillL").style.left = "26%";
		document.getElementById("wideWindowR").style.left = "74%";
		document.getElementById("wideWindowSillR").style.left = "74%";
		restoreMainWindow();
		restoreMainWindowSill();
		restoreInnerWindows();
		blowUpWideWindows();
	}
	if (thisVal == 6) {
		animateCSS(".houseWrapper", "rubberBand", "fast");
		//animateCSS('.stairsWrapper', 'rubberBand', 'faster');
		animateCSS(".centerTextNum", "zoomIn", "faster");
		document.getElementById("baseLine").style.width = "95%";
		document.getElementById("wideStructure").style.width = "320px";
		document.getElementById("wideStructureRoof1").style.width = "306px";
		document.getElementById("wideStructureRoof2").style.width = "350px";
		document.getElementById("wideWindowRR").style.height = "35px";
		document.getElementById("wideWindowRR").style.width = "20px";
		document.getElementById("wideWindowRR").style.borderRadius =
			"20px 20px 10px 10px";
		document.getElementById("wideWindowRR").style.opacity = "1";
		document.getElementById("wideWindowSillRR").style.opacity = "1";
		document.getElementById("wideWindowR").style.left = "71%";
		document.getElementById("wideWindowSillR").style.left = "71%";
		document.getElementById("wideWindowLL").style.height = "35px";
		document.getElementById("wideWindowLL").style.width = "20px";
		document.getElementById("wideWindowLL").style.borderRadius =
			"20px 20px 10px 10px";
		document.getElementById("wideWindowLL").style.opacity = "1";
		document.getElementById("wideWindowSillLL").style.opacity = "1";
		document.getElementById("wideWindowL").style.left = "29%";
		document.getElementById("wideWindowSillL").style.left = "29%";
		restoreMainWindow();
		restoreMainWindowSill();
		restoreInnerWindows();
	}
	if (thisVal == 7) {
		animateCSS(".houseWrapper", "rubberBand", "fast");
		//animateCSS('.stairsWrapper', 'rubberBand', 'faster');
		animateCSS(".centerTextNum", "zoomIn", "faster");
		document.getElementById("baseLine").style.width = "100%";
		document.getElementById("wideStructure").style.width = "350px";
		document.getElementById("wideStructureRoof1").style.width = "326px";
		document.getElementById("wideStructureRoof2").style.width = "370px";
		document.getElementById("wideWindowRR").style.height = "35px";
		document.getElementById("wideWindowRR").style.width = "20px";
		document.getElementById("wideWindowRR").style.borderRadius =
			"20px 20px 10px 10px";
		document.getElementById("wideWindowRR").style.opacity = "1";
		document.getElementById("wideWindowSillRR").style.opacity = "1";
		document.getElementById("wideWindowR").style.left = "71%";
		document.getElementById("wideWindowSillR").style.left = "71%";
		document.getElementById("wideWindowLL").style.height = "35px";
		document.getElementById("wideWindowLL").style.width = "20px";
		document.getElementById("wideWindowLL").style.borderRadius =
			"20px 20px 10px 10px";
		document.getElementById("wideWindowLL").style.opacity = "1";
		document.getElementById("wideWindowSillLL").style.opacity = "1";
		document.getElementById("wideWindowL").style.left = "29%";
		document.getElementById("wideWindowSillL").style.left = "29%";

		document.getElementById("mainWindow").style.left = "44%";
		document.getElementById("mainWindow").style.top = "37%";
		document.getElementById("mainWindow").style.height = "30px";
		document.getElementById("mainWindow").style.width = "25px";
		document.getElementById("mainWindow").style.borderRadius =
			"20px 20px 10px 10px";
		document.getElementById("mainWindowSill").style.width = "30px";
		document.getElementById("mainWindowSill").style.left = "44%";
		document.getElementById("mainWindowSill").style.top = "41%";
		document.getElementById("mainWindow2").style.height = "30px";
		document.getElementById("mainWindow2").style.width = "25px";
		document.getElementById("mainWindow2").style.borderRadius =
			"20px 20px 10px 10px";

		document.getElementById("mainWindowSill2").style.height = "3px";
		document.getElementById("mainWindowSill2").style.width = "30px";
		document.getElementById("mainWindow2").style.opacity = "1";
		document.getElementById("mainWindowSill2").style.opacity = "1";
		restoreInnerWindows();
	}
}

function restoreInnerWindows() {
	document.getElementById("wideWindowR").style.height = "35px";
	document.getElementById("wideWindowR").style.width = "20px";
	document.getElementById("wideWindowR").style.borderRadius =
		"20px 20px 10px 10px";
	document.getElementById("wideWindowR").style.opacity = "1";
	document.getElementById("wideWindowSillR").style.opacity = "1";
	document.getElementById("wideWindowL").style.height = "35px";
	document.getElementById("wideWindowL").style.width = "20px";
	document.getElementById("wideWindowL").style.borderRadius =
		"20px 20px 10px 10px";
	document.getElementById("wideWindowL").style.opacity = "1";
	document.getElementById("wideWindowSillL").style.opacity = "1";
}
function restoreMainWindow() {
	document.getElementById("mainWindow").style.left = "50%";
	document.getElementById("mainWindow").style.top = "35%";
	document.getElementById("mainWindow").style.height = "30px";
	document.getElementById("mainWindow").style.width = "40px";
	document.getElementById("mainWindow").style.borderRadius =
		"20px 20px 10px 10px";
	document.getElementById("mainWindow").style.opacity = "1";
	document.getElementById("mainWindow2").style.height = "80px";
	document.getElementById("mainWindow2").style.width = "80px";
	document.getElementById("mainWindow2").style.borderRadius = "200px";
	document.getElementById("mainWindow2").style.opacity = "0";
	document.getElementById("mainWindowSill2").style.height = "80px";
	document.getElementById("mainWindowSill2").style.width = "80px";
	document.getElementById("mainWindowSill2").style.borderRadius = "200px";
	document.getElementById("mainWindowSill2").style.opacity = "0";
}
function restoreMainWindowSill() {
	document.getElementById("mainWindowSill").style.top = "39%";
	document.getElementById("mainWindowSill").style.left = "50%";
	document.getElementById("mainWindowSill").style.height = "3px";
	document.getElementById("mainWindowSill").style.width = "42px";
	document.getElementById("mainWindowSill").style.borderRadius = "20px";
	document.getElementById("mainWindowSill").style.opacity = "1";
}
function blowUpMainWindowSill() {
	document.getElementById("mainWindowSill").style.height = "80px";
	document.getElementById("mainWindowSill").style.width = "80px";
	document.getElementById("mainWindowSill").style.borderRadius = "200px";
	document.getElementById("mainWindowSill").style.opacity = "0";
}
function blowUpInnerWindows() {
	document.getElementById("wideWindowR").style.height = "80px";
	document.getElementById("wideWindowR").style.width = "80px";
	document.getElementById("wideWindowR").style.borderRadius = "200px";
	document.getElementById("wideWindowR").style.opacity = "0";
	document.getElementById("wideWindowSillR").style.opacity = "0";
	document.getElementById("wideWindowL").style.height = "80px";
	document.getElementById("wideWindowL").style.width = "80px";
	document.getElementById("wideWindowL").style.borderRadius = "200px";
	document.getElementById("wideWindowL").style.opacity = "0";
	document.getElementById("wideWindowSillL").style.opacity = "0";
}
function blowUpWideWindows() {
	document.getElementById("wideWindowRR").style.height = "80px";
	document.getElementById("wideWindowRR").style.width = "80px";
	document.getElementById("wideWindowRR").style.borderRadius = "200px";
	document.getElementById("wideWindowRR").style.opacity = "0";
	document.getElementById("wideWindowSillRR").style.opacity = "0";
	document.getElementById("wideWindowLL").style.height = "80px";
	document.getElementById("wideWindowLL").style.width = "80px";
	document.getElementById("wideWindowLL").style.borderRadius = "200px";
	document.getElementById("wideWindowLL").style.opacity = "0";
	document.getElementById("wideWindowSillLL").style.opacity = "0";
}

//rangeslider.js mumbo jumbo
var $element = $('input[type="range"]');
var $output = $("output");

$element
	.rangeslider({
		polyfill: false,
		onInit: function() {
			updateSlider(this.value);
		}
	})
	.on("input", function() {
		updateSlider(this.value);
	});

function animateCSS(element, animationName, speed, callback) {
	const node = document.querySelector(element);
	node.classList.add("animated", animationName, speed);

	function handleAnimationEnd() {
		node.classList.remove("animated", animationName);
		node.removeEventListener("animationend", handleAnimationEnd);

		if (typeof callback === "function") callback();
	}

	node.addEventListener("animationend", handleAnimationEnd);
}
