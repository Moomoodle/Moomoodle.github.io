// Sample wordlist
const songList = {
WAW				: ['Where Are We Now','Another Day','A Memory for Life','Destiny Part.2'],
Travel			: ['Travel','AYA','Chuck','Diamond','Good Night'],
realityinBLACK 	: ['Destiny','Universe','Ten Nights','HIP','4x4ever','Better','Hello Mama','ZzZz','rEALITY','High Tension','I’m Your Fan'],
WhiteWind		: ['Where R U','gogobebe','Waggy','25','Bad bye','My star'],
BLUES 			: ['No more drama','Wind flower','HELLO','Better than I thought','Morning'],
REDMOON 		: ['Midnight Summer Dream','Egotistic','Rainy Season','Sky! Sky!','Sleep In The Car','SELFISH'],
YellowFlower	: ['Star Wind Flower Sun','Starry Night','Be Calm','Rude Boy','Spring Fever','Paint Me'],
Purple 			: ['Yes I Am','Finally','Love & Hate','Aze Gag','Da Ra Da'],
Memory			: ['Memory','Décalcomanie','NEW YORK','Moderato','Angel','DAB DAB','I Love Too'],
Melting 		: ['Taller Than You','Words Don\'t Come Easy','You\'re The Best','Friday Night','My Hometown','Emotion','I Miss You','Funky Boy','Recipe','Cat Fight','Just','Girl Crush'],
PinkFunky		: ['Freakin Shoes','Um Oh Ah Yeh','a little bit','No no no','Self Camera','AHH OOP!'],
PianoMan		: ['Piano Man','Gentleman'],
Hello			: ['Mr.Ambiguous','Heeheehaheho','Baton Touch','I do me','Don\'t be happyv'],
MICON			: ["1,2,3 Eoi!","ILLELLA","L.I.E.C"]
};

const spotifyList = {
WAW				: ["0cLXk75Pan3mhRlWqHiynh","2aBufmesYkWQnkIR6dgoaR","0K6ueyEGT693t5XeSnSywi","77wO21RS6qs1SjMtM83y60"],
Travel			: ["0YltOLvdxFrB6mexkc2ruh","4BZXVFYCb76Q0Klojq4piV","4LfmJgyInGg96Kaue1ceGZ","5jJceu1XzlE3bPQhQTZ2Ul","3KAfLV5JH4K0uMYBG5T1oK"],
realityinBLACK 	: ["6oS5qBlnci7unQjdLiok41","4qbGJFymUZniG3wlZxTjUj","6zbHcliUyMYCI0NUUXcEEb","24nK8tW7Pt3Inh2utttuoG","4bMsb9CROmDYa5ngBynRXT","1kpQ2Gtry1UABK2r2GpAQs","5lUj2BXXpZnA3tXRVxCY7n","550UTr3DIiMPveuG6O02ma","5B5duJmnGL09GTiL9IjPKk","0ZahuGIYMbXT4y303P8jTs","0hvcmX6mlxPaNSVTVlPuGC"],
WhiteWind		: ["6c4vcUse4eaS1bsSU1bgbR","6E7jAJN2e3znSHyPCdQqx8","4PaV21Q4jkSvfQ5iAcFJef","1rQOD7DtJh36OYmRoXQe8o","7BtlHtI069TtNFUkLdjpxf","6cf5TJ3mCkhsWJxj1kTKyB"],
BLUES 			: ["3KxYiSZ4n7ih45JtE2T518","2qwyjoSsSr3M7HTt611Q5O","0HpLJx1WSjDotLuHkHLlZr","3Ab6JZWdTEj48lrHFg1HBI","2FdCy1Qxz8z1JiVaTKyOy1"],
REDMOON 		: ["6SoK1JTAyBNsYXp9poIvWx","3a7OyTsoZ8CCBdvEEvzLBv","1j64SGn9hUwidOSdDrXi6s","5jFO2lUdDLwMrfw7DnbYIZ","3ixx9NkjGMHkH6k5RV3DSM","3fcgRnXQ3ltsH5Lcv9VKov"],
YellowFlower	: ["4Tkb7ifT9Oe6fWURcJ1Lux","3qUJ0kC9YdBO5qRFdYXeXX","47PdcdKcRlxWILB1mXdHMC","6t4OnTJ5r6KSrsa1AIcF7c","3q5bYzXVbeFJ1lv4VhvYHb","1bCN73XkDVfx70FzEv0evG"],
Purple 			: ["3RqUX4U46H6TPdH30gPy4k","6rJEKLF4uMS6JSwvS5Bczf","5aCt0eizNsuvP9CdU3dgCc","4cx1460xvs9dZkYzwllLRd","6qQ7GQ2dyhw6gDEmv75QnT"],
Memory			: ["0QGeLX82C3IDkpVM264lo5","5WitNasXEIRptoLIQUcXMx","3ND8RiYuT5XfJNqUWsnBe5","2ln1zeqUzDmxKzfQdvmPKu","0TlmN1kaAp3LgwtoCAGdDF","0y6Wf3EOZUQLDzTYq3xRpX","4yKJ3bw9BIHgBF2iVLljBs"],
Melting 		: ["2MODoWGuNV60V7X9JRmcFh","5IFBJX7Wf4EzhECoiCjCch","3BUZUCu1uHaTvroizwqLHt","1xlzLqAZ9wCrQ8aljO6yUO","7C4PBtYv1BqsiEXtLlyGVd","3PxQzRCmHMKTCQ0DrIQFbe","6XmZNkGNEJngWnT7ITrLpV","0sdXpTQhh1PhpyH3iLznAn","2YnbvvJE0uhi6Hjpv1yOzI","1l0AiIZNpaKIBPcDp7VQb3","3MVtB8w7CKKM8UvHAPtdFb","5WGLxlhumdEqAyEgKbVmra"],
PinkFunky		: ["1AyaC7MTNuwqAsiAbzdU3k","0icGgAiUx5b0amQLycmGUr","6JP48VTlIxnx0RwBvabD9l","19YOJvZqu6pjNjh9rFZ3eg","04Quw3a7e9R7f2Sr45l6Vx","5bhPsVZrng5VjNKh822yJH"],
PianoMan		: ["2CC7fLFEcJBrO82NUwi9Op","31IkOYqCkg6kvwkGvEkotH"],
Hello			: ["4VOZzJeoNhvvTaGTztogVt","1XhlGYZrqUqVr9RgSJcGPN","2oD7DvNVd0wdiWvgFrvgmZ","3RegpmudRVdgKkVjSEYpHy","0i1rl9K4GlwjAoB1cFBOCc"],
MICON			: ["1uYgNXNnBTQnboOwlYBLd1","0oeVHAgY8Q7Mdce5Quj2G4","1RNnRdT27xNUTdechKtSVT"]
};

var EmbedControllers;
var guessList = []
var guessCount;
var win;
var audioPlaying;
var timeoutId;
var intervalId;
var practise = false;
var selectedPredictiveIndex=0;
//Win,Lost,Streak,MaxStreak
//PractiseStreak, MaxStreak
//123456 guess
var statsData = [0,0,0,0,
				0,0,
				0,0,0, 0,0,0];
var practiseStreak=0;

//Selected Song Details
var randomAlbum;
var albumChoice; 
var albumOptions;
var randomSong;
var songChoice;
var randomTime;

//For prediction
var wordList = Object.values(songList).flat(1);

//Seed for Daily
var date = new Date();
var datedate=date.getDate();
if(datedate <10)
	datedate="0"+datedate;
var month=date.getMonth()+1;
if(month <10)
	month="0"+month;
var displayDate=datedate+'-'+month+'-'+date.getFullYear()

var seed = ""+date.getFullYear()+month+datedate;



function random() {
	if(practise)
		return Math.random()
	else
		return (((Math.sin(seedInt++)/2+0.5)*10000)%100)/100;
}
//Init/Refresh
function refresh() {

	guessList = []
	guessCount=0;
	audioPlaying=false;
	win=false;
	document.getElementById('submit').disabled = false;
	
	seedInt= hashCode(seed);
	
	for(var i=0;i<6;i++)
	{	
		document.getElementById('textbox'+i).style.backgroundColor="white";
		document.getElementById('textbox'+i).value="";
	}
	document.getElementById('predictive-text').value = "";
	
	randomAlbum = Math.floor(random() * Object.keys(songList).length);
	albumChoice = Object.keys(songList)[randomAlbum];
	albumOptions = Object.values(songList)[randomAlbum];
	randomSong = Math.floor(random() * albumOptions.length);
	songChoice = albumOptions[randomSong];
	randomTime = random();
	
	document.querySelector(".circular-progress").style.background = `conic-gradient(#2020ff ${0 * 3.6}deg, #000000 0deg)`
	clearTimeout(timeoutId);
	clearInterval(intervalId);
	EmbedControllers.loadUri('spotify:track:' + (Object.values(spotifyList)[randomAlbum])[randomSong]);
	
}
//hash
function hashCode(str) {
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        let chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}


//Predictive
function showPredictiveText(event) {
	
	if(win)
		return;
	
	var currentIndex=0;
	const input = event.target.value;
	const predictiveList = document.getElementById('predictive-list');
	predictiveList.innerHTML = '';
	
	if (input.length === 0) {
		return;
	}
	
	var tempWordList = wordList.filter( x => !((new Set(guessList)).has(x)) );
	
	const allList = tempWordList.filter(word =>
		word.toLowerCase().includes(input.toLowerCase())
	);
	const startList = tempWordList.filter(word =>
		word.toLowerCase().startsWith(input.toLowerCase())
	);
	var list = [...startList,...allList];
	var filteredList = [... new Set(list)];
	
	filteredList.forEach(word => {
		const option = document.createElement('div');
		option.innerHTML = word;
		option.addEventListener('click', () => {
		document.getElementById('predictive-text').value = word;
		predictiveList.innerHTML = '';
		});
		if(currentIndex==selectedPredictiveIndex){
			option.style.backgroundColor = "#222222";
		}
		predictiveList.appendChild(option);
		currentIndex++;
	});
	
	document.onkeydown = function (event) {
		
		if(win)
			return;
		//Enter
		if (event.keyCode === 13) {
			document.getElementById('predictive-text').value = filteredList[selectedPredictiveIndex];
			verifyInput();
			selectedPredictiveIndex=0;
		}
		//Up
		if (event.keyCode === 38) {
			selectedPredictiveIndex--;
			if(selectedPredictiveIndex<0)
				selectedPredictiveIndex=filteredList.length-1;
		}
		//Down
		if (event.keyCode === 40) {
			selectedPredictiveIndex++;
			if(selectedPredictiveIndex>filteredList.length-1)
				selectedPredictiveIndex=0;
		}
	};
	document.getElementById('invalidAnswer').style.display="none";
}
//Disable up and down key in text for predictive
 window.addEventListener("keydown", function(e) {
    if([38, 40].indexOf(e.keyCode) > -1){
        e.preventDefault();
    }
}, false);

//Verify
function verifyInput() {
	if(win)
		return;
	var input = document.getElementById('predictive-text').value;
	if (wordList.includes(input)) 
	{
		if(guessList.includes(input))
		{
			document.getElementById('invalidAnswer').style.display="block";
			return;
		}else if(guessCount<6)
		{
			var textbox = document.getElementById('textbox'+guessCount);
			guessCount++;
			textbox.value = input;
			guessList.push(input);
			if(songChoice==input){
				document.getElementById('submit').disabled = true;
				textbox.style.backgroundColor='green';
				if(!practise){
					statsData[guessCount+5]++;
					statsData[0]++;
					statsData[2]++;
					if(statsData[2]>statsData[3])
						statsData[3]=statsData[2];
					updateStats();
				}else{
					statsData[4]++;
					if(statsData[4]>statsData[5])
						statsData[5]=statsData[4];
					updateStatsPractise();
				}
				openModal("win");
				win=true;
			}else if(albumOptions.includes(input))
			{
				textbox.style.backgroundColor='yellow';
			}
			if(guessCount==6 && win==false){
				document.getElementById('submit').disabled = true;
				if(!practise){
					statsData[1]++;
					statsData[2]=0;
					updateStats();
				}else{
					statsData[4]=0;
					updateStatsPractise();
				}
				openModal('lose');
			}
		}
	}else{
		document.getElementById('invalidAnswer').style.display="block";
	}
	document.getElementById('predictive-text').value = "";
	document.getElementById('predictive-list').innerHTML="";
	if(!practise)
		saveGuesses();
}


//Songs
function playSong() {
	
	if(audioPlaying){
		audioPlaying=false;
		clearTimeout(timeoutId);
		clearInterval(intervalId);
		EmbedControllers.pause();
		return;
	}
	audioPlaying=true;
	var durationInSeconds = guessCount+1;
	EmbedControllers.play();
	
	document.querySelector(".circular-progress").style.background = '#000000';
	
	//Anim duration
	let circularProgress = document.querySelector(".circular-progress")
	let progressStartValue = 1,
		progressEndValue = 100;
	intervalId = setInterval(() => {
		progressStartValue++;
		circularProgress.style.background = `conic-gradient(#2020ff ${progressStartValue * 3.6}deg, #000000 0deg)`
		if(progressStartValue == progressEndValue){
			clearInterval(intervalId);
		}    
	}, 1000/16.7);
	
	if(!win){
		//Songs play duration
		timeoutId = setTimeout(function() {
			audioPlaying=false;
			EmbedControllers.pause();
			clearInterval(intervalId);
		}, durationInSeconds * 1000);
		
	}
	
}

//Modals
function openModal(type){
	document.getElementById("win").style.display = "none";
	document.getElementById("info").style.display = "none";
	document.getElementById("lose").style.display = "none";
	
	if(type=="win"){
		document.getElementById("win").style.display = "block";
		if(practise){
			document.getElementById("share").style.display = "none";
			document.getElementById("stats").style.display = "none";
			document.getElementById("newgame").style.display = "block";
		}else{
			document.getElementById("share").style.display = "flex";
			document.getElementById("stats").style.display = "block";
			document.getElementById("newgame").style.display = "none";
		}
	}else if(type =="info"){
		document.getElementById("info").style.display = "block";
	}else if(type =="lose"){
		document.getElementById("lose").style.display = "block";
		document.getElementById("loseSong").innerHTML="Song was "+songChoice;
		if(practise){
			document.getElementById("newgamelose").style.display = "block";
			document.getElementById("streaklose").style.display = "block";
		}else{
			document.getElementById("newgamelose").style.display = "none";
			document.getElementById("streaklose").style.display = "none";
		}
	}
	document.getElementById("modal").style.display = "block";
}

document.getElementById("close").onclick = function() {
  document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
  if (event.target == document.getElementById("modal")) {
    document.getElementById("modal").style.display = "none";
  }
}
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    document.getElementById("modal").style.display = "none";
  }
});

//Share
function share() {
	
	var detailToCopy = "#MooMoodle "+displayDate+ " "+guessCount+"/6\n";
	for(var i=0;i<guessCount;i++)
	{	
		var color = document.getElementById('textbox'+i).style.backgroundColor;
		if(color == 'yellow'){
			detailToCopy+="🟨"
		}else if(color == 'green'){
			detailToCopy+="🟩"
		}else{
			detailToCopy+="⬜️"
		}
	}
	detailToCopy+='\n\n#moomoodle';
	detailToCopy+='\nmoomoodle.github.io';

	var tempInput = document.createElement("textarea");
	tempInput.value = detailToCopy;
	document.body.appendChild(tempInput);
	tempInput.select();
	document.execCommand("copy");
	document.body.removeChild(tempInput);
	
	document.getElementById('shareText').style.display ="block";
	timeoutId = setTimeout(function() {
		document.getElementById('shareText').style.display ="none";
			clearInterval(intervalId);
		}, 3000);
	
}

//Practise mode
function togglePractise(){
	practise = !practise;
	refresh();
	if(practise){
		document.getElementById("practise").innerHTML="Daily";
	}else{
		document.getElementById("practise").innerHTML="Practise";
		getGuesses();
	}
}


function newGame(){
	refresh();
	document.getElementById("modal").style.display = "none";
}
//Youtube
window.onSpotifyIframeApiReady = (IFrameAPI) => {
  const element = document.getElementById('embed-iframe');
  const options = {
		width:0,
		height:0,
		uri: 'spotify:album:7CucpzwxAZ6kHmctI9eo4X'
    };
  const callback = (EmbedController) => {
		EmbedControllers = EmbedController
		refresh();
		getGuesses();
	  };
  IFrameAPI.createController(element, options, callback);
};


//Cookies
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  const cookieName = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return "";
}

// Function to save the guesses of the day
function saveGuesses() {
	if(guessCount==0)
		return;
	const currentDate = new Date().toDateString();
	var string = currentDate + '=' + statsData + '=';
	for(var i=0;i<guessCount;i++){
		string += guessList[i];
		if(guessCount-1!=i)
			string+='=';
	}
	setCookie("Moomoodle", string, 365);
}

// Function to retrieve the guesses of the day
function getGuesses() {
	const currentDate = new Date().toDateString();
	var ytdDate = new Date();
	ytdDate.setDate(ytdDate.getDate() - 1);
	
	const savedGuesses = getCookie("Moomoodle");
	if(savedGuesses == '')
		return;
	
	var stringArr = savedGuesses.split('=');
	
	var tempArr = stringArr[1].split(",");
	statsData = tempArr.reduce( (acc, x ) => acc.concat(+x), [])
	updateStats();
	
	if(stringArr[0]==currentDate){
		
		for(var i=2;i<stringArr.length;i++){
			var input =stringArr[i];
			var textbox = document.getElementById('textbox'+guessCount);
			guessCount++;
			textbox.value = input;
			guessList.push(input);
			if(songChoice==input){
				document.getElementById('submit').disabled = true;
				textbox.style.backgroundColor='green';
				openModal("win");
				win=true;
				
			}else if(albumOptions.includes(input))
			{
				textbox.style.backgroundColor='yellow';
			}
			if(guessCount==6 && win==false){
				document.getElementById('submit').disabled = true;
				openModal('lose');
			}
		}
	}else if(currentDate != ytdDate.toDateString()){
		statsData[2] = 0;
	}
}
function updateStats(){
	document.getElementById('gamesPlayed').innerHTML = statsData[0]+statsData[1];
	document.getElementById('winRate').innerHTML = Math.floor((statsData[0]/(statsData[0]+statsData[1]))*100)+"%";
	document.getElementById('currentStreak').innerHTML = statsData[2];
	document.getElementById('maxStreak').innerHTML = statsData[3];
	
	
	var graphContainer = document.getElementById('graph-container');
	graphContainer.innerHTML="";
	for(var i=0;i<6;++i){
		const barGraph = document.createElement('div');
		barGraph.classList.add('bar-graph');
		barGraph.innerHTML = `
			<span class="bar-label">${i+1}</span>
			<div class="bar" style="width: ${statsData[i+6] * 10+5}px;"></div>
			<span class="bar-value">${statsData[i+6]}</span>
		`;
		graphContainer.appendChild(barGraph);
	}
	
}
function updateStatsPractise(){
	document.getElementById('practiseCurrentStreak').innerHTML = statsData[4];
	document.getElementById('practiseStreak').innerHTML = statsData[5];
	document.getElementById('practiseCurrentStreakLose').innerHTML = statsData[4];
	document.getElementById('practiseStreakLose').innerHTML = statsData[5];
}