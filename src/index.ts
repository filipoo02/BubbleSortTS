import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();

const charColl = new CharactersCollection('KmdqIEAXxa');
charColl.sort();
console.log(charColl.data);

const numColl = new NumbersCollection([10, 0, 2, -3, -23]);
numColl.sort();
console.log(numColl.data);
