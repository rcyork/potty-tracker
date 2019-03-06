import { ObjectId } from 'mongodb';
import db from '../connection';

export const getAllLetOuts = async () => {
  return db
    .get()
    .collection('letOuts')
    .find()
    .toArray();
};

export const createLetOut = async (
  leo: string,
  lucy: string,
  date?: number,
) => {
  const doc = { leo, lucy, date: date ? new Date(date) : new Date() };

  return db
    .get()
    .collection('letOuts')
    .insertOne(doc)
    .then(res => res.ops[0]);
};

export const updateLetOut = async (_id: string, doc: object) => {
  return db
    .get()
    .collection('letOuts')
    .findOneAndUpdate(
      { _id: new ObjectId(_id) },
      { $set: doc },
      { returnOriginal: false },
    )
    .then(res => res.value);
};

export const deleteLetOut = async (_id: string) => {
  return db
    .get()
    .collection('letOuts')
    .findOneAndDelete({ _id: new ObjectId(_id) })
    .then(res => res.value);
};
