import { API, Auth } from 'aws-amplify';
import { getComplaint } from '../graphql/queries';
import { createComplaint, updateComplaint, createComplaintAuditItem } from '../graphql/mutations'
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql';

const callApi = async (query, variables) => {
    const session = await Auth.currentSession();
    const token = session.getAccessToken().jwtToken;

    return await API.graphql({ 
        query, 
        variables,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
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

    const variables = {
        "input": {
            "id": complaintID,
            "phoneNumber": phoneNumber,
            "complaintStatus": complaintStatus,
            "emailAddress": emailAddress                    
        }
    }
    const result = await callApi(createComplaint, variables);

    await createComplaintAuditItemCall(complaintID, complaintStatus, undefined)

    return result.data.createComplaint;
}

export const updateComplaintCall = async (values) => {
    const { complaintID, emailAddress, phoneNumber, complaintStatus, priorComplaintStatus } = values

    const variables = {
        "input": {
            "id": complaintID,
            "phoneNumber": phoneNumber,
            "complaintStatus": complaintStatus,
            "emailAddress": emailAddress                    
        }
    }
    const result = await callApi(updateComplaint, variables);
    await createComplaintAuditItemCall(complaintID, complaintStatus, priorComplaintStatus)

    return result.data.updateComplaint;
}

const createComplaintAuditItemCall = async (complaintId, statusTo, statusFrom) => {
    const user = await Auth.currentUserInfo();

    const variables = {
        "input": {
            "complaintId": complaintId,
            "statusTo": statusTo,
            "statusFrom": statusFrom,
            "updatedBy": user.attributes.email         
        }
    }

    const result = await callApi(createComplaintAuditItem, variables);
    return result.data.createComplaintUpdatedItem;
}