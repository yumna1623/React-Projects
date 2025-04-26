import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('680c6212003cfcef2a73'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
