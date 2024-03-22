here we are studing the node js working or architecture 

1) Node js working start with a client ..there is a client who made a request to the server for any resourse 
then the request get queued up and it is first check whether it is a synchronous req ( blocking req)
or asynchronous request 

2) there is one event loop which keeps on iterating the request and get updated the request one after the other on the basis of what comes next 


3) if it is a non bLocking request 
Non-blocking i/o  means working with multiple requests without blocking the thread for a single request. 
I/O basically interacts with external systems such as files, databases. Node.js is not used for CPU-intensive work means for
calculations, video processing because a single thread cannot handle the CPU works.

4)if it a blocking request 
Asynchronous is executing a callback function. The moment we get the response from the other server or database it will execute a
callback function.

5)Event loop 
Event loop: The event loop contains a single thread and is responsible for handling easy tasks like executing callbacks and 
network I/O.Event loop: The event loop contains a single thread and is responsible for handling easy tasks like executing callbacks and network 
I/O

The event loop is an indefinite loop that continuously receives the request and processes them. It checks the queue and waits for the incoming
request indefinitely.


6)Thread loop 
Though node.js is single-threaded it internally maintains a thread pool. When non-blocking requests are accepted there are processed in an 
event loop, but while accepting blocking requests it checks for available threads in a thread pool, assigns a thread to the client’s request
which is then processed and send back to the event loop, and response is sent to the respective client.
