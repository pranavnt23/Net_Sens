import axios from 'axios';
import { encryptData } from '../utils/encryption';
import { API_URL } from '../config/apiConfig';

export const syncContacts = async (contacts) => {
  const filtered = contacts.map(({ name, email }) => ({ name, email }));
  const encrypted = encryptData(filtered);

  try {
    const response = await axios.post(`${API_URL}/sync`, { data: encrypted });
    console.log('Sync success:', response.data);
  } catch (err) {
    console.error('Sync failed. Will retry later.', err.message);
  }
};
