//PSEUDOCODE
//Allow user to input name, age and location
//When user clicks submit, values are stored and next page loads
//add class of hidden??
//second page - allow user to select level of seriousness
//on submit, stores the result and loads next page
//user inputs three values of interests 
//on submit, final page is presented
//using stored values, a paragraph is generated
//provide a way for user to easily copy the code
//allow user to share website on twitter

const myApp = {};
myApp.results = {
    firstParagraph = "Lorem ipsum dolor sit amet."
}

$('.gen-demographics button').on('click', function (e) {
    e.preventDefault();
    const userName = $('input[name=yourName]').val();
    console.log(userName);
    const userAge = $('input[name=yourAge]').val();
    console.log(userAge);
    const userLocal = $('input[name=yourLocation]').val();
    console.log(userLocal);
    $('span').html('<h2 class="choice">' + optionToDispaly.title + '</h2>');
})

$('.gen-level button').on('click', function (e) {
    e.preventDefault();
    const relLevel = $('input[name=seriousness]:checked').val();
    console.log(relLevel);
})
$('.final-button').on('click', function (e) {
    e.preventDefault();
    const userInterest = $('input[name=interest]');
    console.log(userInterest);
    userInterest.each(function(i, el){
        console.log($(el).val());
    
    })
    
    $('.final-button').on('submit', function(e){
        $('span').append(`hi my name is ${userName}, I'm ${userAge} and located in ${userLocal}`);
    })
    
});


$(function () {
});

//one form that gets submitted, and when it's submitted, grab values
//can still have buttons, won't let them submit
//on click for buttons, on submit for form

    // if ('.form-demo' !=='')
    //     $('span').append(`hi my name is ${userName}, I'm ${userAge} and located in ${userLocal}`);
    // $('input').val('');