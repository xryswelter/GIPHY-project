$(document).ready(function () {
    // VARIABLES
    
    let topics = ['bunnies', 'dogs', 'cats', 'birds'];
    
    createButtons();
    //creating buttons from the array
    function createButtons() {
        for (let i = 0; i < topics.length; i++) {
            let button = $('<button>');
            button.val(topics[i]).text(topics[i]).addClass('buttons');
            // making sure values are added to buttons
            let value = button.val();
            console.log(value);
            // Appending to gifs collumn
            $('#gifsButtons').append(button);
        }
    }
    //click add button to append to the end of topics
    $('.addOn').on('click', function (event) {
        event.preventDefault();
        let values = $('.addTopic').val();
        values= values.toLowerCase();
        if (topics.includes(values)) {
            alert('this has already been added to the list already');
            return;
        } else {
            topics.push(values);
            let button = $('<button>');
            button.val(values).text(values).addClass('buttons');
            $('#gifsButtons').append(button);
        }
    })
    
    $('.buttons').on('click',function(event){
        event.preventDefault();
        console.log('derp');
        //Setting API key
        // let apiKey = 'N5NWVyFyj72fV7L3grGZOd9vF6pc1FXF';
        // let limit = 10;
        let searchTopic = $(this).val();
        let requests = `http://api.giphy.com/v1/gifs/search?q=${searchTopic}&api_key=N5NWVyFyj72fV7L3grGZOd9vF6pc1FXF&limit=10`;
        console.log(searchTopic);
        console.log(requests);
        //Example of url request from "https://developers.giphy.com/docs/"
        // http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5');
        summonGifs(requests);
    })

    function summonGifs(requests) {
        $.ajax({
            url: requests,
            method: 'GET'
        })
            .then(function (response) {
                console.log(requests);
                console.log(response);
                createJifs(response);
            });
    }

    function createJifs(reponse){
        let jif= response.data;

        for (let i =0; i<jif.length;i++){
            let newDiv = $('<div>');
            let p = $('<p>');
            p.text(jif[i].rating);
            let jifImage = $('<img>');
            jifImage.attr("src", jif[i].images.fixed_height.url);
            newDiv.append(p);
            newDiv.append(jifImage);
            $('#gifsDisplay').append
        }
    }
    // 1. Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called `topics`.
    //    * We chose animals for our theme, but you can make a list to your own liking.

    // 2. Your app should take the topics in this array and create buttons in your HTML.
    //    * Try using a loop that appends a button for each string in the array.

    // 3. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

    // 4. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

    // 5. Under every gif, display its rating (PG, G, so on).
    //    * This data is provided by the GIPHY API.
    //    * Only once you get images displaying with button presses should you move on to the next step.

    // 6. Add a form to your page takes the value from a user input box and adds it into your `topics` array. Then make a function call that takes each topic in the array remakes the buttons on the page.

    // 7. Deploy your assignment to Github Pages.

    // 8. **Rejoice**! You just made something really cool.
});
