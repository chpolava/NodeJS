import 'reflect-metadata';
import { Get, JsonController } from 'routing-controllers';
import { DynamoDbClient } from "./dynamoDB";

@JsonController('/entry')
export class DemoRoutingControllers {

    constructor(private _dbClient: DynamoDbClient) {}

    @Get('/getRequest')
    public getreq(): string {
        return 'From Typescript file';
    }

    @Get('/readdb')
    public async getreqfromdb(): Promise<any> {
        let resultnew = this._dbClient.read('VirtualResponses', 'id', 'demo.post.GET..').then((result) => {
            return result.Item;
          });

        let resultfinal = DynamoDbClient.constructResponse(resultnew);
        return resultfinal;
    }

}