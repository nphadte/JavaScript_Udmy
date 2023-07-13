/*
 *  A Promise is an object representing the eventual completion or failure of an asynchronous operation.
 *  a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.
 */

/*
function successCallback(result) {
    console.log("Audio file ready at URL: " + result);
}

function failureCallback(error) {
    console.error("Error generating audio file: " + error);
}

createAudioFileAsync(audioSettings, successCallback, failureCallback);
 */

//   This is Asynchronous function call
//   One of the great things about using promises is chaining.
const promise = createAudioFileAsync(audioSettings);
promise.then(successCallback, failureCallback);


