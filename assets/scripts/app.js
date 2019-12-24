const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "Networking",
				weight: 12.3
			}, {
				text: "AI",
				weight: 11
			}, {
				text: "Volunteering",
				weight: 14
			}, {
				text: "Art",
				weight: 8
			}, {
				text: "Programming",
				weight: 8
			}, {
				text: "Python",
				weight: 11
			}, {
				text: "Speaking",
				weight: 10
			}, {
				text: "Technologies",
				weight: 15
			}, {
				text: "Physics",
				weight: 12
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am an AI enthusiast.", "Software Programmer","love Volunteering.", "Passionate to know about Quantum Physics.", "Community Educator."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
