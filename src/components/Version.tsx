import React, { memo } from "react";
import { ADDON_ID, TOOL_ID } from "../constants";

const style = {
  textTansform: 'unset',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '16px',
  letterSpacing: '-0.14px',
  marginLeft: '16px',
  backgroundColor: '#2058A8',
  color: '#ffffff',
  borderRadius: '16px',
  padding: '4px 12px',
}

export const Version = memo(function PackageVersion({ 
  version, 
  packageName 
}: { 
  version: string,
  packageName: string 
}) {
  return (
    <p style={style} className={ADDON_ID} key={TOOL_ID}>
      {`${packageName}: ${version}`}
    </p>
  );
});
