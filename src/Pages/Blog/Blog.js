import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container>
            <div>
                <h3>1 ## Cross-Origin Resource Sharing (CORS)</h3>
                <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
            </div>
        
            <div>
                <h3>2 ## Why we are using firebase ? </h3>
                <p>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.</p>
                <h3># Others options do i have to implemtation ? </h3>
                <h4>* 5 Common Authentication Types</h4>
                <ul>
                    <li>Password-based authentication. Passwords are the most common methods of authentication. .</li>
                    <li>Multi-factor authentication. ...</li>
                    <li>Certificate-based authentication. ...</li>
                    <li>Biometric authentication. ...</li>
                    <li>Token-based authentication.</li>
                </ul>
            </div>

            <div>
                <h3>3 ## How does the private route works</h3>
                <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
            </div>

            <div>
                <h3>4 ## What is Node ? How Does Node Work ?</h3>
                <p>Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be ...</p>
                <p><strong>Node Works</strong> So as well as opening up a savings account, you link Nude to your current account via Open Banking so it can analyse your spending and advise ways to help you save, like a digital financial advisor. In the app, you'll see details on how to bring the time down till you hit your deposit goal.</p>
            </div>


        </Container>
    );
};

export default Blog;