import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        const contacts = JSON.parse(data);
        const count = contacts.length;
        return `Number of contacrts ${count}`;
    } catch (error) {
        console.error(error);
    }
};


console.log(await countContacts());
