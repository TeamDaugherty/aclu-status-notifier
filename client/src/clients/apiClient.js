import { API, Auth } from 'aws-amplify';
import AWS from 'aws-sdk'
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql';
import { getComplaint } from '../graphql/queries';
import { createComplaint, updateComplaint, createComplaintUpdatedItem } from '../graphql/mutations'

let token = undefined;

const getToken = async () => {
    try {
        // TODO: credentials
        // TODO: /env
        // TODO: pull token

        var ssm = new AWS.SSM({region: 'us-east-1'});

        var params = {
            Name: 'apiKey',
            WithDecryption: true
        };
    
        const result = await ssm.getParameter(params).promise()
        console.log('token result: ', result)
    
        token = 'da2-rp42tpzpszeizdofyfmgqsbpqu' 
    } catch (error) {
        console.error('unable to get token: ', error)
    }
}

const callApi = async (query, variables) => {
    if (!token) {
        await getToken()
    }

    return await API.graphql({ 
        query, 
        variables,
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
        authToken: token
    });
}

export const getComplaintbyIdCall = async (id) => {
    const variables = { "id": id }
    const result = await callApi(getComplaint, variables);
    return result.data.getComplaint;
}

export const createComplaintCall = async (values) => {
    const { complaintID, emailAddress, phoneNumber, complaintStatus } = values

    // TODO: phone number support

    const variables = {
        "input": {
            "id": complaintID,
            "complaintStatus": complaintStatus,
            "emailAddress": emailAddress                    
        }
    }
    const result = await callApi(createComplaint, variables);

    await createComplaintUpdatedItemCall(complaintID, complaintStatus, undefined)

    return result.data.createComplaint;
}

export const updateComplaintCall = async (values) => {
    const { complaintID, emailAddress, phoneNumber, complaintStatus, priorComplaintStatus } = values

    // TODO: phone number support

    const variables = {
        "input": {
            "id": complaintID,
            "complaintStatus": complaintStatus,
            "emailAddress": emailAddress                    
        }
    }
    const result = await callApi(updateComplaint, variables);

    await createComplaintUpdatedItemCall(complaintID, complaintStatus, priorComplaintStatus)

    return result.data.updateComplaint;
}

const createComplaintUpdatedItemCall = async (complaintId, statusTo, statusFrom) => {
    const user = await Auth.currentUserInfo();

    // TODO: Add complaintId field to table
    
    const variables = {
        "input": {
            // "complaintId": complaintId,
            "statusTo": statusTo,
            "statusFrom": statusFrom,
            "updatedBy": user.attributes.email         
        }
    }

    const result = await callApi(createComplaintUpdatedItem, variables);
    return result.data.createComplaintUpdatedItem;
}