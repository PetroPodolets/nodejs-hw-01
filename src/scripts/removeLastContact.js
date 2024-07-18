import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeLastContact = async () => {

    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        const contacts = JSON.parse(data);
        const count = contacts.length;

        if (count > 0) {
            contacts.pop();
            await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
            console.log('Delet successful');
        } else {
            console.log("This file is empty");
        }

    } catch (error) {
        console.error(error);
    }
};

removeLastContact();
