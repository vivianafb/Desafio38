import mongoose from 'mongoose';

export class BaseRepository{
      _collection;

    constructor(
        collectionName,
        schema
        ) {
        this._collection = mongoose.model(collectionName,schema);
      }
  
      async get(id) {
        let output = [];
        try {
          if (id) {
            const document = await this._collection.findById(id);
            if (document) output.push(document);
          } else {
            output = await this._collection.find();
          }
          return output;
        } catch (err) {
          return output;
        }
      }
    
      async add(data){
        const addCollection = new this._collection(data);
        await addCollection.save();
        return addCollection
      }
  }