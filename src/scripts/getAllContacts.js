import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import path from 'node:path';

export const getAllContacts = async () => {
    try {
        const data = await fs.readFile(path.resolve(PATH_DB), { encoding: 'utf8' });
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

console.log(await getAllContacts());
