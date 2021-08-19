const pinGeneratorBtn = document.getElementById( "generate-pin" );
const pinGeneratorInput = document.getElementById( "pin-generator-display" );
const buttonSeven = document.getElementById( "button-seven" );
const keyPad = document.getElementById( "key-pad" );
const pinMatcherDisplay = document.getElementById( "pin-matcher-display" );
const pinSubmitBtn = document.getElementById( "pin-submit-btn" );
const wrongMessage = document.getElementById( "wrong" );
const rightMessage = document.getElementById( "right" );
const tryRemain = document.getElementById( "deed-remain" );
const tryLeft = document.getElementById( "try-remain" );



pinGeneratorBtn.addEventListener( "click", function ( e )
{
    e.preventDefault();

    let generateRandomNumber = Math.floor( Math.random() * 100000 + 100000 );
    console.log( generateRandomNumber );
    pinGeneratorInput.value = generateRandomNumber;
} );


// buttonSeven.addEventListener( "click", function ( e )
// {
//     e.preventDefault();

//     pinMatcherDisplay.value = buttonSeven.innerText;
//     console.log( pinGeneratorInput.innerText );
    
// } );

keyPad.addEventListener( "click", function ( e )
{
    const simpleNumber = e.target.innerText;
    
    if ( isNaN( simpleNumber ) )
    {
        if ( simpleNumber === "C" )
        {
            pinMatcherDisplay.value = "";
        }

    } else
    {

        const previousNumber = pinMatcherDisplay.value;
        
        const nextNumber = previousNumber + simpleNumber;
        
        pinMatcherDisplay.value = nextNumber;
        
    }


} );

// console.log( pinMatcherDisplay.value );

pinSubmitBtn.addEventListener( "click", function ( e )
{
    if ( pinGeneratorInput.value === pinMatcherDisplay.value )
    {
        wrongMessage.style.visibility = "none";
        tryRemain.style.display = "none";
        rightMessage.style.visibility = "visible";
        pinMatcherDisplay.value = "";

    } else
    {
        rightMessage.style.display = "none";
        wrongMessage.style.visibility = "visible";
        tryRemain.style.visibility = "visible";
        pinMatcherDisplay.value = "";
        let totalTry = parseInt(tryLeft.innerText);
        --totalTry;
        console.log(totalTry);
    }
} );