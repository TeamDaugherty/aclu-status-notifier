import { API } from 'aws-amplify';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql';
import { getComplaint } from '../graphql/queries';
import { createComplaint, updateComplaint, createComplaintUpdatedItem } from '../graphql/mutations'

const callApi = async (query, variables) => {
    // TODO: pull token
    
    return await API.graphql({ 
        query, 
        variables,
        // authMode: GRAPHQL_AUTH_MODE.API_KEY,
        // authToken: 'da2-rp42tpzpszeizdofyfmgqsbpqu'
    });
    // {"x-api-key": 'da2-rp42tpzpszeizdofyfmgqsbpqu'});
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

    // TODO: createComplaintUpdatedItem

    return result.data.createComplaint;
}

export const updateComplaintCall = async (values) => {
    const { complaintID, emailAddress, phoneNumber, complaintStatus } = values

    // TODO: phone number support

    const variables = {
        "input": {
            "id": complaintID,
            "complaintStatus": complaintStatus,
            "emailAddress": emailAddress                    
        }
    }
    const result = await callApi(updateComplaint, variables);

    // TODO: createComplaintUpdatedItem

    return result.data.updateComplaint;
}