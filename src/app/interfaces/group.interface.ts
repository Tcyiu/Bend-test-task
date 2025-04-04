import Thing from '../interfaces/thing.interface';

export default interface Group {
  headThingId: number;
  groupStatus: 'open' | 'indeterminate' | 'closed';
  groupThings: Thing[];
}
