exports.handler = (event, context, callback) => {
    try {
    if (event.session.new) {
        // New Session
        console.log("New Session!")
    }
    
   switch (event.request.type) {
        
       case "LaunchRequest":
            //Launch Request
            console.log("Launch Request")
            context.succeed(
                generateResponse(
                    buildSpeechletResponse("Welcome to an alexa skill running", true),
                    {}
                    )
                )
                this.response.speak(
                    generateResponse(
                        buildSpeechletResponse("Welcome to an alexa skill running", true),
                        {}
                        )
                    )
            break;
            
       case "IntentRequest":
            // Intent Request
            console.log("Intent Request")
             context.succeed(
                generateResponse(
                    buildSpeechletResponse("Intent Request reached", true),
                    {}
                    )
                )
                this.response.speak(
                    generateResponse(
                        buildSpeechletResponse(" Intent Request reached ", true),
                        {}
                        )
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