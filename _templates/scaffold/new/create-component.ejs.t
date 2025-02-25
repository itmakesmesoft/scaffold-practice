---
to: src/<%= name %>.tsx
---
import React from 'react';

const <%= name %> = ():React.ReactNode => {
  return (
    <div>
    컴포넌트 이름은 <%= name %> 입니다.
    </div>
  )
}

export default <%= name %>;