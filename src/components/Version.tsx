import React, { memo } from "react";
import { useParameter } from "storybook/internal/manager-api";
import { ADDON_ID, TOOL_ID } from "../constants";

const style = {
  'text-transform': 'unset',
  'font-size': '14px',
  'font-style': 'normal',
  'font-weight': '400',
  'line-height': '16px',
  'letter-spacing': '-0.14px',
  'margin-left': '16px',
  'background-color': '#2058A8',
  'color': '#ffffff',
  'border-radius': '16px',
  'padding': '4px 12px',
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
