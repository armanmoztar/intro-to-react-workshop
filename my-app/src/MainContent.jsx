import PostCard from './PostCard';

function MainContent() {
  return (
    <div>
      <PostCard title="First Post" content="This is the content of the first post." />
      <PostCard title="Another Post" content="Here's some more content in a second post." />
    </div>
  );
}

export default MainContent;
