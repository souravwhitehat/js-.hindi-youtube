// javascript ->> synchronus
// ->>singleThread

const { log } = require("async")


//execution cotext 
// execute one line at a time
// -->log(1)
// -->log(2)
//  callstack          memory heap

//    Blocking code                     vs                    Non Blocking code
// -->block the flow of program                            -->Do not block execution                    
// -->read file sync                                       -->Read file async            

