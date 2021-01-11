// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import blockContent from './blockContent';
import category from './category';
import post from './post';
import projects from './projects';
import author from './author';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([post, projects, author, category, blockContent]),
});
