import { APPWRITE_ENDPOINT, APPWRITE_PROJECT_ID } from '@/variables';
import { Account, Client } from 'appwrite';

export const client = new Client()
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(APPWRITE_PROJECT_ID);

export const account = new Account(client);
