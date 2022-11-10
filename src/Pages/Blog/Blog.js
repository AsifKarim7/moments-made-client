import React from 'react';

const Blog = () => {
    return (
        <div className='max-w-screen-xl mx-auto my-10'>
            <div className='text-center text-black shadow-sm py-10 my-6 rounded-2xl bg-white'>
                <h2 className='text-4xl font-bold'>Difference between SQL and NoSQL</h2>
                <p className='mx-4 md:mx-28 mt-6 text-base font-thin'>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
            </div>
            <div className='text-center text-black shadow-sm py-10 my-6 rounded-2xl bg-white'>
                <h2 className='text-4xl font-bold'>What is JWT, and how does it work?</h2>
                <p className='mx-4 md:mx-28 mt-6 text-base font-thin'>JWT is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a crypto algorithm to ensure that the claims cannot be altered after the token is issued.<br />JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
            </div>
            <div className='text-center text-black shadow-sm py-10 my-6 rounded-2xl bg-white'>
                <h2 className='text-4xl font-bold'>What is the difference between javascript and NodeJS?</h2>
                <p className='mx-4 md:mx-28 mt-6 text-base font-thin'>JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on google’s v8 engine. JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser. JavaScript can manipulate DOM or add HTML within whereas Node.js doesn’t have the capability to add HTML. JavaScript is mainly used to create front end web applications or develop client-side whereas Node.js is used on the back end development that is server-side development.</p>
            </div>
            <div className='text-center text-black shadow-sm py-10 my-6 rounded-2xl bg-white'>
                <h2 className='text-4xl font-bold'>How does NodeJS handle multiple requests at the same time?</h2>
                <p className='mx-4 md:mx-28 mt-6 text-base font-thin'>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
            </div>
        </div>
    );
};

export default Blog;