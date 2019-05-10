import React from 'react';
import Collapsible from 'react-collapsible';

export const ProfileSection = (props) => {
  const { classes, content, name } = props;

  return (
    <Collapsible
      openedClassName={classes ? classes : 'profile'}
      contentInnerClassName={classes ? classes : 'profile'}
      contentOuterClassName={classes ? classes : 'profile'}
      trigger={`${name}  ▼`}
      triggerWhenOpen={`${name}  ▲`}
    >
      {content}
    </Collapsible>
  )
}

export default ProfileSection;