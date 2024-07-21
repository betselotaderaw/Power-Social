import PocketBase from 'pocketbase';
export default class Dbpb {
    constructor(url) {
        if(!Dbpb.instance) {
            Dbpb.instance = new PocketBase(url);
        }
        return Dbpb.instance;
    }
}