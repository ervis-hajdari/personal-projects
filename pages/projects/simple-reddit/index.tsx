import Heading from 'main/components/projects/Heading';
import More from 'main/components/projects/More';
import Page from 'main/components/utility/Page';
import Projects from 'main/components/projects/Projects';
import React from 'react';

function SimpleReddit() {
  return (
    <Page
      currentPage="Simple Reddit"
      meta={{ title: 'Simple Reddit', desc: 'My projects.' }}
    >
      {/* <Heading />
      <Projects />
      <More /> */}
    </Page>
  );
}

export default SimpleReddit;
