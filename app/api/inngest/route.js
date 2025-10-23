import {server} from 'inngest/next';
import {inngest} from '@/config/inngest';


//Create an API  that servers zero functions

export const {GET,POST,PUT} = server({
    client: inngest,
    functions:[
        syncUserCreation,
        syncUserUpdation,
        syncUserDeletion
    ],
});