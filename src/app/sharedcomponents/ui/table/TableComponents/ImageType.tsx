import React from 'react';


const ImageType = React.memo(({ value }: any) => {
  if (!value) return <div />;

  return (
    <div className="relative h-16 w-10">
      <img src={value} alt={value}  />
    </div>
  );
});
export default ImageType;