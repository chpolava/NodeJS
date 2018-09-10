import "reflect-metadata"; // this shim is required
import {createExpressServer} from "routing-controllers";
import {DemoRoutingControllers} from "./routing_controllers_demo";
import {DynamoDbClient} from "./dynamoDB";

//import * as AWS from 'aws-sdk';


//import S3 = require('aws-sdk/clients/s3');
 
// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
   controllers: [DemoRoutingControllers, DynamoDbClient] // we specify controllers we want to use
});
 
// run express application on port 3000
app.listen(3000, () => { console.log('Listening on port 3000....')});