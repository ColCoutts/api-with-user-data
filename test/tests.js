import { app } from '../src/firebase.js';
import './html-equal.js';
import './make-template-component.test.js';
import './header-component.test.js';
import './make-search-url.test.js';
import './hash-query.test.js';
import './convert-object-to-array.test.js';
import './paging-component.test.js';

QUnit.done(() => {
    app.delete();
});