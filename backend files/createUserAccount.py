import json
import boto3


dynamodb = boto3.resource('dynamodb')

table = dynamodb.Table('UserProfile')

def lambda_handler(event, context):
    
    
    userid=event['userId']
    firstname=event['userFirstName']
    lastname=event['userLastName']
    email=event['userEmailId']
    password=event['userPassword']
    mobilenumber=event['userMobileNumber']
    
    

    response = table.put_item(
        Item={
            'userId': userid,
            'userFirstName':firstname,
            'userLastName':lastname,
            'userEmailId':email,
            'userPassword':password,
            'userMobileNumber':mobilenumber
            })


    return {
        'statusCode': 200,
        'body': json.dumps('successful')
    }
