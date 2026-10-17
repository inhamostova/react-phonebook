import axios from 'axios';

axios.defaults.baseURL = 'https://6ad34e1c59dd78397bbb8d62.mockapi.io';

export async function getContacts() {
  const resp = await axios.get('/contacts');
  return resp.data;
}

export async function postContact(data) {
  const resp = await axios.post('/contacts', { ...data });
  return resp.data;
}

export async function removeContact(id) {
  const resp = await axios.delete(`/contacts/${id}`);
  return resp.data;
}
