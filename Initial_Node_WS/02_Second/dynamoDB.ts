//import { APP } from '@anthem/utils';
import * as AWS from 'aws-sdk';
import { Service } from 'typedi';
//import { IDbClient } from './iDbClient';


@Service()
export class DynamoDbClient {
  private _dynamoDb: AWS.DynamoDB;
  private _client: AWS.DynamoDB.DocumentClient;

  contructor() {
    this.initialize();
  }

  initialize() {
    if (!this._client) {
      AWS.config.update({
        region: 'us-west-2',
        accessKeyId: 'dummykeyid',
        secretAccessKey: 'dummykey',
        endpoint: 'http://va10n50758.us.ad.wellpoint.com:8000'
      }, true);
      this._dynamoDb = new AWS.DynamoDB();
      this._client = new AWS.DynamoDB.DocumentClient({
        service: this._dynamoDb
      });
    }
  }

  add(tableName: string, data: any): Promise<any> {
    this.initialize();
    return new Promise((resolve, reject) => {
      this._client.put(
        {
          TableName: tableName,
          Item: data
        },
        (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        }
      );
    });
  }

  read(tableName: string, key: any, value: any): Promise<any> {
    this.initialize();
    let params: any = {
      TableName: tableName,
      Key: {}
    };
    params.Key[key] = value;
    return new Promise((resolve, reject) => {
      this._client.get(
        params,
        (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        }
      );
    });
  }

  delete(tableName: string, key: any, value: any): Promise<any> {
    this.initialize();
    let k: any = {};
    k[key] = value;
    return new Promise((resolve, reject) => {
      this._client.get(
        {
          TableName: tableName,
          Key: k
        },
        (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        }
      );
    });
  }



  static constructResponse(virtualDbData: any): Promise<any> {
    return new Promise(async (resolve) => {
      let result = {};
      let timeout = 0;
      try {
        virtualDbData.contentType = virtualDbData.contentType || 'application/json';
        if (virtualDbData.fileName) {
          //result = fs.createReadStream(`${process.cwd()}${APP.config.app.virtualFileDownloadPath}${virtualDbData.fileName}`);
          //serverResponse.setHeader('content-disposition', `attachment; filename=${virtualDbData.fileName}`);
        }
        else {
          if (virtualDbData.contentType.indexOf('application/json') >= 0 && typeof virtualDbData.body === 'string') {
            virtualDbData.body = JSON.parse(virtualDbData.body);
          }

          result = virtualDbData.body;
        }
        timeout = virtualDbData.delay || 0;
      } catch (e) {
        result = { exceptionMsg: e.stack };
      }

      if (timeout) {
        setTimeout(() => {
          resolve(result);
        }, timeout);
      } else {
        resolve(result);
      }
    });
  }
}
