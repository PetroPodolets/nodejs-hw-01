import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';
import path from 'node:path';

export const addOneContact = async () => {
    try {
        const data = await fs.readFile(path.resolve(PATH_DB), { encoding: 'utf8' });
        const contacts = JSON.parse(data);

        contacts.push(createFakeContact());


        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
        console.log('Adding successful');
    } catch (error) {
        console.error(error);
    }
};

await addOneContact();
