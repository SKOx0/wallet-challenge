import Enzyme from 'enzyme';
import ReactAdapter from 'enzyme-adapter-react-16';
import fetch from 'isomorphic-fetch';
import * as emotion from 'emotion';
import { createSerializer } from 'jest-emotion';


global.fetch = fetch;

Enzyme.configure({ adapter: new ReactAdapter() });

expect.addSnapshotSerializer(createSerializer(emotion));
