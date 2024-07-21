import Dbpb from './DbInstance';

export default async function DbAuth() {
    const url = 'https://power-.pockethost.io';
    const email = process.env.NEXT_PUBLIC_DB_USER //'aderawbetselot@gmail.com';
    const password = process.env.NEXT_PUBLIC_DB_PASSWORD//'0987654321';

    // Fetch access token if cache is invalid
    const pb = new Dbpb(url);
    const authData = await pb.admins.authWithPassword(email, password);
    const accessToken = authData.token;

    if (!accessToken) {
        throw new Error('PocketBase access token not found');
    }

    return pb;
}
