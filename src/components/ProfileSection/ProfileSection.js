import React from 'react';
import Collapsible from 'react-collapsible';

export const ProfileSection = (props) => {
  const { content, name } = props;

  return (
    <Collapsible
      openedClassName="profile"
      contentInnerClassName="profile"
      contentOuterClassName="profile"
      trigger={`${name}  ▼`}
      triggerWhenOpen={`${name}  ▲`}
    >
      {content}
    </Collapsible>
  )
}

export default ProfileSection;