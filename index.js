
exports.handler = (event, context, callback) => {
    try {
    if (event.session.new) {
        // New Session
        context.succeed(
                generateResponse(
                    buildSpeechletResponse(WELCOME_MESSAGE, true),
                    {}
                    )
                )
                this.response.speak(
                    generateResponse(
                        buildSpeechletResponse("", true),
                        {}
                        )
                    ).listen(HELP_MESSAGE)
    }
    
    if (event.request.intent.name === "InterviewIntent") {
            console.log("InterviewIntent Reached")
                context.succeed(
                generateResponse(
                    buildSpeechletResponse("Reached Interview Intent", true),
                    {}
                    )
                )
                this.response.speak(
                    generateResponse(
                        buildSpeechletResponse("", true),
                        {}
                        )
                    ).listen(HELP_MESSAGE);
    }
    else {
       this.response.speak(
                    generateResponse(
                        buildSpeechletResponse("", true),
                        {}
                        )
                    ).listen(HELP_MESSAGE);     
    }
    
    if (event.request.intent.slots.positions.value === "software engineering") {
        console.log("Checked positions")
                context.succeed(
                generateResponse(
                    buildSpeechletResponse("Ask software engineering question", true),
                    {}
                    )
                )
                this.response.speak(
                    generateResponse(
                        buildSpeechletResponse("", true),
                        {}
                        )
                    ).listen(HELP_MESSAGE);
    }
    else {
           this.response.speak(
                    generateResponse(
                        buildSpeechletResponse("", true),
                        {}
                        )
                    ).listen(ERROR_MESSAGE);  
    }
    
    if (event.request.intent.slots.company.value === "google" || event.request.intent.slots.company.value === "") {
        console.log("Checked positions")
                context.succeed(
                generateResponse(
                    buildSpeechletResponse("Ask software engineering question", true),
                    {}
                    )
                )
                this.response.speak(
                    generateResponse(
                        buildSpeechletResponse("", true),
                        {}
                        )
                    ).listen(HELP_MESSAGE);
    }
    else {
           this.response.speak(
                    generateResponse(
                        buildSpeechletResponse("", true),
                        {}
                        )
                    ).listen(ERROR_MESSAGE);  
    }
    
    switch (event.request.type) {
        case "LaunchRequest":
            //Launch Request
            console.log("Launch Request")
            context.succeed(
                generateResponse(
                    buildSpeechletResponse("", true),
                    {}
                    )
                )
                this.response.speak(
                    generateResponse(
                        buildSpeechletResponse("", true),
                        {}
                        )
                    ).listen(HELP_MESSAGE);
            break;
        
        case "IntentRequest":
            // Intent Request
            console.log("Intent Request")
             context.succeed(
            /*    generateResponse(
                    buildSpeechletResponse("Intent Request reached", true),
                    {}
                    )
                ) */
                this.response.speak(
                    generateResponse(
                        buildSpeechletResponse("Intent Request reached ", true),
                        {}
                        )
                    ).listen(ERROR_MESSAGE)
                )
            break;
        
        case "SessionEndedRequest":
            // Session Ended Request
            console.log('Session Ended Request')
            break;
            
        default:
            context.fail(`INVALID REQUEST TYPE: ${event.request.type}`)
            
    }
    // TODO implement
    callback(null, 'Hello from Lambda');
    }
    catch (error) { context.fail(`Exception: ${error}`) }
    
}

// Helpers
function buildSpeechletResponse(output, shouldEndSession) {
    return {
        outputSpeech: {
          text: output,
          type: "PlainText"
        },
    shouldEndSession: shouldEndSession,
    
    }
    
    
}

function generateResponse(speechletResponse, sessionAttributes) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    }
}

// This is a list of constant statements used by the program
const WELCOME_MESSAGE = "You've activated Alexa Interview Me. You can ask me to mock an interview for a specific job, OR company. What would you like to do?";
const HELP_MESSAGE = "Please let me know what POSITION, and COMPANY you'd like to interview for";
const ERROR_MESSAGE = "I'm sorry, could you try again?";