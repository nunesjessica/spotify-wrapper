import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import { getAlbum } from '../src/album';

describe('Albums', () => {
    
    let fetchedStub;

    beforeEach( () => {
      fetchedStub = sinon.stub(global, 'fetch');
      fetchedStub.resolves({ json: () => ({ album: 'name'}) });
    });
  
    afterEach( () => {
      fetchedStub.restore();
    });

    describe('getAlbum', () => {
        it('should call fetch method', () => {
            const album = getAlbum();
            expect(fetchedStub).to.have.been.calledOnce;
        });
    });
});