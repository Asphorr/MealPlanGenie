import * as React from 'react';

interface Props {}

const EmptyComponent: React.FC<Props> = ({}) => {
  return (
    <div className="empty-component">
      <h2>No recipes found.</h2>
      <p>It looks like there are no recipes in your database.</p>
    </div>
  );
};

export default EmptyComponent;
