import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './presentational/Navigation';
import Home from './presentational/Home';
import Contact from './presentational/Contact';
import NotFound from './presentational/NotFound';

export default (
    <Route path='/' component={Navigation}>
        <IndexRoute component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='*' component={NotFound} />
    </Route>
);