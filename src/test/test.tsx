import React, { FC } from 'react';

interface TestProps {
  test: number
}

const Test: FC<TestProps> = ({ test }) =>  {
  return (
    <div>
      test: { test }
    </div>
  )
}

export default Test;