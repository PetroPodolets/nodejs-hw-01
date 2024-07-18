import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import path from 'node:path';

export const removeAllContacts = async () => {
    try {
        const data = await fs.readFile(path.resolve(PATH_DB), { encoding: 'utf8' });
        let contacts = JSON.parse(data);

        contacts = [];

        await fs.writeFile(PATH_DB, JSON.stringify(contacts));
        console.log('Delete successful');
    } catch (error) {
        console.error(error);
    }
};

removeAllContacts();
