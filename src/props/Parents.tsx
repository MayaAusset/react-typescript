import { ChildAsFc } from './Child';
const Parent = () => {
  return <ChildAsFc color={'red'} onClick={() => console.log('clicked')}>
    Blabl
  </ChildAsFc>;
};

export default Parent;
