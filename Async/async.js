// javascript ->> synchronus
// ->>singleThread
//  JavaScript is single-threaded and synchronous by nature,
// but it can handle asynchronous tasks using Web APIs + Event Loop + Callback Queue.

// JavaScript itself runs one line at a time (synchronous), but things like setTimeout(), fetch(), and promises are handled by the browser (or Node.js runtime), allowing non-blocking async execution.

//execution cotext 
// execute one line at a time
// -->log(1)
// -->log(2)
//  callstack          memory heap

//    Blocking code                     vs                    Non Blocking code
// -->block the flow of program                            -->Do not block execution                    
// -->read file sync                                       -->Read file async            

