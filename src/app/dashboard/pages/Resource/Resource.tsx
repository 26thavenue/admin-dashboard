'use client';
import PageLayout from '../../../sharedcomponents/ui/pageLayout';
import TabView from '../../../sharedcomponents/ui/TabView';
import Tab from '../../../sharedcomponents/ui/Tab';
import { useState } from 'react';
import Videos from './Videos';
// import Blogs from './Blogs';
// import Documents from './Documents';

const tabs = [
  { name: 'Videos', key: 'videos' },
  { name: 'Blogs', key: 'blogs' },
  { name: 'Documents', key: 'documents' },
];

const ResourcePage = () => {
  const [key, setKey] = useState<string>('videos');
  // const [key, setKey] = useState<string>(() => getInitialKey(location));

  const activeIndex = tabs?.findIndex(tab => tab.key === key);

  const handleSelect = (tabKey: string) => {
    setKey(tabKey);
  };

  return (
    <PageLayout title="Resources">
      <div className="relative w-full bg-white">
        <div className="sticky z-10 w-full bg-white pb-10">
          <Tab tabs={tabs} active={key} onSelect={handleSelect} />
        </div>
        <TabView
          index={activeIndex}
          tabs={[
            <Videos key="video" />,
            // <Blogs key="blogs" />,
            // <Documents key="documents" />,
          ]}
        />
      </div>
    </PageLayout>
  );
};

export default ResourcePage;